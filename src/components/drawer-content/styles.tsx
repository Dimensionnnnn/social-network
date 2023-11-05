import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {ColorThemes} from 'src/hooks/useColorTheme';

const drawerContentStyles = {
  [ColorThemes.DARK]: {
    containerBackgroundColor: {backgroundColor: COLORS.grayscale_dark_07},
    colorText: {color: COLORS.grayscale_dark_01},
    colorIcon: COLORS.grayscale_dark_01,
  },
  [ColorThemes.LIGHT]: {
    containerBackgroundColor: {backgroundColor: COLORS.grayscale_light_07},
    colorText: {color: COLORS.grayscale_light_01},
    colorIcon: COLORS.grayscale_light_01,
  },
  root: StyleSheet.create({
    fontUserName: outfitTextStyles.titleSemiBold_20,
    fontItemLabel: outfitTextStyles.bodyRegular_18,
    container: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingLeft: 13,
      paddingRight: 13,
      paddingBottom: 30,
      paddingTop: 60,
    },
    userContainer: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 30,
      gap: 12,
    },
    itemLabel: {
      marginLeft: -24,
      justifyContent: 'center',
    },
  }),
};

export const getDrawerContentStyles = (themeVariant: ColorThemes) => {
  return {
    ...drawerContentStyles[themeVariant],
    ...drawerContentStyles.root,
  };
};
