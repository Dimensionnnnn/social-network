import React from 'react';
import {Pressable, View, Text} from 'react-native';
import {useColorTheme, ColorThemes} from 'src/hooks/theme/useColorTheme';
import {getRadioButtonStyles} from './styles';

interface RadioButtonProps {
  isChecked: boolean;
  label?: string;
  onPress?: () => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  isChecked,
  label,
  onPress,
}) => {
  const themeVariant: ColorThemes = useColorTheme();
  const radioButtonStyles = getRadioButtonStyles(themeVariant, isChecked);

  return (
    <View style={radioButtonStyles.radioButtonContainer}>
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
      <Text style={[radioButtonStyles.fontText, radioButtonStyles.labelColor]}>
        {label}
      </Text>
    </View>
  );
};
