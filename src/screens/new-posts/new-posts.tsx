import {StyleSheet, Text, View, useColorScheme, Appearance} from 'react-native';
import React, {useState} from 'react';
import {RadioButton} from 'src/components/UI/radio-button/radio-button';

export const NewPosts = () => {
  const [isRadioChecked, setIsRadioChecked] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  const handleRadioPress = () => {
    setIsRadioChecked(prevPressed => !prevPressed);
    Appearance.setColorScheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <View style={styles.container}>
      <Text>New posts</Text>
      <RadioButton onPress={handleRadioPress} isChecked={isRadioChecked} />
      <RadioButton isChecked />
      <RadioButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
