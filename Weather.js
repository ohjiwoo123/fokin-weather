import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#000428", "#004e92"],
    title : "Thunder",
    subtitle : "Thunder, Thunder!! Feel the Thunder? Lightening, Then The Thunder!"
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#2C3E50", "#4CA1AF"],
    title : "Drizzle",
    subtitle : "Puzzle Drizzle Dazzle Sizzle Nozzle Muzzle Embezzle Guzzle Fizzle"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#F0F2F0", "#000C40"],
    title : "Rainy",
    subtitle : "Rainism~ Oh Rainism~"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#E0EAFC", "#CFDEF3"],
    title : "Snowy",
    subtitle : "Do You Want Build a Snowman?" 
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title : "umm",
    subtitle : "umm...." 
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#fceabb", "#f8b500"],
    title : "Sunny",
    subtitle : "Let's Go Outside!, Enjoy the Sun!" 
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#56CCF2", "#2F80ED"],
    title : "Cloudy",
    subtitle : "Good weather to Work Out!" 
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title : "Haze",
    subtitle : "The One Thing I Know about Haze is Signer Haze"
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#4B79A1", "#283E51"],
    title : "Mist",
    subtitle : "Does Mist Mean Cosmetics?"
  },
  Dust: {
    iconName: "weather-windy-variant",
    gradient: ["#304352", "#d7d2cc"],
    title : "Dust",
    subtitle : "Fuck off Dust!!"
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{...styles.halfContainer, ...styles.textContainer}}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
          </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 42,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color:"white",
    fontSize: 44,
    fontWeight:"300",
    marginBottom: 10
    
  },
  subtitle: { 
    fontWeight:"600",
    color:"white",
    fontSize: 24
  },
  textContainer: {
      paddingHorizontal: 20,
      alignItems: "flex-start"
  }
});