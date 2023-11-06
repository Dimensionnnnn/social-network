import React, {useState} from 'react';
import {useColorTheme} from 'src/hooks/useColorTheme';
import {Pressable, Text} from 'react-native';
import {getButtonStyles} from './styles';
import {SvgProps} from 'react-native-svg';

interface ButtonProps {
  title?: string;
  isDisabled?: boolean;
  Icon: (props: SvgProps) => JSX.Element;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  isDisabled,
  Icon,
  onPress,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const themeVariant = useColorTheme();

  const buttonStyles = getButtonStyles(themeVariant, isPressed, isDisabled);

  const handlePress = () => {
    setIsPressed(prevPressed => !prevPressed);
  };

  return (
    <Pressable
      style={[buttonStyles.container]}
      disabled={isDisabled}
      onPress={onPress}
      onPressIn={handlePress}
      onPressOut={handlePress}>
      <Icon color={buttonStyles.iconColor} />
      <Text style={[buttonStyles.font, buttonStyles.text]}>{title}</Text>
    </Pressable>
  );
};
