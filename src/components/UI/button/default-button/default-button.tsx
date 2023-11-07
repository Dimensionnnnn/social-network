import React, {useState} from 'react';
import {Text, Pressable} from 'react-native';
import {useColorTheme, ColorThemes} from 'src/hooks/theme/useColorTheme';
import {getButtonStyles} from './default-button-styles';
import {Spinner} from 'src/components/UI/spinner/spinner';

export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  buttonSize: ButtonSize;
  title?: string;
  isDelete?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  isDelete,
  isDisabled,
  isLoading,
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
    isLoading,
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
        buttonStyles.spinnerContainer,
      ]}
      disabled={isDisabled}
      onPress={onPress}
      onPressIn={handlePress}
      onPressOut={handlePress}>
      {isLoading ? (
        <Spinner
          color={buttonStyles.spinnerColor}
          stroke={buttonStyles.spinnerStrokeColor}
        />
      ) : (
        <Text style={[buttonStyles.fontText, buttonStyles.text]}>{title}</Text>
      )}
    </Pressable>
  );
};
