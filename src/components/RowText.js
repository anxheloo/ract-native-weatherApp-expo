import React from "react";
import { Text, View, StyleSheet } from "react-native";

const RowText = (props) => {
  const { bodyText1, bodyText2, bodyText1Style, bodyText2Style, style } = props;
  const {} = styles;

  return (
    <View style={[style]}>
      <Text style={bodyText1Style}>{bodyText1}</Text>
      <Text style={bodyText2Style}>{bodyText2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RowText;
