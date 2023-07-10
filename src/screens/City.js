import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import IconText from "../components/IconText";
import moment from "moment";

const City = ({ weatherData }) => {
  const {
    container,
    imageBackground,
    city,
    countryStyle,
    cityText,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
  } = styles;

  const { name, country, population, sunrise, sunset } = weatherData;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={imageBackground}
        source={require("../.././assets/city-background.jpg")}
      >
        <Text style={[city, cityText]}>{name}</Text>
        <Text style={[countryStyle, cityText]}>{country}</Text>
        <View style={populationWrapper}>
          <IconText
            iconName={"user"}
            iconColor={"red"}
            bodyText={`Population: ${population}`}
            bodyTextStyles={populationText}
          ></IconText>
        </View>

        <View style={riseSetWrapper}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={moment(sunrise).format("h:mm:ss a")}
            bodyTextStyles={riseSetText}
          ></IconText>

          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={moment(sunset).format("h:mm:ss a")}
            bodyTextStyles={riseSetText}
          ></IconText>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },

  imageBackground: {
    flex: 1,
  },
  city: {
    fontSize: 40,
  },

  countryStyle: {
    fontSize: 30,
  },

  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },

  populationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },

  riseSetWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 30,
  },

  riseSetText: {
    fontSize: 20,
    color: "white",
  },
});

export default City;
