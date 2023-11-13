import {StyleSheet} from 'react-native';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {ColorThemes} from 'src/hooks/theme/useColorTheme';
import {COLORS} from 'src/assets/styles/colors';

const welcomeScreenStyles = {
  [ColorThemes.DARK]: {
    textColor: {color: COLORS.grayscale_dark_01},
  },
  [ColorThemes.LIGHT]: {
    textColor: {color: COLORS.grayscale_light_07},
  },
  root: StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      width: '100%',
      alignItems: 'center',
      gap: 20,
      paddingBottom: 30,
    },
    wrapper: {
      width: '100%',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'row',
    },
    containerButtonText: {
      maxWidth: 50,
      width: '100%',
    },
    text: outfitTextStyles.bodyRegular_16,
  }),
};

export const getWelcomeScreenStyles = (themeVariant: ColorThemes) => {
  return {
    ...welcomeScreenStyles.root,
    textColor: welcomeScreenStyles[themeVariant].textColor,
  };
};
