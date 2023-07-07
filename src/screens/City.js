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

const City = () => {
  const {
    container,
    imageBackground,
    city,
    country,
    cityText,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={imageBackground}
        source={require("../.././assets/city-background.jpg")}
      >
        <Text style={[city, cityText]}>London</Text>
        <Text style={[country, cityText]}>UK</Text>
        <View style={populationWrapper}>
          <Feather name="user" size={50} color="red"></Feather>
          <Text style={populationText}>8000</Text>
        </View>

        <View style={riseSetWrapper}>
          <Feather name="sunrise" size={50} color="white"></Feather>
          <Text style={riseSetText}>10:46:58am</Text>

          <Feather name="sunset" size={50} color="white"></Feather>
          <Text style={riseSetText}>17:28:15pm</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  imageBackground: {
    flex: 1,
  },
  city: {
    fontSize: 40,
  },

  country: {
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
    fontWeight: "bold",
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
    fontWeight: "bold",
  },
});

export default City;
