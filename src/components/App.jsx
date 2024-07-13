import { useEffect, useState } from "react";
import { APIkey } from "../utils/const.js";
import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main.jsx";
import ModalWithForm from "./ModalWithForm.jsx";
import ItemModal from "./ItemModal.jsx";
import { geolocation } from "../utils/geolocation";
import { getWeather, filterWeatherData } from "../utils/weatherApi";
import Footer from "./Footer.jsx";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [coords, setCoords] = useState(null);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [selectedRadioButton, setSelectedRadioButton] = useState("");

  const handleRadioChange = (event) => {
    setSelectedRadioButton(event.target.value);
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    geolocation(setCoords);
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
    } else {
      document.removeEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [activeModal]);

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        <Footer />
      </div>

      <ModalWithForm
        buttonText={"Add Garment"}
        title={"New Garment"}
        activeModal={activeModal}
        onClose={handleCloseModal}
      >
        <h2 className="modal__input-title">Name</h2>
        <label htmlFor="name" className="modal__label">
          {""}
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
          ></input>{" "}
          <span
            className="modal__span modal__error"
            id="input-type-url-error"
          ></span>
        </label>
        <h2 className="modal__input-title">Image</h2>
        <label htmlFor="imageUrl" className="modal__label">
          {""}
          <input
            type="text"
            className="modal__input"
            id="imageUrl"
            placeholder="Image Url"
          ></input>{" "}
          <span
            className="modal__span modal__error"
            id="input-type-url-error"
          ></span>
        </label>
        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend">Select the weather type</legend>
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input
              name="weather"
              checked={selectedRadioButton === "Hot"}
              onChange={handleRadioChange}
              id="hot"
              type="radio"
              className="modal__radio_input"
              value="Hot"
            />
            <a> Hot </a>
          </label>
          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            <input
              onChange={handleRadioChange}
              checked={selectedRadioButton === "Warm"}
              id="warm"
              name="weather"
              type="radio"
              className="modal__radio_input"
              value="Warm"
            />
            <a> Warm</a>
          </label>
          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            <input
              id="cold"
              checked={selectedRadioButton === "Cold"}
              onChange={handleRadioChange}
              name="weather"
              type="radio"
              className="modal__radio_input"
              value="Cold"
            />
            <a> Cold</a>
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
