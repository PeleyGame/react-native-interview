import RootStack from '@navigation/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import BootSplash from 'react-native-bootsplash';

const App: React.FC = () => {
  React.useEffect(() => {
    BootSplash.hide({fade: true});
  }, []);

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
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
