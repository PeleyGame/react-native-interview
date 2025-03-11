import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import ListScreen from './screens/list/list.screen';

const App: React.FC = () => {
  React.useEffect(() => {
    BootSplash.hide({fade: true});
  }, []);

  return (
    <View style={styles.root}>
      <ListScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
