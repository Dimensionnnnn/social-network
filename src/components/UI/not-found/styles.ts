import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {ColorThemes} from 'src/hooks/useColorTheme';

const notFoundStyles = {
  [ColorThemes.DARK]: {
    primary: COLORS.secondary_dark_01,
    secondary: COLORS.grayscale_dark_07,
    titleColor: COLORS.grayscale_light_02,
  },
  [ColorThemes.LIGHT]: {
    primary: COLORS.dark_mode,
    secondary: COLORS.grayscale_light_07,
    titleColor: COLORS.grayscale_light_07,
  },
  root: StyleSheet.create({
    fontTitle: outfitTextStyles.bodyRegular_16,
    containerTitle: {
      width: '100%',
      maxWidth: 209,
      textAlign: 'center',
    },
    container: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 100,
      gap: 24,
    },
  }),
};

export const getNotFoundStyles = (themeVariant: ColorThemes) => {
  return {
    ...notFoundStyles[themeVariant],
    ...notFoundStyles.root,
  };
};
