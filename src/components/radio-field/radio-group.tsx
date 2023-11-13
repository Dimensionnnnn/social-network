
import React from 'react';
import {RadioButton} from 'src/components/UI/radio-button/radio-button';
import {GenderType} from 'src/shared/types/__generated__/gql-types';

interface Labels {
  id: string;
  label: string;
  type: GenderType;
}

interface RadioGroupProps {
  labels?: Labels[];
  selectedGenderType: string;
  onGenderChange: (selectedGenderType: string) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  labels,
  selectedGenderType,
  onGenderChange,
}) => {
  return (
    <>
      {labels?.map((label: Labels) => (
        <RadioButton
          key={label.id}
          label={label.label}
          isChecked={selectedGenderType === label.type}
          onPress={() => onGenderChange(label.type)}
        />
      ))}
    </>
  );
};
