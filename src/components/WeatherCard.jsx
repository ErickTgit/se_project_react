import "../blocks/WeatherCard.css";
import { weatherOptions, weatherOptionsDefault } from "../utils/const.js";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let weatherOption;
  if (filteredOptions.length === 0) {
    weatherOption = weatherOptionsDefault[weatherData.isDay ? "Day" : "Night"];
  } else {
    weatherOption = filteredOptions[0];
  }

  return (
    <div className="weather__card-container">
      <p className="weather__card-temp">
        {weatherData.temp[currentTemperatureUnit]}&deg; {currentTemperatureUnit}{" "}
      </p>
      <img
        src={weatherOption?.url}
        alt={`Card Showing ${weatherOption?.condition} weather`}
        className="weather__card-image"
      />
    </div>
  );
}

export default WeatherCard;
