import WeatherCard from "./WeatherCard";
import ClothingSection from "./ClothesSection";
import "../blocks/Main.css";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

function Main({ weatherData, clothingItems, handleCardClick }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp[currentTemperatureUnit]}&deg;{" "}
          {currentTemperatureUnit} / You may want to wear:
        </p>
        <ClothingSection
          weatherData={weatherData}
          clothingItems={clothingItems}
          handleCardClick={handleCardClick}
          showAll={false}
        />
      </section>
    </main>
  );
}

export default Main;
