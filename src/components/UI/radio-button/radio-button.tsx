import React from 'react';
import {Pressable, View, Text} from 'react-native';
import {useColorTheme} from 'src/hooks/theme/useColorTheme';
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
  const themeVariant = useColorTheme();
  const radioButtonStyles = getRadioButtonStyles(themeVariant, isChecked);

  return (
    <Pressable style={radioButtonStyles.radioButtonContainer} onPress={onPress}>
      <View
        style={[radioButtonStyles.container, radioButtonStyles.containerColor]}>
        {isChecked && (
          <View
            style={[
              radioButtonStyles.checkedContainer,
              radioButtonStyles.checkedColor,
            ]}
          />
        )}
      </View>
      <Text style={[radioButtonStyles.fontText, radioButtonStyles.labelColor]}>
        {label}
      </Text>
    </Pressable>
  );
};
