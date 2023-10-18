import React from 'react';
import {Text, Pressable} from 'react-native';
import {useColorTheme} from 'src/hooks/useColorTheme';
import {
  THEMES,
  CONTAINER,
  TEXT,
  getButtonThemeStyles,
  getButtonTextStyles,
} from './default-button-styles';
import {ColorThemes} from 'hooks/useColorTheme';

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
  const stylesThemes = THEMES[themeVariant];

  const containerStyles = {
    ...CONTAINER.container,
    ...CONTAINER.sizes[buttonSize],
  };

  const textStyles = TEXT.text;

  return (
    <Pressable
      style={({pressed}) => [
        containerStyles,
        ...getButtonThemeStyles(
          pressed,
          stylesThemes,
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
            getButtonTextStyles(
              pressed,
              stylesThemes,
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
