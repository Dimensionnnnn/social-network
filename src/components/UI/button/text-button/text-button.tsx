import React, {useState} from 'react';
import {Pressable, Text} from 'react-native';
import {useColorTheme} from 'src/hooks/useColorTheme';
import {getButtonStyles} from './styles';

interface ButtonProps {
  title?: string;
  isDisabled?: boolean;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({title, isDisabled, onPress}) => {
  const [isPressed, setIsPressed] = useState(false);
  const themeVariant = useColorTheme();

  const buttonStyles = getButtonStyles(themeVariant, isPressed, isDisabled);

  const handlePress = () => {
    setIsPressed(prevPressed => !prevPressed);
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePress}
      onPressOut={handlePress}
      style={buttonStyles.container}
      disabled={isDisabled}>
      <Text style={[buttonStyles.fontText, buttonStyles.text]}>{title}</Text>
    </Pressable>
  );
};
