import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {ColorThemes} from 'src/hooks/useColorTheme';

export const inputStyles = {
  [ColorThemes.DARK]: {
    typing: {
      color: COLORS.grayscale_dark_01,
      borderColor: COLORS.grayscale_dark_01,
    },
    filled: {
      color: COLORS.grayscale_dark_01,
      borderColor: COLORS.grayscale_dark_01,
    },
    disabled: {
      color: COLORS.grayscale_dark_05,
      borderColor: COLORS.grayscale_dark_05,
    },
    success: {
      color: COLORS.secondary_dark_01,
      borderColor: COLORS.secondary_dark_01,
    },
    error: {
      color: COLORS.additional_error,
      borderColor: COLORS.additional_error,
    },
    initial: {
      color: COLORS.grayscale_dark_04,
      borderBottomWidth: 1.5,
      borderColor: COLORS.grayscale_dark_04,
    },
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
    typing: {
      color: COLORS.grayscale_light_01,
      borderColor: COLORS.grayscale_light_01,
    },
    filled: {
      color: COLORS.grayscale_light_01,
      borderColor: COLORS.grayscale_light_01,
    },
    disabled: {
      color: COLORS.grayscale_light_05,
      borderColor: COLORS.grayscale_light_05,
    },
    success: {
      color: COLORS.dark_mode,
      borderColor: COLORS.dark_mode,
    },
    error: {
      color: COLORS.additional_error,
      borderColor: COLORS.additional_error,
    },
    initial: {
      color: COLORS.grayscale_light_03,
      borderBottomWidth: 1.5,
      borderColor: COLORS.grayscale_light_03,
    },
    iconColor: {
      typing: COLORS.grayscale_light_01,
      filled: COLORS.grayscale_light_01,
      disabled: COLORS.grayscale_light_05,
      success: COLORS.dark_mode,
      error: COLORS.additional_error,
      initial: COLORS.grayscale_light_03,
    },
  },
  label: {color: COLORS.grayscale_dark_03},
  root: StyleSheet.create({
    fontInput: outfitTextStyles.bodyRegular_16,
    fontLabel: outfitTextStyles.headlineSemiBold_14,
    fontError: outfitTextStyles.bodyRegular_14,
    container: {
      width: '100%',
      maxWidth: 343,
      position: 'relative',
    },
    containerIcon: {
      position: 'absolute',
      top: 32,
      right: 0,
    },
    containerError: {
      color: COLORS.additional_error,
      paddingTop: 4,
      paddingBottom: 4,
      width: '100%',
      maxWidth: 343,
    },
    containerInput: {
      paddingTop: 12,
      paddingBottom: 16,
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
  isPassword?: boolean;
}

export const getInputStyles = ({
  themeVariant,
  isTyping,
  isFilled,
  isDisabled,
  isSuccess,
  isError,
  isPassword,
}: InputStylesOptions) => {
  return {
    container: inputStyles.root.container,
    containerInput: inputStyles.root.containerInput,
    label: inputStyles.label,
    inputTextFont: inputStyles.root.fontInput,
    labelFont: inputStyles.root.fontLabel,
    inputTextColor: [
      inputStyles[themeVariant].initial,
      isTyping && inputStyles[themeVariant].typing,
      isFilled && inputStyles[themeVariant].filled,
      isDisabled && inputStyles[themeVariant].disabled,
      isSuccess && inputStyles[themeVariant].success,
      isError && inputStyles[themeVariant].error,
    ],
    errorContainer: inputStyles.root.containerError,
    errorFont: inputStyles.root.fontError,
    iconContainer: (isSuccess || isPassword) && inputStyles.root.containerIcon,
    iconColor:
      isPassword &&
      getIconColor({
        isTyping,
        isFilled,
        isDisabled,
        isSuccess,
        isError,
        styles: inputStyles[themeVariant].iconColor,
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
  switch (true) {
    case isTyping:
      return styles.typing;
    case isFilled:
      return styles.filled;
    case isDisabled:
      return styles.disabled;
    case isSuccess:
      return styles.success;
    case isError:
      return styles.error;
    default:
      return styles.initial;
  }
};
