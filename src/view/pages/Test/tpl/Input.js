import React from 'react';
import {TextInput, Keyboard, View, Image} from 'react-native';
import {styles} from './styles/style_index';
import {COLORS} from 'helpers/Variables';

const Input = ({isFocus, searchText, setIsOpen, setIsFocus}) => {
  const handleFocus = () => {
    setIsOpen(true);
    setIsFocus(true);
    Keyboard.dismiss();
  };

  return (
    <View style={{}}>
      <TextInput
        style={[
          styles.text_input,
          isFocus && {
            borderColor: COLORS.pruple,
            shadowColor: COLORS.pruple,
            borderWidth: 1,
            shadowOffset: {width: 0, height: 4},
            shadowOpacity: 0.8,
            shadowRadius: 6,
            elevation: 5,
          },
        ]}
        placeholderTextColor="#fff"
        allowFontScaling={false}
        value={searchText}
        // onChangeText={setSearchText}
        // onBlur={() => {}}
        onFocus={() => {
          handleFocus();
        }}
        showSoftInputOnFocus={false}
      />
    </View>
  );
};
export default Input;
