import { useEffect, useState } from "react";
import { APIkey, defaultClothingItems } from "../utils/const.js";
import { Routes, Route } from "react-router-dom";
import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main.jsx";
import ConfirmDeleteModal from "./ConfirmDeleteModal.jsx";
import { Profile } from "./Profile.jsx";
import ItemModal from "./ItemModal.jsx";
import { geolocation } from "../utils/geolocation";
import { getWeather, filterWeatherData } from "../utils/weatherApi";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext.js";
import Footer from "./Footer.jsx";
import AddItemModal from "./AddItemModal.jsx";
import { getItems } from "../utils/api.js";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [coords, setCoords] = useState(null);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  //Event Handlers

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleDeleteCard = (id) => {
    setClothingItems((prevItems) =>
      prevItems.filter((item) => item._id !== id)
    );
    setActiveModal("");
  };

  const handleDeleteCardClick = () => {
    setActiveModal("confirm-delete");
  };

  const handleAddItemModalSubmit = ({ name, imageUrl, weather }) => {
    const newId = Math.max(...clothingItems.map((item) => item._id)) + 1;
    setClothingItems((prevItems) => [
      { name, link: imageUrl, weather, _id: newId },
      ...prevItems,
    ]);

    handleCloseModal();
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleCloseModal = (e) => {
    setActiveModal("");
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  useEffect(() => {
    geolocation(setCoords);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        console.log(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (coords) {
      getWeather(coords, APIkey)
        .then((data) => {
          const filteredData = filterWeatherData(data);
          setWeatherData(filteredData);
        })
        .catch(() => {
          console.error;
        });
    }
  }, [coords]);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    if (activeModal) {
      document.addEventListener("keydown", handleEscapeKey);
    }
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [activeModal]);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ handleToggleSwitchChange, currentTemperatureUnit }}
    >
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  clothingItems={clothingItems}
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  clothingItems={clothingItems}
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  handleAddClick={handleAddClick}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
        <AddItemModal
          isOpen={activeModal === "add-garment"}
          onClose={handleCloseModal}
          onAddItemModalSubmit={handleAddItemModalSubmit}
        ></AddItemModal>

        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          onClose={handleCloseModal}
          handleDelete={handleDeleteCardClick}
        />

        <ConfirmDeleteModal
          isOpen={activeModal === "confirm-delete"}
          onCancel={handleCloseModal}
          onClose={handleCloseModal}
          onConfirm={() => handleDeleteCard(selectedCard._id)}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
