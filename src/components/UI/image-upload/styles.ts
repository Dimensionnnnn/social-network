import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {ColorThemes} from 'src/hooks/theme/useColorTheme';

export const imageUploadStyles = {
  [ColorThemes.DARK]: {
    colorTitle: {color: COLORS.grayscale_dark_01},
    colorIcon: COLORS.secondary_dark_01,
    containerBackground: {backgroundColor: COLORS.grayscale_dark_05},
    containerBorderColor: {borderColor: COLORS.grayscale_dark_04},
  },
  [ColorThemes.LIGHT]: {
    colorTitle: {color: COLORS.grayscale_light_01},
    colorIcon: COLORS.dark_mode,
    containerBackground: {backgroundColor: COLORS.grayscale_light_06},
    containerBorderColor: {borderColor: COLORS.dark_mode},
  },
  root: StyleSheet.create({
    fontTitle: outfitTextStyles.bodyMedium_14,
    container: {
      maxWidth: 343,
      width: '100%',
      height: 166,
      borderRadius: 24,
      borderStyle: 'dashed',
      borderWidth: 1.5,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      paddingBottom: 20,
    },
    containerHeader: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 40,
    },
  }),
};

export const getImageUploadStyles = (themeVariant: ColorThemes) => {
  return {
    ...imageUploadStyles[themeVariant],
    ...imageUploadStyles.root,
  };
};
