import React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps,
  StyleSheet,
} from 'react-native';

const TextInput = ({style, ...props}: TextInputProps) => {
  return <RNTextInput style={[styles.input, style]} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    fontFamily: 'Ubuntu-Medium',
  },
});

export default TextInput;
