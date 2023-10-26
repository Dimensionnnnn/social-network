import React from 'react';
import {Pressable, View} from 'react-native';
import {useColorTheme, ColorThemes} from 'src/hooks/useColorTheme';
import {getRadioButtonStyles} from './styles';

interface RadioButtonProps {
  isChecked: boolean;
  onPress?: () => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  isChecked,
  onPress,
}) => {
  const themeVariant: ColorThemes = useColorTheme();
  const radioButtonStyles = getRadioButtonStyles(themeVariant, isChecked);

  return (
    <>
      <Pressable
        style={[radioButtonStyles.container, radioButtonStyles.containerColor]}
        onPress={onPress}>
        {isChecked && (
          <View
            style={[
              radioButtonStyles.checkedContainer,
              radioButtonStyles.checkedColor,
            ]}
          />
        )}
      </Pressable>
    </>
  );
};
