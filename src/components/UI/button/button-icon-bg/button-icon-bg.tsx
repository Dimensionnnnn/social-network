import React, {useState} from 'react';
import {useColorTheme} from 'src/hooks/theme/useColorTheme';
import {SvgProps} from 'react-native-svg';
import {Pressable} from 'react-native';
import {getIconButtonBgStyles} from './styles';

interface ButtonProps {
  buttonSize: ButtonSize;
  Icon: (props: SvgProps) => JSX.Element;
  isDisabled?: boolean;
  onPress?: (() => void) | Promise<void>;
}

export type ButtonSize = 'small' | 'medium' | 'large';

export const Button: React.FC<ButtonProps> = ({
  buttonSize,
  Icon,
  isDisabled,
  onPress,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const themeVariant = useColorTheme();

  const handlePress = () => {
    setIsPressed(prevPressed => !prevPressed);
  };

  const styles = getIconButtonBgStyles({
    themeVariant,
    buttonSize,
    isPressed,
    isDisabled,
  });

  return (
    <Pressable
      style={[
        styles.container,
        styles.sizeContainer,
        styles.iconStyles.background,
      ]}
      disabled={isDisabled}
      onPress={onPress}
      onPressIn={handlePress}
      onPressOut={handlePress}>
      <Icon color={styles.iconStyles.color} />
    </Pressable>
  );
};
