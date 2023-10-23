import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {ColorThemes} from 'src/hooks/useColorTheme';

export const textIconButtonStyles = {
  [ColorThemes.DARK]: {
    button: {
      pressed: {backgroundColor: COLORS.secondary_dark_01},
      disabled: {backgroundColor: COLORS.grayscale_dark_04},
      initial: {backgroundColor: COLORS.grayscale_dark_05},
    },
    textColor: {
      pressed: {color: COLORS.grayscale_dark_05},
      disabled: {color: COLORS.grayscale_dark_02},
      initial: {color: COLORS.grayscale_dark_01},
    },
    iconColor: {
      pressed: COLORS.grayscale_dark_05,
      disabled: COLORS.grayscale_dark_02,
      initial: COLORS.grayscale_dark_01,
    },
  },
  [ColorThemes.LIGHT]: {
    button: {
      pressed: {backgroundColor: COLORS.dark_mode},
      disabled: {backgroundColor: COLORS.grayscale_light_05},
      initial: {backgroundColor: COLORS.grayscale_light_05},
    },
    textColor: {
      pressed: {color: COLORS.grayscale_light_01},
      disabled: {color: COLORS.grayscale_light_03},
      initial: {color: COLORS.grayscale_light_01},
    },
    iconColor: {
      pressed: COLORS.grayscale_light_01,
      disabled: COLORS.grayscale_light_03,
      initial: COLORS.grayscale_light_01,
    },
  },
  root: StyleSheet.create({
    fontText: outfitTextStyles.bodyRegular_18,
    container: {
      width: '100%',
      maxWidth: 343,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: 8,
      paddingTop: 12,
      paddingRight: 16,
      paddingBottom: 12,
      paddingLeft: 16,
    },
  }),
};

export const getButtonStyles = (
  themeVariant: ColorThemes,
  pressed: boolean,
  isDisabled?: boolean,
) => {
  return {
    container: textIconButtonStyles.root.container,
    fontText: textIconButtonStyles.root.fontText,
    button: [
      textIconButtonStyles[themeVariant].button.initial,
      pressed && textIconButtonStyles[themeVariant].button.pressed,
      isDisabled && textIconButtonStyles[themeVariant].button.disabled,
    ],
    textColor: [
      textIconButtonStyles[themeVariant].textColor.initial,
      pressed && textIconButtonStyles[themeVariant].textColor.pressed,
      isDisabled && textIconButtonStyles[themeVariant].textColor.disabled,
    ],
    iconColor: pressed
      ? textIconButtonStyles[themeVariant].iconColor.pressed
      : isDisabled
      ? textIconButtonStyles[themeVariant].iconColor.disabled
      : textIconButtonStyles[themeVariant].iconColor.initial,
  };
};
