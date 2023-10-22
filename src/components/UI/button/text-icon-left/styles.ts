import {outfitTextStyles} from 'src/assets/styles/typography';
import {COLORS} from 'src/assets/styles/colors';
import {ColorThemes} from 'src/hooks/useColorTheme';
import {StyleSheet} from 'react-native';

export const textIconLeftButtonStyles = {
  [ColorThemes.DARK]: {
    pressed: {color: COLORS.secondary_dark_01},
    disabled: {color: COLORS.grayscale_dark_04},
    initial: {color: COLORS.grayscale_dark_01},
  },
  [ColorThemes.LIGHT]: {
    pressed: {color: COLORS.secondary_light_01},
    disabled: {color: COLORS.grayscale_light_05},
    initial: {color: COLORS.grayscale_light_01},
  },
  root: StyleSheet.create({
    fontText: outfitTextStyles.bodyRegular_18,
    container: {
      width: '100%',
      maxWidth: 131,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  }),
};

export const getButtonStyles = (
  themeVariant: ColorThemes,
  pessed?: boolean,
  isDisabled?: boolean,
) => {
  return {
    container: textIconLeftButtonStyles.root.container,
    font: textIconLeftButtonStyles.root.fontText,
    text: [
      textIconLeftButtonStyles[themeVariant].initial,
      pessed && textIconLeftButtonStyles[themeVariant].pressed,
      isDisabled && textIconLeftButtonStyles[themeVariant].disabled,
    ],
  };
};
