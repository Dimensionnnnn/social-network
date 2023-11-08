import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {ColorThemes} from 'src/hooks/theme/useColorTheme';

export const postCardStyles = {
  [ColorThemes.DARK]: {
    containerBackground: {backgroundColor: COLORS.grayscale_dark_07},
  },
  [ColorThemes.LIGHT]: {
    containerBackground: {backgroundColor: COLORS.grayscale_light_07},
  },
  root: StyleSheet.create({
    container: {
      width: '100%',
      flex: 1,
    },
    wrapper: {
      width: '100%',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 0,
      paddingBottom: 32,
      paddingLeft: 20,
      paddingRight: 20,
    },
  }),
};

export const getPostOpenStyles = (themeVariant: ColorThemes) => {
  return {
    ...postCardStyles.root,
    ...postCardStyles[themeVariant],
  };
};
