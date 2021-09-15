import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
// * Libraries
import Http from '../../libs/http';

const CoinsScreen = ({navigation}) => {
  const [coins, setCoins] = useState({});

  useEffect(async () => {
    const data = await Http.instance.get(
      'https://api.coinlore.net/api/tickers/',
    );
    console.log(data);
    setCoins(data);
  }, [coins]);

  const handlePress = () => {
    navigation.navigate('CoinDetail'); // * The name is the one on the stack
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Coins Screen</Text>
      <Pressable style={styles.Button} onPress={() => handlePress()}>
        <Text style={styles.Button__Text}>Go to detail</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'red',
  },
  Title: {
    color: 'white',
    textAlign: 'center',
  },
  Button: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 16,
  },
  Button__Text: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default CoinsScreen;
