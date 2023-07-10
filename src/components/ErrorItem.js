import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Feather } from "@expo/vector-icons";

const ErrorItem = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>Sorry something went wrong</Text>
      <Feather name={"frown"} size={100} color={"white"}></Feather>
      <Button title="Try Again" onPress={props.onTryAgain} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  errorMessage: {
    fontSize: 30,
    color: "white",
    marginHorizontal: 10,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default ErrorItem;
