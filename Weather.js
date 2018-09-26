import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import propTypes from 'prop-types';

const weatherCases = {
  Rain: {
    colors: ["#00C6F8", "#005BEA"], 
    title: "Raining Day",
    subtitle: "For more info look outside",
    icon: "weather-rainy"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"], 
    title: "Sunny Day",
    subtitle: "Go outside for Vitamin DDD",
    icon: "weather-sunny"
  },
  Thunder: {
    colors: ["#00ECBC", "#007ADF"], 
    title: "Thunderstorm Day",
    subtitle: "Warning! If you go outside",
    icon: "weather-lightning"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"], 
    title: "Cloud Day",
    subtitle: "Gloomy or Cool day",
    icon: "weather-cloudy"
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"], 
    title: "Snow Day",
    subtitle: "Cold and Beautiful Day",
    icon: "weather-snowy"
  },
  Haze: {
    colors: ["#D7D2CC", "#304352"], 
    title: "Haze Day",
    subtitle: "Foggggggggggy",
    icon: "weather-fog"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"], 
    title: "Drizzle Day",
    subtitle: "Is like a Rain",
    icon: "weather-hail"
  },
  Mist: {
    colors: ["#D7D2CC", "#304352"], 
    title: "Mist Day",
    subtitle: "Foggggggggggy",
    icon: "weather-fog"
  },
};

const Weather = ({ temp, weatherName }) => {
  return (
    <LinearGradient 
      colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <View style={styles.upper}>
        <MaterialCommunityIcons color='white' size={144} name={weatherCases[weatherName].icon} />
        <Text style={styles.temp}>{temp}도</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: propTypes.number.isRequired
}

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "transparent",
  },
  temp: {
    fontSize: 35,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 40
  },
  title: {
    fontSize: 35,
    backgroundColor: "transparent",
    color: 'white',
    marginBottom: 10,
    fontWeight: '500'
  },
  subtitle: {
    fontSize: 20,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 40
  }
})