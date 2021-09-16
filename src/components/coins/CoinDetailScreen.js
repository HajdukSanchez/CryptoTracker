import React from 'react';
import {View, Text} from 'react-native';

const CoinDetailScreen = ({
  route: {
    params: {coin},
  },
}) => {
  console.log(coin);

  return (
    <View>
      <Text>Coin detail screen</Text>
    </View>
  );
};

export default CoinDetailScreen;
