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
  },
  label: {color: COLORS.grayscale_dark_03},
  errorMessage: {
    font: outfitTextStyles.bodyRegular_14,
    color: COLORS.additional_error,
    paddingTop: 4,
    paddingBottom: 4,
    width: '100%',
    maxWidth: 343,
  },
  root: StyleSheet.create({
    fontInput: outfitTextStyles.bodyRegular_16,
    fontLabel: outfitTextStyles.headlineSemiBold_14,
    container: {
      width: '100%',
      maxWidth: 343,
      paddingTop: 12,
      paddingBottom: 16,
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
    container: inputStyles.root.container,
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
    iconContainer: isSuccess && inputStyles.root.containerIcon,
    iconColor: isSuccess && inputStyles[themeVariant].success.color,
  };
};
