import React from 'react';
import {ColorThemes, useColorTheme} from 'src/hooks/useColorTheme';
import {Pressable, Text} from 'react-native';
import {getButtonStyles} from './styles';
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
  const [isPressed, setIsPressed] = React.useState(false);
  const themeVariant: ColorThemes = useColorTheme();

  const buttonStyles = getButtonStyles(themeVariant, isPressed, isDisabled);

  const handlePress = () => {
    setIsPressed(prevPressed => !prevPressed);
  };

  return (
    <Pressable
      style={[buttonStyles.container, buttonStyles.button]}
      onPress={onPress}
      onPressIn={handlePress}
      onPressOut={handlePress}
      disabled={isDisabled}>
      <>
        <Text style={[buttonStyles.fontText, buttonStyles.textColor]}>
          {title}
        </Text>
        <SvgCopy color={buttonStyles.iconColor} />
      </>
    </Pressable>
  );
};
