import React, {useState} from 'react';
import {useColorTheme} from 'src/hooks/theme/useColorTheme';
import {SvgProps} from 'react-native-svg';
import {Pressable} from 'react-native';
import {getIconButtonBgStyles} from './styles';

interface ButtonProps {
  Icon: (props: SvgProps) => JSX.Element;
  isDisabled?: boolean;
  isLiked?: boolean;
  isLikeButton?: boolean;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  Icon,
  isLiked,
  isDisabled,
  isLikeButton,
  onPress,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const themeVariant = useColorTheme();

  const handlePress = () => {
    setIsPressed(prevPressed => !prevPressed);
  };

  const styles = getIconButtonBgStyles({
    themeVariant,
    isLiked,
    isLikeButton,
    isPressed,
    isDisabled,
  });

  return (
    <Pressable
      style={[styles.container]}
      disabled={isDisabled}
      onPress={onPress}
      onPressIn={handlePress}
      onPressOut={handlePress}>
      <Icon color={styles.iconStyles.color} />
    </Pressable>
  );
};
