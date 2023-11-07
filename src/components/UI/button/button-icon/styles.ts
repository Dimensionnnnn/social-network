import {ColorThemes} from 'src/hooks/theme/useColorTheme';
import {COLORS} from 'src/assets/styles/colors';
import {StyleSheet} from 'react-native';

const iconButtonBgStyles = {
  [ColorThemes.DARK]: {
    isLiked: {color: COLORS.secondary_dark_01},
    disabled: {color: COLORS.grayscale_dark_04},
    pressed: {color: COLORS.secondary_dark_01},
    initial: {color: COLORS.grayscale_dark_01},
  },
  [ColorThemes.LIGHT]: {
    isLiked: {color: COLORS.dark_mode},
    disabled: {color: COLORS.grayscale_light_03},
    pressed: {color: COLORS.dark_mode},
    initial: {color: COLORS.grayscale_light_01},
  },
  root: StyleSheet.create({
    container: {
      width: '100%',
      maxWidth: 24,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
};

interface IconButtonStylesBgOptions {
  themeVariant: ColorThemes;
  isLiked?: boolean;
  isLikeButton?: boolean;
  isPressed?: boolean;
  isDisabled?: boolean;
}

export const getIconButtonBgStyles = ({
  themeVariant,
  isLiked,
  isLikeButton,
  isPressed,
  isDisabled,
}: IconButtonStylesBgOptions) => {
  return {
    container: iconButtonBgStyles.root.container,
    iconStyles: getIconColor({
      themeVariant,
      isLiked,
      isLikeButton,
      isPressed,
      isDisabled,
    }),
  };
};

interface IconColorOptions {
  themeVariant: ColorThemes;
  isLiked?: boolean;
  isLikeButton?: boolean;
  isPressed?: boolean;
  isDisabled?: boolean;
}

const getIconColor = ({
  themeVariant,
  isLiked,
  isLikeButton,
  isPressed,
  isDisabled,
}: IconColorOptions) => {
  if (isLikeButton) {
    if (isPressed && isLiked) {
      return iconButtonBgStyles[themeVariant].initial;
    }
    if (isLiked) {
      return iconButtonBgStyles[themeVariant].isLiked;
    }
  }
  if (isDisabled) {
    return iconButtonBgStyles[themeVariant].disabled;
  }
  if (isPressed) {
    return iconButtonBgStyles[themeVariant].pressed;
  }
  return iconButtonBgStyles[themeVariant].initial;
};
