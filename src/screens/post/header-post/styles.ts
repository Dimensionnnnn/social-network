import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {ColorThemes} from 'src/hooks/theme/useColorTheme';

export const headerStyles = {
  [ColorThemes.DARK]: {
    colorTitle: {color: COLORS.grayscale_dark_01},
  },
  [ColorThemes.LIGHT]: {
    colorTitle: {color: COLORS.grayscale_light_01},
  },
  root: StyleSheet.create({
    fontTitle: outfitTextStyles.headlineSemiBold_18,
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 16,
      gap: 16,
    },
    containerText: {
      textAlign: 'center',
      width: 263,
    },
  }),
};

export const getHeaderStyles = (themeVariant: ColorThemes) => {
  return {
    ...headerStyles[themeVariant],
    ...headerStyles.root,
  };
};
