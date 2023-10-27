import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {ColorThemes} from 'src/hooks/useColorTheme';

export const postCardTitleStyles = {
  [ColorThemes.DARK]: {
    postName: {color: COLORS.grayscale_dark_01},
    postDate: {color: COLORS.grayscale_dark_03},
  },
  [ColorThemes.LIGHT]: {
    postName: {color: COLORS.grayscale_light_01},
    postDate: {color: COLORS.grayscale_light_03},
  },
  root: StyleSheet.create({
    fontPostName: outfitTextStyles.bodyMedium_16,
    fontPostDate: outfitTextStyles.bodyRegular_14,
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

export const getPostCardTitleStyles = (
  themeVariant: ColorThemes,
  isPostOpen: boolean,
) => {
  return {
    container: postCardTitleStyles.root.container,
    containerPostOpen: isPostOpen && postCardTitleStyles.root.containerPostOpen,
    fontPostName: postCardTitleStyles.root.fontPostName,
    fontPostDate: postCardTitleStyles.root.fontPostDate,
    colorPostName: postCardTitleStyles[themeVariant].postName,
    colorPostDate: postCardTitleStyles[themeVariant].postDate,
  };
};
