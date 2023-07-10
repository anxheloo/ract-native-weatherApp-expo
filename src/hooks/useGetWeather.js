import React, { useState, useEffect, useCallback } from "react";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        console.log("User didnt accept permision!");
        return;
      }

      let userLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
        preferredActivity: Location.ActivityType.Other,
      });
      setLocation(userLocation);
      setLat(userLocation.coords.latitude);
      setLon(userLocation.coords.longitude);
      //   setLat(41.3275);
      //   setLon(19.8187);
      console.log("location: ", location);

      console.log("Before await fetchWeatherData");
      await fetchWeatherData();
      console.log("After await fetchWeatherData");
    })();
  }, [lat, lon]);

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );

      const data = await res.json();
      setWeather(data);
      console.log(weather);
      console.log("Function 1: data fetched!");
    } catch (error) {
      setError("Could not fetch weather");
      console.log(error);
    } finally {
      setLoading(false);
      console.log("Step 2: App Opened!");
    }
  };

  const refetchWeatherData = useCallback(() => {
    setLoading(true);
    fetchWeatherData();
  }, [fetchWeatherData]);

  return [loading, error, weather, refetchWeatherData];
};
