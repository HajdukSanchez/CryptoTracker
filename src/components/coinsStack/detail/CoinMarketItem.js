import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// * Styles
import Colors from '../../../res/colors';

const CoinMarketItem = ({item}) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Name}>{item.name}</Text>
      <Text style={styles.Price}>{item.price_usd}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderColor: Colors.blackPearl,
    borderWidth: 1,
    borderRadius: 6,
    borderStyle: 'dotted',
    padding: 16,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Name: {
    color: 'white',
    fontWeight: 'bold',
  },
  Price: {
    color: 'white',
  },
});

export default CoinMarketItem;
