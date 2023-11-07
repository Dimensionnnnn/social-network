import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {ColorThemes} from 'src/hooks/theme/useColorTheme';

const headerStyles = {
  [ColorThemes.DARK]: {
    colorText: {color: COLORS.grayscale_dark_01},
    backgroundColor: {backgroundColor: COLORS.grayscale_dark_07},
  },
  [ColorThemes.LIGHT]: {
    colorText: {color: COLORS.grayscale_light_01},
    backgroundColor: {backgroundColor: COLORS.grayscale_light_07},
  },
  root: StyleSheet.create({
    fontText: outfitTextStyles.titleMedium_32,
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 20,
      paddingTop: 40,
    },
  }),
};

export const getHeaderStyles = (themeVariant: ColorThemes) => {
  return {
    ...headerStyles[themeVariant],
    ...headerStyles.root,
  };
};
