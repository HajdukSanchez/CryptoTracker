import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
// * Libraries
import Http from '../../libs/http';
// * Components
import CoinsItem from './CoinsItem';

const CoinsScreen = ({navigation}) => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const {data} = await Http.instance.get(
        'https://api.coinlore.net/api/tickers/',
      );
      setCoins(data);
      setLoading(false);
    })();
  }, []);

  const handlePress = coin => {
    navigation.navigate('CoinDetail', {coin});
  };

  return (
    <View style={styles.Container}>
      {loading ? (
        <ActivityIndicator color="white" size="large" style={styles.Loader} />
      ) : (
        <FlatList
          data={coins}
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
    backgroundColor: 'white',
  },
  Loader: {
    marginTop: 60,
  },
});

export default CoinsScreen;
