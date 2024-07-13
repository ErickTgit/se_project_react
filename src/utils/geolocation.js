import { geolocationOptions } from "./const";

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
    console.log(error);
  };

  navigator.geolocation.getCurrentPosition(
    successCallback,
    errorCallback,
    geolocationOptions
  );
}
