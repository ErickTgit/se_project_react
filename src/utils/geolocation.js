import { geolocationOptions } from "./const";

const fallbackCoords = {
  latitude: 40.7128,
  longitude: -74.006,
};

export function geolocation(setCoords) {
  const successCallback = (position) => {
    const { coords: positionCoords } = position;
    const newCoords = {
      latitude: positionCoords.latitude,
      longitude: positionCoords.longitude,
    };
    setCoords(newCoords);
  };

  const errorCallback = (error) => {
    console.warn("Geolocation failed:", error.message);
    console.info("Using fallback location.");
    setCoords(fallbackCoords);
  };

  navigator.geolocation.getCurrentPosition(
    successCallback,
    errorCallback,
    geolocationOptions
  );
}
