import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';

const listEmptyStyles = {
  ['dark']: {
    spinnerColor: COLORS.secondary_dark_01,
    spinnerStroke: COLORS.grayscale_dark_01,
  },
  ['light']: {
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

export const getListEmptyStyles = (themeVariant: 'dark' | 'light') => {
  return {
    ...listEmptyStyles.root,
    ...listEmptyStyles[themeVariant],
  };
};
