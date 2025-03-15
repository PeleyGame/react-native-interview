import React from "react";
import { Text as RNText, TextProps, StyleSheet } from "react-native";

const Text = ({ style, ...props }: TextProps) => {
  return <RNText style={[styles.text, style]} {...props} />;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Ubuntu-Medium"
  },
});

export default Text;
