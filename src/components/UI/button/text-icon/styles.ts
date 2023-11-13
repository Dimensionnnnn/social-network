import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {ColorThemes} from 'src/hooks/theme/useColorTheme';

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
    spinnerColor: COLORS.secondary_dark_01,
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
    spinnerColor: COLORS.secondary_light_01,
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
    spinnerContainer: {
      justifyContent: 'center',
    },
  }),
};

interface IconButtonStylesOptions {
  themeVariant: ColorThemes;
  isPressed?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export const getButtonStyles = ({
  themeVariant,
  isPressed,
  isDisabled,
  isLoading,
}: IconButtonStylesOptions) => {
  return {
    container: textIconButtonStyles.root.container,
    fontText: textIconButtonStyles.root.fontText,
    button: [
      textIconButtonStyles[themeVariant].button.initial,
      isPressed && textIconButtonStyles[themeVariant].button.pressed,
      isDisabled && textIconButtonStyles[themeVariant].button.disabled,
    ],
    textColor: [
      textIconButtonStyles[themeVariant].textColor.initial,
      isPressed && textIconButtonStyles[themeVariant].textColor.pressed,
      isDisabled && textIconButtonStyles[themeVariant].textColor.disabled,
    ],
    iconColor: isPressed
      ? textIconButtonStyles[themeVariant].iconColor.pressed
      : isDisabled
      ? textIconButtonStyles[themeVariant].iconColor.disabled
      : textIconButtonStyles[themeVariant].iconColor.initial,
    spinnerColor: isLoading && textIconButtonStyles[themeVariant].spinnerColor,
    spinnerContainer: isLoading && textIconButtonStyles.root.spinnerContainer,
  };
};
