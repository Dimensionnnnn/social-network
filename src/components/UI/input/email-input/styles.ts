import {COLORS} from 'src/assets/styles/colors';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {StyleSheet} from 'react-native';
import {ColorThemes} from 'src/hooks/useColorTheme';

export const inputStyles = {
  dark: {
    inputText: StyleSheet.create({
      typing: {color: COLORS.grayscale_dark_01},
      filled: {color: COLORS.grayscale_dark_01},
      disabled: {color: COLORS.grayscale_dark_05},
      success: {color: COLORS.secondary_dark_01},
      error: {color: COLORS.additional_error},
      initial: {color: COLORS.grayscale_dark_04},
    }),
  },
  light: {
    inputText: StyleSheet.create({
      typing: {color: COLORS.grayscale_light_01},
      filled: {color: COLORS.grayscale_light_01},
      disabled: {color: COLORS.grayscale_light_05},
      success: {color: COLORS.dark_mode},
      error: {color: COLORS.additional_error},
      initial: {color: COLORS.grayscale_light_03},
    }),
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
      borderBottomWidth: 1.5,
      paddingTop: 12,
      paddingBottom: 16,
    },
  }),
};

export const getInputStyles = (
  themeVariant: ColorThemes,
  isTyping?: boolean,
  isFilled?: boolean,
  isDisabled?: boolean,
  isSuccess?: boolean,
  isError?: boolean,
) => {
  switch (themeVariant) {
    default:
    case ColorThemes.DARK:
      return {
        container: inputStyles.root.container,
        label: inputStyles.label,
        inputTextFont: inputStyles.root.fontInput,
        labelFont: inputStyles.root.fontLabel,
        inputText: [
          inputStyles.dark.inputText.initial,
          isTyping && inputStyles.dark.inputText.typing,
          isFilled && inputStyles.dark.inputText.filled,
          isDisabled && inputStyles.dark.inputText.disabled,
          isSuccess && inputStyles.dark.inputText.success,
          isError && inputStyles.dark.inputText.error,
        ],
      };
    case ColorThemes.LIGHT:
      return {
        container: inputStyles.root.container,
        label: inputStyles.label,
        inputTextFont: inputStyles.root.fontInput,
        labelFont: inputStyles.root.fontLabel,
        inputText: [
          inputStyles.light.inputText.initial,
          isTyping && inputStyles.light.inputText.typing,
          isFilled && inputStyles.light.inputText.filled,
          isDisabled && inputStyles.light.inputText.disabled,
          isSuccess && inputStyles.light.inputText.success,
          isError && inputStyles.light.inputText.error,
        ],
      };
  }
};
