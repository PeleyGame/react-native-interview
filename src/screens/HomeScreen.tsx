//import liraries
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Dropdown from '../components/Dropdown';

const HomeScreen = () => {
  return (
    <View className="flex-1 w-full  pt-10 px-10 items-center bg-background">
      <Dropdown />
    </View>
  );
};

export default HomeScreen;
