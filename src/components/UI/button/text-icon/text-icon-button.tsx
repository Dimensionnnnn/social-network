import React from 'react';
import {ColorThemes, useColorTheme} from 'src/hooks/useColorTheme';
import {Pressable, Text} from 'react-native';
import {
  ButtonElement,
  getButtonStyles,
  getIconColor,
  textIconButtonStyles,
} from './styles';
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
  const themeVariant: ColorThemes = useColorTheme();
  const textStyles = textIconButtonStyles.text;
  const container = textIconButtonStyles.container;

  return (
    <Pressable
      style={({pressed}) => [
        container,
        ...getButtonStyles(
          themeVariant,
          ButtonElement.button,
          pressed,
          isDisabled,
        ),
      ]}
      disabled={isDisabled}
      onPress={onPress}>
      {({pressed}) => (
        <>
          <Text
            style={[
              textStyles,
              ...getButtonStyles(
                themeVariant,
                ButtonElement.text,
                pressed,
                isDisabled,
              ),
            ]}>
            {title}
          </Text>
          <SvgCopy {...getIconColor(themeVariant, pressed, isDisabled)} />
        </>
      )}
    </Pressable>
  );
};
