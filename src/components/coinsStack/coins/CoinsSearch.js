import React, {useState} from 'react';
import {TextInput, Platform, View, StyleSheet} from 'react-native';
// * Styles
import Colors from '../../../res/colors';

const CoinsSearch = ({onChange}) => {
  const [query, setQuery] = useState('');

  const handleText = text => {
    setQuery(text);
    if (onChange) {
      onChange(query);
    }
  };

  return (
    <View>
      <TextInput
        style={[
          styles.TextInput,
          Platform.OS === 'ios' ? styles.TextInputIOS : styles.TextInputAndroid,
        ]}
        onChangeText={handleText}
        value={query}
        placeholder="Search"
        placeholderTextColor="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    height: 46,
    backgroundColor: Colors.charade,
    paddingLeft: 16,
    color: Colors.white,
  },
  TextInputAndroid: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.zircon,
  },
  TextInputIOS: {
    margin: 8,
    borderRadius: 8,
  },
});

export default CoinsSearch;
