import React, {useState} from 'react';
import {ColorThemes, useColorTheme} from 'src/hooks/useColorTheme';
import {Pressable, Text} from 'react-native';
import {getButtonStyleSheet, getIconColor} from './styles';

interface ButtonProps {
  title?: string;
  isDisabled?: boolean;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({title, isDisabled, onPress}) => {
  const [isPressed, setIsPressed] = useState(false);
  const themeVariant: ColorThemes = useColorTheme();

  const buttonStyles = getButtonStyleSheet(themeVariant, isPressed, isDisabled);
  //const iconStyles = getIconColor(themeVariant, isPressed, isDisabled);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <Pressable
      style={[buttonStyles.container]}
      disabled={isDisabled}
      onPress={onPress}
      onPressIn={handlePress}
      onPressOut={handlePress}>
      <Text style={[buttonStyles.font, buttonStyles.text]}>{title}</Text>
    </Pressable>
  );
};
