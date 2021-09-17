import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// * Components
import CoinsScreen from './coins/CoinsScreen';
import CoinDetailScreen from './detail/CoinDetailScreen';
// * Styles
import Colors from '../../res/colors';

const Stack = createStackNavigator();

const CoinsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.blackPearl,
          shadowColor: Colors.blackPearl,
        },
        headerTintColor: Colors.white,
      }}>
      <Stack.Screen name="Coins" component={CoinsScreen} />
      <Stack.Screen name="CoinDetail" component={CoinDetailScreen} />
    </Stack.Navigator>
  );
};

export default CoinsStack;
