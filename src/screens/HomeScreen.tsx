import React from 'react';
import {View} from 'react-native';
import SingleSelectDropdown from '../components/SingleSelectDropdown';

const HomeScreen = () => {
  return (
    <View className="flex-1 w-full  pt-10 px-10 items-center bg-background">
      <SingleSelectDropdown />
    </View>
  );
};

export default HomeScreen;
