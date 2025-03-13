import RootStack from '@navigation/RootNavigator';
import React from 'react';
import {MainWrapper} from 'wrappers/MainWrapper';

const App = () => {
  return (
    <MainWrapper>
      <RootStack />
    </MainWrapper>
  );
};

export default App;
