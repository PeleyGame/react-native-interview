import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import './global.css';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigator from './src/routes';
import './global.css';

export default function App() {
  React.useEffect(() => {
    BootSplash.hide({fade: true});
  }, []);

  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
}
