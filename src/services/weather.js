import axios from 'axios';

export const getWeather = async (lat, lon) => {
  return await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt&units=metric&appid=b731959927468af56cdb8045edcbaae2`,
  );
};
