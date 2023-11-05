import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {ColorThemes} from 'src/hooks/useColorTheme';

const newPostsStyles = {
  [ColorThemes.DARK]: {
    containerBackground: {backgroundColor: COLORS.grayscale_dark_07},
    spinnerColor: COLORS.secondary_dark_01,
    spinnerStroke: COLORS.grayscale_dark_01,
  },
  [ColorThemes.LIGHT]: {
    containerBackground: {backgroundColor: COLORS.grayscale_light_07},
    spinnerColor: COLORS.dark_mode,
    spinnerStroke: COLORS.grayscale_light_03,
  },
  root: StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1,
      gap: 4,
    },
  }),
};

export const getNewPostsStyles = (themeVariant: ColorThemes) => {
  return {
    ...newPostsStyles[themeVariant],
    ...newPostsStyles.root,
  };
};
