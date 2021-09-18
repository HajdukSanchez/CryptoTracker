import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// * Components
import FavoritesEmptyState from './FavoritesEmptyState';
// * Styles
import Colors from '../../../res/colors';

const FavoritesScreen = () => {
  return (
    <View style={styles.Container}>
      <FavoritesEmptyState />
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
