import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import {HomeScreen} from './screens';

const App: React.FC = () => {
  React.useEffect(() => {
    BootSplash.hide({fade: true});
  }, []);

  return (
    <View style={styles.root}>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
