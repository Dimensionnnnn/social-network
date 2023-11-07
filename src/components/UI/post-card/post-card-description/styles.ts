import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {ColorThemes} from 'src/hooks/theme/useColorTheme';

export const cardDescriptionStyles = {
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

export const getCardDescriptionStyles = (themeVariant: ColorThemes) => {
  return {
    descriptionStyles: [
      cardDescriptionStyles.root.container,
      cardDescriptionStyles.root.fontText,
      cardDescriptionStyles[themeVariant].textColor,
    ],
  };
};
