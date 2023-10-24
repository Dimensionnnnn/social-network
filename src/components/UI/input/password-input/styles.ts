import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {ColorThemes} from 'src/hooks/useColorTheme';

export const passwordInputStyles = {
  [ColorThemes.DARK]: {
    iconColor: {
      typing: COLORS.grayscale_dark_01,
      filled: COLORS.grayscale_dark_01,
      disabled: COLORS.grayscale_dark_05,
      success: COLORS.secondary_dark_01,
      error: COLORS.additional_error,
      initial: COLORS.grayscale_dark_04,
    },
  },
  [ColorThemes.LIGHT]: {
    iconColor: {
      typing: COLORS.grayscale_light_01,
      filled: COLORS.grayscale_light_01,
      disabled: COLORS.grayscale_light_05,
      success: COLORS.dark_mode,
      error: COLORS.additional_error,
      initial: COLORS.grayscale_light_03,
    },
  },
  root: StyleSheet.create({
    container: {
      width: '100%',
      maxWidth: 343,
      position: 'relative',
    },
    containerIcon: {
      position: 'absolute',
      top: 42,
      right: 0,
    },
  }),
};

interface InputStylesOptions {
  themeVariant: ColorThemes;
  isTyping?: boolean;
  isFilled?: boolean;
  isDisabled?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
}

export const getInputStyles = ({
  themeVariant,
  isTyping,
  isFilled,
  isDisabled,
  isSuccess,
  isError,
}: InputStylesOptions) => {
  return {
    container: passwordInputStyles.root.container,
    iconContainer: passwordInputStyles.root.containerIcon,
    iconColor: getIconColor({
      isTyping,
      isFilled,
      isDisabled,
      isSuccess,
      isError,
      styles: passwordInputStyles[themeVariant].iconColor,
    }),
  };
};

interface IconProps {
  isTyping?: boolean;
  isFilled?: boolean;
  isDisabled?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  styles: {
    typing: string;
    filled: string;
    disabled: string;
    success: string;
    error: string;
    initial: string;
  };
}

const getIconColor = ({
  isTyping,
  isFilled,
  isDisabled,
  isSuccess,
  isError,
  styles,
}: IconProps) => {
  if (isTyping) {
    return styles.typing;
  }
  if (isFilled) {
    return styles.filled;
  }
  if (isDisabled) {
    return styles.disabled;
  }
  if (isSuccess) {
    return styles.success;
  }
  if (isError) {
    return styles.error;
  }
  return styles.initial;
};
