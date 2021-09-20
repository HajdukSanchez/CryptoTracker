import AsyncStorage from '@react-native-community/async-storage';

class Storage {
  static instance = new Storage();

  store = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  get = async key => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.log(error);
      throw Error(error);
    }
  };

  getAll = async keys => {
    try {
      return await AsyncStorage.multiGet(keys);
    } catch (error) {
      console.log(error);
      throw Error(error);
    }
  };

  getAllKeys = async () => {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (error) {
      console.log(error);
      throw Error(error);
    }
  };

  remove = async key => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
}

export default Storage;
