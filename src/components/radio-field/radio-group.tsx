import {useColorScheme, Appearance} from 'react-native';
import React, {useState} from 'react';
import {RadioButton} from 'src/components/UI/radio-button/radio-button';

interface RadioGroupProps {
  labels: string[];
}

export const RadioGroup: React.FC<RadioGroupProps> = ({labels}) => {
  const [selectedLabel, setSelectedLabel] = useState('');
  const isDarkMode = useColorScheme() === 'dark';

  const handleRadioPress = (label: string) => {
    setSelectedLabel(label);
    Appearance.setColorScheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <>
      {labels.map((label: string) => (
        <RadioButton
          key={label}
          label={label}
          isChecked={selectedLabel === label}
          onPress={() => handleRadioPress(label)}
        />
      ))}
    </>
  );
};
