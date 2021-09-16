import React from 'react';
import {Image, StyleSheet, Text, View, Platform} from 'react-native';
// * Styles
import Colors from '../../res/colors';

const CoinsItem = ({item}) => {
  const handleImageArrow = () => {
    if (item.percent_change_1h > 0) {
      return require('../../assets/arrow_up.png');
    } else {
      return require('../../assets/arrow_down.png');
    }
  };

  return (
    <View style={styles.Container}>
      <View style={styles.Row}>
        <Text style={styles.Symbol}>{item.symbol}</Text>
        <Text style={styles.Name}>{item.name}</Text>
        <Text style={styles.Price}>{`$ ${item.price_usd}`}</Text>
      </View>
      <View style={styles.Row}>
        <Text style={styles.Percentage}>{item.percent_change_1h}</Text>
        <Image style={styles.Icon} source={handleImageArrow()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 1,
    marginLeft: Platform.OS === 'ios' ? 16 : 0, // ? If we are in IOS we add the margin left
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Symbol: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 12,
  },
  Name: {
    color: 'white',
    fontSize: 14,
    marginRight: 16,
  },
  Price: {
    color: 'white',
    fontSize: 14,
  },
  Percentage: {
    color: 'white',
    fontSize: 12,
    marginRight: 8,
  },
  Icon: {
    width: 22,
    height: 22,
  },
});

export default CoinsItem;
