import "../blocks/WeatherCard.css";
import { weatherOptions, weatherOptionsDefault } from "../utils/const.js";

function WeatherCard({ weatherData }) {
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
      <p className="weather__card-temp">{weatherData.temp.F}&deg; F</p>
      <img
        src={weatherOption?.url}
        alt={`Card Showing ${weatherOption?.condition} weather`}
        className="weather__card-image"
      />
    </div>
  );
}

export default WeatherCard;
