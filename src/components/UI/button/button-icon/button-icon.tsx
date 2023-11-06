import React, {useState} from 'react';
import {useColorTheme} from 'src/hooks/useColorTheme';
import {SvgProps} from 'react-native-svg';
import {Pressable} from 'react-native';
import {getIconButtonStyles} from './styles';

interface ButtonProps {
  buttonSize?: ButtonSize;
  isDefaultIcon: boolean;
  Icon: (props: SvgProps) => JSX.Element;
  isDisabled?: boolean;
  onPress?: () => void;
}

export type ButtonSize = 'small' | 'medium' | 'large';

export const Button: React.FC<ButtonProps> = ({
  buttonSize,
  Icon,
  isDefaultIcon,
  isDisabled,
  onPress,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const themeVariant = useColorTheme();

  const handlePress = () => {
    setIsPressed(prevPressed => !prevPressed);
  };

  const buttonStyles = getIconButtonStyles({
    themeVariant,
    buttonSize,
    isDefaultIcon,
    isPressed,
    isDisabled,
  });

  return (
    <Pressable
      style={[
        buttonStyles.container,
        buttonStyles.sizeContainer,
        buttonStyles.buttonBackground,
      ]}
      disabled={isDisabled}
      onPress={onPress}
      onPressIn={handlePress}
      onPressOut={handlePress}>
      <Icon color={buttonStyles.iconColor} />
    </Pressable>
  );
};
