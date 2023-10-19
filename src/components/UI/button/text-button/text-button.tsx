import React, {useState} from 'react';
import {Pressable, View, Text} from 'react-native';
import {ColorThemes, useColorTheme} from 'src/hooks/useColorTheme';
import {getButtonStyleSheet, textButtonStyles} from './styles';

interface ButtonProps {
  title?: string;
  isDisabled?: boolean;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({title, isDisabled, onPress}) => {
  const [isPressed, setIsPressed] = useState(false);
  const themeVariant: ColorThemes = useColorTheme();

  const buttonStyles = getButtonStyleSheet(themeVariant, isPressed, isDisabled);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePress}
      onPressOut={handlePress}
      style={textButtonStyles.container}
      disabled={isDisabled}>
      <Text style={buttonStyles.textStyle}>{title}</Text>
      <View style={buttonStyles.borderLineStyle} />
    </Pressable>
  );
};
