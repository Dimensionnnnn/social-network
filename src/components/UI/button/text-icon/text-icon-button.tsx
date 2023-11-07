import React from 'react';
import {useColorTheme} from 'src/hooks/theme/useColorTheme';
import {Pressable, Text} from 'react-native';
import {getButtonStyles} from './styles';
import {SvgCopy} from 'src/shared/icons/components/copy-svg';
import {Spinner} from 'src/components/UI/spinner/spinner';

interface ButtonProps {
  title?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  isDisabled,
  isLoading,
  onPress,
}) => {
  const [isPressed, setIsPressed] = React.useState(false);
  const themeVariant = useColorTheme();

  const buttonStyles = getButtonStyles({
    themeVariant,
    isPressed,
    isDisabled,
    isLoading,
  });

  const handlePress = () => {
    setIsPressed(prevPressed => !prevPressed);
  };

  return (
    <Pressable
      style={[
        buttonStyles.container,
        buttonStyles.button,
        buttonStyles.spinnerContainer,
      ]}
      onPress={onPress}
      onPressIn={handlePress}
      onPressOut={handlePress}
      disabled={isDisabled}>
      <>
        {isLoading ? (
          <Spinner color={buttonStyles.spinnerColor} />
        ) : (
          <>
            <Text style={[buttonStyles.fontText, buttonStyles.textColor]}>
              {title}
            </Text>
            <SvgCopy color={buttonStyles.iconColor} />
          </>
        )}
      </>
    </Pressable>
  );
};
