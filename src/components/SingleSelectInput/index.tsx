import {useSingleSelect} from '@hooks/useSingleSelect';
import React from 'react';
import {TextInput, View} from 'react-native';
import {colors} from 'theme/colors';

import {styles} from './styles';

const SingleSelectInput = () => {
  const {handleBlur, handleFocus, handleInputChange, inputValue, isFocused} =
    useSingleSelect();

  return (
    <View
      style={[
        styles.containerInput,
        !isFocused && styles.containerInputNoBorder,
      ]}
    >
      <TextInput
        value={inputValue}
        onChangeText={handleInputChange}
        style={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        cursorColor={colors.global.textInputCursor}
      />
    </View>
  );
};

export default SingleSelectInput;
