import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
// * Components
import CoinsStack from './src/components/coinsStack/CoinsStack';
// * Styles
import Colors from './src/res/colors';

const Tabs = createBottomTabNavigator();
const CoinsIconTab = require('./src/assets/bank.png');

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator style={styles.TabNavigator}>
        <Tabs.Screen
          name="Currencies"
          options={{
            tabBarIcon: ({size, color}) => (
              <Image
                style={{tintColor: color, width: size, height: size}}
                source={CoinsIconTab}
              />
            ),
          }}
          component={CoinsStack}
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
