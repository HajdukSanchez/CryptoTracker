import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// * Components
import CoinsStack from './src/components/coinsStack/CoinsStack';

const App = () => {
  return (
    <NavigationContainer>
      <CoinsStack />
    </NavigationContainer>
  );
};

export default App;
