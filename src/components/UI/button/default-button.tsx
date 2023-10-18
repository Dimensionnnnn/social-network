import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {THEMES} from './default-button-styles';

type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  themeVariant: 'light' | 'dark';
  buttonSize: ButtonSize;
  title?: string;
  isDelete?: boolean;
  isDisabled?: boolean;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  themeVariant,
  title,
  isDelete,
  isDisabled,
  buttonSize,
  onPress,
}) => {
  const stylesThemes = THEMES[themeVariant];

  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        styles[buttonSize],
        stylesThemes.defaultButton[buttonSize],
        isDelete && stylesThemes.defaultButton.delete,
        isDisabled && stylesThemes.defaultButton.disabled,
        pressed && stylesThemes.defaultButton.pressed,
        pressed && stylesThemes.defaultButton.pressed[buttonSize],
      ]}
      disabled={isDisabled}
      onPress={onPress}>
      {({pressed}) => (
        <Text
          style={[
            styles.text,
            stylesThemes.defaultButtonText[buttonSize],
            isDelete && stylesThemes.defaultButtonText.delete,
            isDisabled && stylesThemes.defaultButtonText.disabled,
            pressed && stylesThemes.defaultButtonText.pressed,
          ]}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 343,
    alignItems: 'center',
  },
  small: {
    maxWidth: 148,
    borderRadius: 17,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 32,
    paddingRight: 32,
  },
  medium: {
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 10,
    paddingLeft: 12,
    borderRadius: 15,
  },
  large: {
    paddingTop: 16,
    paddingRight: 32,
    paddingBottom: 16,
    paddingLeft: 32,
    borderRadius: 21,
  },
  text: outfitTextStyles.bodyMedium_16,
});
