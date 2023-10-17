import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {
  darkMode,
  grayscaleDark,
  grayscaleLight,
  secondaryDark,
  secondaryLight,
} from '../../../assets/styles/colors';
import {outfitTextStyles} from '../../../assets/styles/typography';

export enum ButtonSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

interface ButtonProps {
  isDarkMode: boolean;
  buttonSize: ButtonSize;
  title?: string;
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  isDarkMode,
  title,
  // loading,
  // disabled,
  buttonSize,
  onPress,
}) => {
  const isSmallButton = buttonSize === ButtonSize.small;
  const isMediumButton = buttonSize === ButtonSize.medium;
  const isLargeButton = buttonSize === ButtonSize.large;

  const containerStyle = [
    styles.container,
    isSmallButton ? styles.containerSmallButton : null,
    isMediumButton ? styles.containerMediumButton : null,
    isLargeButton ? styles.containerLargeButton : null,
  ];

  let pressableBackgroundColor = '';
  let pressableTextColor = '';

  if (isDarkMode) {
    pressableBackgroundColor = isLargeButton
      ? grayscaleDark.grayscale_05
      : grayscaleDark.grayscale_07;
  } else {
    pressableBackgroundColor =
      isLargeButton || isSmallButton
        ? darkMode.darkMode
        : grayscaleLight.grayscale_07;
  }

  if (isDarkMode) {
    pressableTextColor = secondaryDark.secondary_01;
  } else {
    pressableTextColor = isMediumButton
      ? darkMode.darkMode
      : grayscaleLight.grayscale_07;
  }

  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed
            ? isDarkMode
              ? secondaryDark.secondary_01
              : isMediumButton
              ? darkMode.darkMode
              : secondaryLight.secondary_01
            : pressableBackgroundColor,
        },
        ...containerStyle,
      ]}
      onPress={onPress}>
      {({pressed}) => (
        <Text
          style={[
            styles.text,
            {
              color: pressed
                ? isDarkMode
                  ? grayscaleDark.grayscale_07
                  : grayscaleLight.grayscale_07
                : pressableTextColor,
            },
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
  containerSmallButton: {
    maxWidth: 148,
    borderRadius: 17,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 32,
    paddingRight: 32,
  },
  containerMediumButton: {
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 10,
    paddingLeft: 12,
    borderRadius: 15,
  },
  containerLargeButton: {
    paddingTop: 16,
    paddingRight: 32,
    paddingBottom: 16,
    paddingLeft: 32,
    borderRadius: 21,
  },
  text: outfitTextStyles.bodyMedium_16,
});
