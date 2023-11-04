import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {ColorThemes} from 'src/hooks/useColorTheme';

const topPostsStyles = {
  [ColorThemes.DARK]: {
    containerBackground: {backgroundColor: COLORS.grayscale_dark_07},
  },
  [ColorThemes.LIGHT]: {
    containerBackground: {backgroundColor: COLORS.grayscale_light_07},
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

export const getTopPostsStyles = (themeVariant: ColorThemes) => {
  return {
    ...topPostsStyles[themeVariant],
    ...topPostsStyles.root,
  };
};
