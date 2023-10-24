import {StyleSheet} from 'react-native';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {COLORS} from 'src/assets/styles/colors';
import {ColorThemes} from 'src/hooks/useColorTheme';

export const deleteButtonStyles = {
  [ColorThemes.DARK]: {
    iconColor: COLORS.grayscale_dark_01,
    textColor: {color: COLORS.grayscale_dark_01},
  },
  [ColorThemes.LIGHT]: {
    iconColor: COLORS.grayscale_light_06,
    textColor: {color: COLORS.grayscale_light_06},
  },
  root: StyleSheet.create({
    container: {
      width: '100%',
      maxWidth: 73,
      height: 364,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: COLORS.additional_error,
    },
    fontText: outfitTextStyles.bodyMedium_14,
  }),
};

export const getButtonStyles = (themeVariant: ColorThemes) => {
  return {
    container: deleteButtonStyles.root.container,
    fontText: deleteButtonStyles.root.fontText,
    iconColor: deleteButtonStyles[themeVariant].iconColor,
    textColor: deleteButtonStyles[themeVariant].textColor,
  };
};
