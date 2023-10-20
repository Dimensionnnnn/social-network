import React, {useState} from 'react';
import {ColorThemes, useColorTheme} from 'src/hooks/useColorTheme';
import {Pressable, Text} from 'react-native';
import {getButtonStyleSheet, getIconStyles} from './styles';
import {SvgCopy} from 'src/shared/icons/components/copy-svg';

interface ButtonProps {
  title?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  isDisabled,
  // isLoading,
  onPress,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const themeVariant: ColorThemes = useColorTheme();

  const buttonStyles = getButtonStyleSheet(themeVariant, isPressed, isDisabled);
  const iconStyles = getIconStyles(themeVariant, isPressed, isDisabled);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <Pressable
      style={[buttonStyles.container, buttonStyles.button]}
      disabled={isDisabled}
      onPress={onPress}
      onPressIn={handlePress}
      onPressOut={handlePress}>
      <>
        <Text style={buttonStyles.contentText}>{title}</Text>
        <SvgCopy {...iconStyles} />
      </>
    </Pressable>
  );
};
