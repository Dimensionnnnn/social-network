import React, {useState} from 'react';
import {RadioButton} from 'src/components/UI/radio-button/radio-button';

interface Labels {
  id: number;
  label: string;
}

interface RadioGroupProps {
  labels?: Labels[];
}

export const RadioGroup: React.FC<RadioGroupProps> = ({labels}) => {
  const [selectedLabel, setSelectedLabel] = useState('');

  const handleRadioPress = (label: string) => {
    setSelectedLabel(label);
  };

  return (
    <>
      {labels?.map((label: Labels) => (
        <RadioButton
          key={label.id}
          label={label.label}
          isChecked={selectedLabel === label.label}
          onPress={() => handleRadioPress(label.label)}
        />
      ))}
    </>
  );
};
