import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {ColorThemes} from 'src/hooks/useColorTheme';

const loginScreenStyles = {
  [ColorThemes.DARK]: {
    containerBackground: {backgroundColor: COLORS.grayscale_dark_07},
    titleColor: {color: COLORS.secondary_dark_01},
    textColor: {color: COLORS.grayscale_dark_01},
  },
  [ColorThemes.LIGHT]: {
    containerBackground: {backgroundColor: COLORS.grayscale_light_07},
    titleColor: {color: COLORS.dark_mode},
    textColor: {color: COLORS.grayscale_light_01},
  },
  root: StyleSheet.create({
    fontTitle: outfitTextStyles.titleSemiBold_32,
    fontText: outfitTextStyles.bodyRegular_16,
    container: {
      flex: 1,
      width: '100%',
      justifyContent: 'flex-end',
      paddingBottom: 40,
    },
    wrapper: {
      paddingLeft: 25,
      paddingBottom: 120,
      gap: 16,
    },
    containerButton: {
      alignItems: 'center',
      gap: 20,
    },
    containerHaveAccount: {
      width: '100%',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'row',
      gap: 4,
    },
    containerTitle: {
      paddingBottom: 20,
      gap: 4,
    },
  }),
};

export const getLoginScreenStyles = (themeVariant: ColorThemes) => {
  return {
    ...loginScreenStyles[themeVariant],
    ...loginScreenStyles.root,
  };
};
