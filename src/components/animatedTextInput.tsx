import React from "react";
import { TextInput as RNTextInput, TextInputProps, StyleSheet, View } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { hp, wp } from "../utils/style/screenResize";

const AnimatedTextInput = ({ style, ...props }: TextInputProps) => {
  const shadowOpacity = useSharedValue(0); // Initial shadow

  // Function to handle focus
  const handleFocus = () => {
    shadowOpacity.value = withTiming(0.8, { duration: 300 }); // Animate shadow to appear
  };

  // Function to handle blur
  const handleBlur = () => {
    shadowOpacity.value = withTiming(0, { duration: 300 }); // Animate shadow to disappear
  };

  // Animated shadow style
  const animatedStyle = useAnimatedStyle(() => ({
    shadowOpacity: shadowOpacity.value,
    shadowRadius: shadowOpacity.value * 10, // Increase radius dynamically
    shadowOffset: { width: 1, height: 6 },
    shadowColor: "#C8B6ED",
    elevation: shadowOpacity.value * 5, // For Android shadow
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <RNTextInput
        {...props}
        style={[styles.input, style]}
        onFocus={handleFocus} // Calls function when focused
        onBlur={handleBlur} // Calls function when blurred
        placeholderTextColor="#999"
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,  },
  input: {
    fontFamily: "Ubuntu-Medium",
    fontSize: hp(2),
    paddingVertical: hp(0.5),
    paddingHorizontal: wp(3),
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "#fff",
  },
});

export default AnimatedTextInput;
