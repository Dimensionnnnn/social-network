import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItemStorage = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    return null;
  }
};

export const getItemStorage = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? value : null;
  } catch (e) {
    return null;
  }
};

export const removeItemStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    return null;
  }
};
