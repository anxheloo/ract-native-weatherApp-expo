import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import RowText from "../components/RowText";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = ({ weatherData }) => {
  const {
    container,
    wrapper,
    temperature,
    feels,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message,
    rowTextContainer,
  } = styles;

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

  const weatherCondition = weather[0]?.main;

  return (
    //We use this to display content on any device in safe area, not overlapping with StatusBar
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor },
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color={"white"}
        />
        <RowText
          style={rowTextContainer}
          bodyText1={temp}
          bodyText1Style={temperature}
          bodyText2={`Feels like ${feels_like}°`}
          bodyText2Style={feels}
        ></RowText>

        <RowText
          style={[highLowWrapper, { gap: 10 }]}
          bodyText1={`High: ${temp_max}° `}
          bodyText1Style={highLow}
          bodyText2={`Low:${temp_min}°`}
          bodyText2Style={highLow}
        ></RowText>
      </View>

      <RowText
        style={bodyWrapper}
        bodyText1={weather[0]?.description}
        bodyText1Style={description}
        bodyText2={weatherType[weatherCondition]?.message}
        bodyText2Style={message}
      ></RowText>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    flex: 1,
  },

  rowTextContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  highLow: {
    color: "black",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
  },

  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },

  description: {
    fontSize: 43,
  },
  message: {
    fontSize: 25,
  },

  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
});

export default CurrentWeather;
