import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles/style_index';
import strings from 'locales/En';

const Title = () => {
  return (
    <Text allowFontScaling={false} style={styles.text_title}>
      {strings.titleComboTest}
    </Text>
  );
};
export default Title;
