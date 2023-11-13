import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {ColorThemes} from 'src/hooks/theme/useColorTheme';

export const createPostStyles = {
  [ColorThemes.DARK]: {
    colorTitle: {color: COLORS.grayscale_dark_01},
    containerColor: {backgroundColor: COLORS.grayscale_dark_07},
  },
  [ColorThemes.LIGHT]: {
    colorTitle: {color: COLORS.grayscale_light_01},
    containerColor: {backgroundColor: COLORS.grayscale_light_07},
  },
  root: StyleSheet.create({
    fontTitle: outfitTextStyles.headlineSemiBold_18,
    container: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 20,
      gap: 16,
    },
    containerHeader: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 40,
    },
    containerImage: {
      maxWidth: 343,
      width: '100%',
      height: 166,
      borderRadius: 24,
      paddingBottom: 20,
    },
    imageSize: {
      width: '100%',
      height: '100%',
    },
  }),
};

export const getCreatePostStyles = (themeVariant: ColorThemes) => {
  return {
    ...createPostStyles[themeVariant],
    ...createPostStyles.root,
  };
};
