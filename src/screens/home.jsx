import {Text, StyleSheet, ImageBackground, View} from 'react-native';
import CardInfo from '../components/CardInfo';
import useWeather from '../hooks/useWeather';
import BackgroundDay from '../assets/imgs/backgrounds/ceu.jpg';
import BackgroundNight from '../assets/imgs/backgrounds/background_night.png';

const hour = new Date().getHours();

export default function Home() {
  const {weather} = useWeather();

  return (
    <ImageBackground
      source={hour >= 18 ? BackgroundNight : BackgroundDay}
      resizeMode="cover"
      style={style.container}>
      <View style={style.head}>
        {weather && (
          <>
            <Text style={style.city_text}>{weather.city}</Text>
            <Text style={style.grade}>{weather.temp}°</Text>
            <Text style={style.status_time}>{weather.description}</Text>
            <Text style={style.min_max_text}>
              Min: {weather.temp_min}° Max: {weather.temp_max}°
            </Text>
          </>
        )}
      </View>

      <View style={style.time_info}>
        {weather && (
          <>
            <CardInfo
              icon={require('../assets/imgs/weathers/Sunrise.png')}
              title="Sunrise"
              resp={weather.sunrise}
            />
            <CardInfo
              icon={require('../assets/imgs/weathers/Sunset.png')}
              title="Sunset"
              resp={weather.sunset}
            />
            <CardInfo
              icon={require('../assets/imgs/weathers/Humidity.png')}
              title="Humidade"
              resp={weather.humidity}
            />
            <CardInfo
              icon={require('../assets/imgs/weathers/Row.png')}
              title="Sensação"
              resp={weather.pressure}
            />
            <CardInfo
              icon={require('../assets/imgs/weathers/Wind.png')}
              title="Vento"
              resp={weather.wind}
            />
            <CardInfo
              icon={require('../assets/imgs/weathers/info.png')}
              title="Info"
              resp="Alarmes"
            />
          </>
        )}
      </View>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  head: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  city_text: {
    color: hour >= 18 ? '#FFFFFF' : '#1c1b33',
    fontSize: 44,
    fontWeight: '400',
    lineHeight: 45,
  },
  grade: {
    color: hour >= 18 ? '#FFFFFF' : '#1c1b33',
    fontSize: 96,
    marginLeft: 25,
    letterSpacing: 0.37,
    lineHeight: 100,
    fontWeight: '100',
    fontFamily: 'Montserrat-VariableFont_wght',
  },
  status_time: {
    letterSpacing: 0.38,
    color: hour >= 18 ? 'rgba(235, 235, 245, 0.6)' : 'rgba(235, 235, 245, 1)',
    fontWeight: '800',
    fontSize: 20,
    lineHeight: 18,
  },
  min_max_text: {
    letterSpacing: 0.38,
    color: hour >= 18 ? '#FFFFFF' : '#1c1b33',
    fontWeight: '800',
    fontSize: 15,
  },
  time_info: {
    height: 260,
    backgroundColor: '#1c1b33e6',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    flexWrap: 'wrap',
  },
});
