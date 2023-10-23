import React, {useState} from 'react';
import {Text, Pressable} from 'react-native';
import {useColorTheme, ColorThemes} from 'src/hooks/useColorTheme';
import {getButtonStyles} from './default-button-styles';

export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  buttonSize: ButtonSize;
  title?: string;
  isDelete?: boolean;
  isDisabled?: boolean;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  isDelete,
  isDisabled,
  buttonSize,
  onPress,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const themeVariant: ColorThemes = useColorTheme();

  const buttonStyles = getButtonStyles({
    themeVariant,
    buttonSize,
    isPressed,
    isDisabled,
    isDelete,
  });

  const handlePress = () => {
    setIsPressed(prevPressed => !prevPressed);
  };

  return (
    <Pressable
      style={[
        buttonStyles.container,
        buttonStyles.sizeContainer,
        buttonStyles.button,
      ]}
      disabled={isDisabled}
      onPress={onPress}
      onPressIn={handlePress}
      onPressOut={handlePress}>
      <Text style={[buttonStyles.fontText, buttonStyles.text]}>{title}</Text>
    </Pressable>
  );
};
