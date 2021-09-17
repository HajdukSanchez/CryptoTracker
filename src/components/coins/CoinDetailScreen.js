import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, SectionList} from 'react-native';
// * Styles
import Colors from '../../res/colors';

const CoinDetailScreen = ({
  route: {
    params: {coin},
  },
  navigation,
}) => {
  useEffect(() => {
    navigation.setOptions({title: coin.symbol}); // * Title of the screen
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

  return (
    <View style={styles.Container}>
      <View style={styles.SubHeader}>
        <Image
          style={styles.Icon}
          source={{uri: handleSymbolIcon(coin.name)}}
        />
        <Text style={styles.Title}>{coin.name}</Text>
      </View>
      <SectionList
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
});

export default CoinDetailScreen;
