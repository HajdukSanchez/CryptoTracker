import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
// * Components
import FavoritesEmptyState from './FavoritesEmptyState';
import CoinsItem from '../../../components/coinsStack/coins/CoinsItem';
// * Styles
import Colors from '../../../res/colors';
// * Libraries
import Storage from '../../../libs/storage';

const FavoritesScreen = ({navigation}) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // * With the focus event we can update the list after the component mounted
    const unsubscribe = navigation.addListener('focus', () => {
      getFavorites();
    });
    return unsubscribe;
  }, [navigation]);

  const getFavorites = async () => {
    try {
      const allKeys = await Storage.instance.getAllKeys();
      const keys = allKeys.filter(key => key.includes('favorite-'));
      const favoritesData = await Storage.instance.getAll(keys);
      const data = favoritesData.map(fav => JSON.parse(fav[1]));
      setFavorites(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNavigation = coin => {
    navigation.navigate('CoinDetail', {coin}); // * We navigate to the coin detail screen
  };

  return (
    <View style={styles.Container}>
      {favorites.length === 0 ? (
        <FavoritesEmptyState />
      ) : (
        <FlatList
          data={favorites}
          renderItem={({item}) => (
            <CoinsItem item={item} onPress={() => handleNavigation(item)} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: Colors.charade,
    flex: 1,
  },
});

export default FavoritesScreen;
