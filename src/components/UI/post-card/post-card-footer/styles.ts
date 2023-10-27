import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {ColorThemes} from 'src/hooks/useColorTheme';

export const postCardFooterStyles = {
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

export const getPostCardFooterStyles = (themeVariant: ColorThemes) => {
  return {
    container: postCardFooterStyles.root.container,
    containerAuthorInfo: postCardFooterStyles.root.containerAuthorInfo,
    containerButtons: postCardFooterStyles.root.containerButtons,
    containerLikes: postCardFooterStyles.root.containerLikes,
    containerImage: postCardFooterStyles.root.containerImage,
    fontText: postCardFooterStyles.root.fontText,
    primaryColor: postCardFooterStyles[themeVariant].primaryColor,
    secondaryColor: postCardFooterStyles[themeVariant].secondaryColor,
    imageSize: postCardFooterStyles.root.imageSize,
  };
};
