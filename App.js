import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
// * Components
import CoinsStack from './src/components/coinsStack/CoinsStack';
import FavoritesStack from './src/components/favoritesStack/FavoritesStack';
// * Styles
import Colors from './src/res/colors';

const Tabs = createBottomTabNavigator();

const CoinsIconTab = require('./src/assets/bank.png');
const FavoritesIconTab = require('./src/assets/star.png');

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        style={styles.TabNavigator}
        screenOptions={{headerShown: false, tabBarShowLabel: false}}
      >
        <Tabs.Screen
          name="CurrenciesTab"
          component={CoinsStack}
          options={{
            tabBarIcon: ({size, color}) => (
              <Image
                style={{
                  tintColor: color,
                  width: size,
                  height: size,
                }}
                source={CoinsIconTab}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="FavoritesTab"
          component={FavoritesStack}
          options={{
            tabBarIcon: ({size, color}) => (
              <Image
                style={{
                  tintColor: color,
                  width: size,
                  height: size,
                }}
                source={FavoritesIconTab}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  TabNavigator: {
    backgroundColor: Colors.blackPearl,
  },
});

export default App;
