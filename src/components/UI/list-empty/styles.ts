import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {ColorThemes} from 'src/hooks/useColorTheme';

const listEmptyStyles = {
  [ColorThemes.DARK]: {
    spinnerColor: COLORS.secondary_dark_01,
    spinnerStroke: COLORS.grayscale_dark_01,
  },
  [ColorThemes.LIGHT]: {
    spinnerColor: COLORS.dark_mode,
    spinnerStroke: COLORS.grayscale_light_03,
  },
  root: StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
    },
  }),
};

export const getListEmptyStyles = (themeVariant: ColorThemes) => {
  return {
    ...listEmptyStyles.root,
    ...listEmptyStyles[themeVariant],
  };
};
