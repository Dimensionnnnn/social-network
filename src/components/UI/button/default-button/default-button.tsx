import React from 'react';
import {Text, Pressable} from 'react-native';
import {useColorTheme, ColorThemes} from 'src/hooks/useColorTheme';
import {
  defaultButtonStyles,
  getButtonStyles,
  ButtonElement,
} from './default-button-styles';

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
  const themeVariant: ColorThemes = useColorTheme();

  const containerStyles = {
    ...defaultButtonStyles.container,
    ...defaultButtonStyles.sizes[buttonSize],
  };

  const textStyles = defaultButtonStyles.text;

  return (
    <Pressable
      style={({pressed}) => [
        containerStyles,
        ...getButtonStyles(
          themeVariant,
          ButtonElement.button,
          pressed,
          buttonSize,
          isDelete,
          isDisabled,
        ),
      ]}
      disabled={isDisabled}
      onPress={onPress}>
      {({pressed}) => (
        <Text
          style={[
            textStyles,
            ...getButtonStyles(
              themeVariant,
              ButtonElement.text,
              pressed,
              buttonSize,
              isDelete,
              isDisabled,
            ),
          ]}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};
