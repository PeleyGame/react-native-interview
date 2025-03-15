import {NavigationContainer} from '@react-navigation/native';
import {store} from '@store/index';
import React from 'react';
import BootSplash from 'react-native-bootsplash';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import {styles} from './styles';

interface MainWrapperProps {
  children: React.ReactNode;
}

export const MainWrapper = ({children}: MainWrapperProps) => {
  React.useEffect(() => {
    BootSplash.hide({fade: true});
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <NavigationContainer>{children}</NavigationContainer>
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
