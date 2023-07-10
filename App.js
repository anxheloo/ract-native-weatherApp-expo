import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tabs from "./src/components/Tabs";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";

const Tab = createBottomTabNavigator();

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading, error, weather, refetchWeatherData] = useGetWeather();
  const [appKey, setAppKey] = useState(1);
  console.log(loading, error, weather);
  const { container } = styles;

  const handleTryAgain = () => {
    // Logic to re-fetch weather data or perform necessary actions
    // ...
    refetchWeatherData();
    // Increment the appKey to trigger re-rendering of the entire app
    setAppKey((prevKey) => prevKey + 1);
  };

  return weather && weather.list ? (
    <NavigationContainer>
      <Tabs weather={weather}></Tabs>
    </NavigationContainer>
  ) : (
    <View style={container}>
      {loading ? (
        <ActivityIndicator size={"large"} color={"blue"} />
      ) : (
        <ErrorItem onTryAgain={handleTryAgain}></ErrorItem>
      )}
    </View>
  );

  // return loading ? (
  //   <View style={container}>
  //     <ActivityIndicator size={"large"} color={"blue"} />
  //   </View>
  // ) : (
  //   <NavigationContainer>
  //     <Tabs weather={weather}></Tabs>
  //   </NavigationContainer>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
