import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SectionList,
  FlatList,
  Pressable,
} from 'react-native';
// * Styles
import Colors from '../../../res/colors';
// * Libraries
import Http from '../../../libs/http';
import Storage from '../../../libs/storage';
// * Components
import CoinMarketItem from './CoinMarketItem';

const CoinDetailScreen = ({
  route: {
    params: {coin},
  },
  navigation,
}) => {
  const [markets, setMarkets] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    navigation.setOptions({title: coin.symbol}); // * Title of the screen
    handleMarkets(coin.id);
  }, [coin.symbol, navigation]);

  const handleSymbolIcon = name => {
    if (name) {
      const newSymbol = name.toLowerCase().replace(' ', '-');
      return `https://c1.coinlore.com/img/25x25/${newSymbol}.png`;
    }
  };

  const handleSections = () => {
    // * We need an array for the sections
    const sections = [
      {
        title: 'Market cap',
        data: [coin.market_cap_usd],
      },
      {
        title: 'Volume 24 H',
        data: [coin.volume24],
      },
      {
        title: 'Change 24 H',
        data: [coin.percent_change_24h],
      },
    ];
    return sections;
  };

  const handleMarkets = async coindId => {
    const URL = `https://api.coinlore.net/api/coin/markets/?id=${coindId}`;
    const markets = await Http.instance.get(URL);
    setMarkets(markets);
  };

  const handleToggleFavorite = () => {
    isFavorite ? removeFromFavorites() : addToFavorites();
  };

  const addToFavorites = () => {
    const key = `favorite-${coin.id}`;
    const coinToAdd = JSON.stringify(coin);
    const stored = Storage.instance.store(key, coinToAdd);
    if (stored) setIsFavorite(true);
  };

  const removeFromFavorites = () => {};

  return (
    <View style={styles.Container}>
      <View style={styles.SubHeader}>
        <View style={styles.Row}>
          <Image
            style={styles.Icon}
            source={{uri: handleSymbolIcon(coin.name)}}
          />
          <Text style={styles.Title}>{coin.name}</Text>
        </View>
        <Pressable
          style={[
            styles.ButtonFavorite,
            isFavorite ? styles.ButtonFavoriteRemove : styles.ButtonFavoriteAdd,
          ]}
          onPress={handleToggleFavorite}
        >
          <Text style={styles.ButtonFavoriteText}>
            {isFavorite ? 'Remove Favorite' : 'Add Favorite'}
          </Text>
        </Pressable>
      </View>
      <SectionList
        style={styles.SectionList}
        sections={handleSections()}
        keyExtractor={item => item}
        renderSectionHeader={({section}) => (
          <View style={styles.Section}>
            <Text style={styles.SectionTitle}>{section.title}</Text>
          </View>
        )}
        renderItem={({item}) => (
          <View style={styles.Item}>
            <Text style={styles.ItemText}>{item}</Text>
          </View>
        )}
      />
      <Text style={styles.MarketTitle}>Markets</Text>
      <FlatList
        style={styles.Markets}
        horizontal={true}
        data={markets}
        renderItem={({item}) => <CoinMarketItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: Colors.charade,
    flex: 1,
  },
  SubHeader: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Icon: {
    width: 25,
    height: 25,
  },
  Title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 8,
  },
  ButtonFavorite: {
    padding: 8,
    borderRadius: 8,
  },
  ButtonFavoriteText: {
    color: Colors.white,
  },
  ButtonFavoriteAdd: {
    backgroundColor: Colors.picton,
  },
  ButtonFavoriteRemove: {
    backgroundColor: Colors.carmine,
  },
  SectionList: {
    maxHeight: 220,
  },
  Section: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 8,
  },
  SectionTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  Item: {
    padding: 8,
  },
  ItemText: {
    color: 'white',
    fontSize: 14,
  },
  MarketTitle: {
    color: 'white',
    fontSize: 16,
    marginBottom: 16,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  Markets: {
    maxHeight: 100,
    paddingLeft: 8,
  },
});

export default CoinDetailScreen;
