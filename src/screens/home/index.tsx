import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import type {AutoCompleteOption} from '../../types/autocomplete';
import {
  ArtIcon,
  EducationIcon,
  GamesIcon,
  ScineceIcon,
  SportIcon,
  AutoComplete,
} from '../../components';

const options = [
  {label: 'Education', value: 'education', icon: <EducationIcon />},
  {label: 'Science', value: 'science', icon: <ScineceIcon />},
  {label: 'Art', value: 'art', icon: <ArtIcon />},
  {label: 'Sport', value: 'sport', icon: <SportIcon />},
  {label: 'Games', value: 'games', icon: <GamesIcon />},
];

const HomeScreen = () => {
  const handleSelect = (value: AutoCompleteOption | null) => {
    console.log('Selected:', value);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.centerView}>
        <AutoComplete options={options} onSelect={handleSelect} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
