import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FavoritesEmptyState = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>You don't have any favorite yet</Text>
      <Text style={[styles.Text, styles.SubText]}>Please insert one</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
  },
  SubText: {
    fontSize: 14,
  },
});

export default FavoritesEmptyState;
