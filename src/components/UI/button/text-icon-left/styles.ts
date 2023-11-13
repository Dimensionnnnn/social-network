import {outfitTextStyles} from 'src/assets/styles/typography';
import {COLORS} from 'src/assets/styles/colors';
import {ColorThemes} from 'src/hooks/theme/useColorTheme';
import {StyleSheet} from 'react-native';

export const textIconLeftButtonStyles = {
  [ColorThemes.DARK]: {
    textColor: {
      pressed: {color: COLORS.secondary_dark_01},
      disabled: {color: COLORS.grayscale_dark_04},
      initial: {color: COLORS.grayscale_dark_01},
    },
    iconColor: {
      pressed: COLORS.secondary_dark_01,
      disabled: COLORS.grayscale_dark_04,
      initial: COLORS.grayscale_dark_01,
    },
  },
  [ColorThemes.LIGHT]: {
    textColor: {
      pressed: {color: COLORS.secondary_light_01},
      disabled: {color: COLORS.grayscale_light_05},
      initial: {color: COLORS.grayscale_light_01},
    },
    iconColor: {
      pressed: COLORS.secondary_light_01,
      disabled: COLORS.grayscale_light_05,
      initial: COLORS.grayscale_light_01,
    },
  },
  root: StyleSheet.create({
    fontText: outfitTextStyles.bodyRegular_18,
    container: {
      width: '100%',
      maxWidth: 131,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  }),
};

export const getButtonStyles = (
  themeVariant: ColorThemes,
  pressed?: boolean,
  isDisabled?: boolean,
) => {
  return {
    container: textIconLeftButtonStyles.root.container,
    font: textIconLeftButtonStyles.root.fontText,
    text: [
      textIconLeftButtonStyles[themeVariant].textColor.initial,
      pressed && textIconLeftButtonStyles[themeVariant].textColor.pressed,
      isDisabled && textIconLeftButtonStyles[themeVariant].textColor.disabled,
    ],
    iconColor: pressed
      ? textIconLeftButtonStyles[themeVariant].iconColor.pressed
      : isDisabled
      ? textIconLeftButtonStyles[themeVariant].iconColor.disabled
      : textIconLeftButtonStyles[themeVariant].iconColor.initial,
  };
};
