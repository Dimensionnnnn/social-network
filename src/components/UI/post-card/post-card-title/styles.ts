import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {ColorThemes} from 'src/hooks/theme/useColorTheme';

export const cardTitleStyles = {
  [ColorThemes.DARK]: {
    name: {color: COLORS.grayscale_dark_01},
    date: {color: COLORS.grayscale_dark_03},
  },
  [ColorThemes.LIGHT]: {
    name: {color: COLORS.grayscale_light_01},
    date: {color: COLORS.grayscale_light_03},
  },
  root: StyleSheet.create({
    fontName: outfitTextStyles.bodyMedium_16,
    fontDate: outfitTextStyles.bodyRegular_14,
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 12,
    },
    containerPostOpen: {
      justifyContent: 'center',
      paddingBottom: 8,
    },
  }),
};

export const getCardTitleStyles = (
  themeVariant: ColorThemes,
  isPostOpen: boolean,
) => {
  return {
    container: cardTitleStyles.root.container,
    containerPostOpen: isPostOpen && cardTitleStyles.root.containerPostOpen,
    fontName: cardTitleStyles.root.fontName,
    fontDate: cardTitleStyles.root.fontDate,
    colorName: cardTitleStyles[themeVariant].name,
    colorDate: cardTitleStyles[themeVariant].date,
  };
};
