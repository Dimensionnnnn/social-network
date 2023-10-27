import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {ColorThemes} from 'src/hooks/useColorTheme';

export const postCardDescriptionStyles = {
  [ColorThemes.DARK]: {
    textColor: {color: COLORS.grayscale_dark_02},
  },
  [ColorThemes.LIGHT]: {
    textColor: {color: COLORS.grayscale_light_01},
  },
  root: StyleSheet.create({
    fontText: outfitTextStyles.bodyRegular_14,
    container: {
      width: '100%',
      maxWidth: 335,
      paddingTop: 20,
    },
  }),
};

export const getPostCardDescriptionStyles = (themeVariant: ColorThemes) => {
  return {
    container: postCardDescriptionStyles.root.container,
    textColor: postCardDescriptionStyles[themeVariant].textColor,
    fontText: postCardDescriptionStyles.root.fontText,
  };
};
