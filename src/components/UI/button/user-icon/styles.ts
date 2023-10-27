import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {ColorThemes} from 'src/hooks/useColorTheme';
import {UserIconSize} from './user-icon';

export const useIconStyles = {
  [ColorThemes.DARK]: {
    iconColor: COLORS.grayscale_dark_06,
    containerColor: {backgroundColor: COLORS.grayscale_dark_05},
  },
  [ColorThemes.LIGHT]: {
    iconColor: COLORS.grayscale_light_03,
    containerColor: {backgroundColor: COLORS.grayscale_light_04},
  },
  root: StyleSheet.create({
    container: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    },
    imageSize: {
      width: '100%',
      height: '100%',
    },
  }),
  iconSize: {
    small: {
      width: 23,
      height: 23,
    },
    medium: {
      width: 46,
      height: 46,
    },
    large: {
      width: 92,
      height: 92,
    },
  },
  containerBySize: {
    small: {
      maxWidth: 40,
      height: 40,
      borderRadius: 20,
    },
    medium: {
      maxWidth: 80,
      height: 80,
      borderRadius: 40,
    },
    large: {
      maxWidth: 160,
      height: 160,
      borderRadius: 80,
    },
  },
};

export const getUserIconStyles = (
  themeVariant: ColorThemes,
  size: UserIconSize,
) => {
  return {
    container: useIconStyles.root.container,
    containerColor: useIconStyles[themeVariant].containerColor,
    containerBySize: useIconStyles.containerBySize[size],
    iconColor: useIconStyles[themeVariant].iconColor,
    iconSize: useIconStyles.iconSize[size],
    imageSize: useIconStyles.root.imageSize,
  };
};
