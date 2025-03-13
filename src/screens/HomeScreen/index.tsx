import SingleSelectInput from '@components/SingleSelectInput';
import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Single select</Text>
      <SingleSelectInput />
    </View>
  );
};

export default HomeScreen;
