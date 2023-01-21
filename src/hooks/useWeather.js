import {useState, useEffect} from 'react';
import {requestMultiple, PERMISSIONS} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import {getWeather} from '../services/weather';

export default () => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    (async function loadPosition() {
      const result = await requestMultiple([
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
      ]);

      if (result) {
        await Geolocation.getCurrentPosition(
          async ({coords}) => {
            let weather = await getWeather(coords.latitude, coords.longitude);
            const sunrise = new Date(weather.data.sys.sunrise * 1000);
            const sunset = new Date(weather.data.sys.sunset * 1000);
            weather = {
              temp: parseInt(weather.data.main.temp),
              temp_max: parseInt(weather.data.main.temp_max),
              temp_min: parseInt(weather.data.main.temp_min),
              city: weather.data.name,
              sunrise: `${sunrise.getHours()}:${sunrise.getMinutes()}`,
              sunset: `${sunset.getHours()}:${sunset.getMinutes()}`,
              humidity: weather.data.main.humidity,
              pressure: weather.data.main.pressure,
              wind: weather.data.wind.speed,
              description: weather.data.weather[0].description,
            };
            setWeather(weather);
          },
          error => {
            console.log('Não foi possível obter a localização');
          },
          {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000,
            showLocationDialog: true,
          },
        );
      }
    })();
  }, []);
  return {weather};
};
