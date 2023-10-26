import {useColorScheme, Appearance} from 'react-native';
import React, {useState} from 'react';
import {RadioButton} from 'src/components/UI/radio-button/radio-button';

export const RadioField = () => {
  const [selectedLabel, setSelectedLabel] = useState('Male');
  const isDarkMode = useColorScheme() === 'dark';

  const handleRadioPress = (label: string) => {
    setSelectedLabel(label);
    Appearance.setColorScheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <>
      <RadioButton
        label="Male"
        isChecked={selectedLabel === 'Male'}
        onPress={() => handleRadioPress('Male')}
      />
      <RadioButton
        label="Female"
        isChecked={selectedLabel === 'Female'}
        onPress={() => handleRadioPress('Female')}
      />
    </>
  );
};
