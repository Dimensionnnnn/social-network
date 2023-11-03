import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {ColorThemes} from 'src/hooks/useColorTheme';

const drawerStyles = {
  [ColorThemes.DARK]: {
    backgroundColor: {backgroundColor: COLORS.grayscale_dark_07},
  },
  [ColorThemes.LIGHT]: {
    backgroundColor: {backgroundColor: COLORS.grayscale_light_07},
  },
  root: StyleSheet.create({
    container: {
      flex: 1,
    },
  }),
};

export const getDrawerStyles = (themeVariant: ColorThemes) => {
  return {
    ...drawerStyles[themeVariant],
    ...drawerStyles.root,
  };
};
