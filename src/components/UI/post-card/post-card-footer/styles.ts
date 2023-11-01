import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {ColorThemes} from 'src/hooks/useColorTheme';

export const cardFooterStyles = {
  [ColorThemes.DARK]: {
    primaryColor: {color: COLORS.grayscale_dark_03},
    secondaryColor: {color: COLORS.grayscale_dark_02},
  },
  [ColorThemes.LIGHT]: {
    primaryColor: {color: COLORS.grayscale_light_03},
    secondaryColor: {color: COLORS.grayscale_light_01},
  },
  root: StyleSheet.create({
    fontText: outfitTextStyles.bodyRegular_14,
    container: {
      width: '100%',
      maxWidth: 335,
      paddingTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    containerAuthorInfo: {
      gap: 8,
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    containerImage: {
      width: '100%',
      maxWidth: 24,
      height: 24,
      borderRadius: 12.8,
      overflow: 'hidden',
    },
    containerButtons: {
      gap: 12,
      flexDirection: 'row',
    },
    containerLikes: {
      gap: 4,
      flexDirection: 'row',
    },
    imageSize: {
      width: '100%',
      height: '100%',
    },
  }),
};

export const getCardFooterStyles = (themeVariant: ColorThemes) => {
  return {
    container: cardFooterStyles.root.container,
    containerAuthorInfo: cardFooterStyles.root.containerAuthorInfo,
    containerButtons: cardFooterStyles.root.containerButtons,
    containerLikes: cardFooterStyles.root.containerLikes,
    containerImage: cardFooterStyles.root.containerImage,
    fontText: cardFooterStyles.root.fontText,
    primaryColor: cardFooterStyles[themeVariant].primaryColor,
    secondaryColor: cardFooterStyles[themeVariant].secondaryColor,
    imageSize: cardFooterStyles.root.imageSize,
  };
};
