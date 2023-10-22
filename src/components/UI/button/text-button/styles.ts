import {outfitTextStyles} from 'src/assets/styles/typography';
import {COLORS} from 'src/assets/styles/colors';
import {ColorThemes} from 'src/hooks/useColorTheme';
import {StyleSheet} from 'react-native';

export const textButtonStyles = {
  [ColorThemes.DARK]: {
    pressed: {
      color: COLORS.primary_light_02,
      borderBottomColor: COLORS.primary_light_02,
    },
    disabled: {
      color: COLORS.grayscale_dark_04,
      borderBottomColor: COLORS.grayscale_dark_04,
    },
    initial: {
      color: COLORS.secondary_dark_01,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.secondary_dark_01,
    },
  },
  [ColorThemes.LIGHT]: {
    pressed: {
      color: COLORS.secondary_light_01,
      borderBottomColor: COLORS.secondary_light_01,
    },
    disabled: {
      color: COLORS.grayscale_light_05,
      borderBottomColor: COLORS.grayscale_light_05,
    },
    initial: {
      color: COLORS.dark_mode,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.dark_mode,
    },
  },
  root: StyleSheet.create({
    fontText: outfitTextStyles.bodyMedium_16,
    container: {
      width: '100%',
      maxWidth: 39,
      backgroundColor: 'initial',
      borderBottomColor: 'black',
    },
  }),
};

export const getButtonStyles = (
  themeVariant: ColorThemes,
  pressed?: boolean,
  isDisabled?: boolean,
) => {
  return {
    container: textButtonStyles.root.container,
    fontText: textButtonStyles.root.fontText,
    text: [
      textButtonStyles[themeVariant].initial,
      pressed && textButtonStyles[themeVariant].pressed,
      isDisabled && textButtonStyles[themeVariant].disabled,
    ],
  };
};
