import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
// * Libraries
import Http from '../../../libs/http';
// * Components
import CoinsItem from './CoinsItem';
import CoinsSearch from './CoinsSearch';
// * Styles
import Colors from '../../../res/colors';

const CoinsScreen = ({navigation}) => {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const {data} = await Http.instance.get(
        'https://api.coinlore.net/api/tickers/',
      );
      setCoins(data);
      setFilteredCoins(data);
      setLoading(false);
    })();
  }, []);

  const handlePress = coin => {
    navigation.navigate('CoinDetail', {coin});
  };

  const handleSearch = query => {
    const coinsFilter = coins.filter(coin => {
      return (
        coin.name.toLowerCase().includes(query.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredCoins(coinsFilter);
  };

  return (
    <View style={styles.Container}>
      <CoinsSearch onChange={handleSearch} />
      {loading ? (
        <ActivityIndicator color="white" size="large" style={styles.Loader} />
      ) : (
        <FlatList
          data={filteredCoins}
          renderItem={({item}) => (
            <CoinsItem item={item} onPress={() => handlePress(item)} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.blackPearl,
  },
  Loader: {
    marginTop: 60,
  },
});

export default CoinsScreen;
