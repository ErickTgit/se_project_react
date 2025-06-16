export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = {
    F: data.main.temp,
    C: (((data.main.temp - 32) * 5) / 9).toFixed(2),
  };
  result.type = getWeatherType(data.main.temp);
  result.condition = data.weather[0].main.toLowerCase();
  result.isDay = isDay(data.sys, Date.now());
  return result;
};

const isDay = ({ sunrise, sunset }, now) => {
  return sunrise < now && now < sunset * 1000;
};

const getWeatherType = (tempurature) => {
  if (tempurature > 82) {
    return "hot";
  } else if (tempurature >= 72 && tempurature < 82) {
    return "warm";
  } else {
    return "cold";
  }
};
