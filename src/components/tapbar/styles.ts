import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {ColorThemes} from 'src/hooks/theme/useColorTheme';

export const tapBarStyles = {
  [ColorThemes.DARK]: {
    containerColor: {backgroundColor: COLORS.grayscale_dark_07},
    iconColor: {
      active: COLORS.secondary_dark_01,
      initial: COLORS.grayscale_dark_04,
    },
    textColor: {
      active: {color: COLORS.secondary_dark_01},
      initial: {color: COLORS.grayscale_dark_04},
    },
  },
  [ColorThemes.LIGHT]: {
    containerColor: {backgroundColor: COLORS.grayscale_light_07},
    iconColor: {
      active: COLORS.dark_mode,
      initial: COLORS.grayscale_light_05,
    },
    textColor: {
      active: {color: COLORS.dark_mode},
      initial: {color: COLORS.grayscale_light_05},
    },
  },
  root: StyleSheet.create({
    fontText: outfitTextStyles.captionRegular_12,
    container: {
      height: 100,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerItem: {
      gap: 10,
    },
  }),
};

export const getTapBarStyles = (themeVariant: ColorThemes) => {
  return {
    container: tapBarStyles.root.container,
    containerColor: tapBarStyles[themeVariant].containerColor,
    containerItem: tapBarStyles.root.containerItem,
    fontText: tapBarStyles.root.fontText,
    iconColor: {
      active: tapBarStyles[themeVariant].iconColor.active,
      initial: tapBarStyles[themeVariant].iconColor.initial,
    },
    textColor: {
      active: tapBarStyles[themeVariant].textColor.active,
      initial: tapBarStyles[themeVariant].textColor.initial,
    },
  };
};
