import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {ColorThemes} from 'src/hooks/useColorTheme';

export const postCardStyles = {
  [ColorThemes.DARK]: {
    cardBakground: {backgroundColor: COLORS.grayscale_dark_06},
  },
  [ColorThemes.LIGHT]: {
    cardBakground: {backgroundColor: COLORS.grayscale_light_06},
  },
  root: StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 24,
      paddingBottom: 32,
      paddingLeft: 20,
      paddingRight: 20,
    },
    postOpenContainer: {
      paddingTop: 0,
    },
  }),
};

export const getPostCardStyles = (
  themeVariant: ColorThemes,
  isPostOpen: boolean,
) => {
  return {
    container: postCardStyles.root.container,
    postOpenContainer: isPostOpen && postCardStyles.root.postOpenContainer,
    cardBakground: postCardStyles[themeVariant].cardBakground,
  };
};
