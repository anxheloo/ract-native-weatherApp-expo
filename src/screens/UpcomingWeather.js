import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  FlatList,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import ListItem from "../components/ListItem";

// const DATA = [
//   {
//     dt_text: "2023-02-10 12:00:00",
//     main: {
//       temp_max: 8.55,
//       temp_min: 7.55,
//     },
//     weather: [
//       {
//         main: "Clear",
//       },
//     ],
//   },
//   {
//     dt_text: "2023-02-18 15:00:00",
//     main: {
//       temp_max: 8.55,
//       temp_min: 7.55,
//     },
//     weather: [
//       {
//         main: "Clouds",
//       },
//     ],
//   },
//   {
//     dt_text: "2023-02-10 16:00:00",
//     main: {
//       temp_max: 8.55,
//       temp_min: 7.55,
//     },
//     weather: [
//       {
//         main: "Rain",
//       },
//     ],
//   },
// ];

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      // keyExtractor={item.id}
      condition={item.weather[0].main}
      dt_text={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    ></ListItem>
  );

  const { container, image } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={image}
        source={require("../.././assets/upcoming-background.jpg")}
      >
        <Text>Upcoming Weather</Text>
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_text}
        ></FlatList>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0, // Adjust for Android's status bar height
    backgroundColor: "royalblue",
  },

  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
