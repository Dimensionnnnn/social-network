import {outfitTextStyles} from 'src/assets/styles/typography';
import {COLORS} from 'src/assets/styles/colors';
import {ButtonSize} from './default-button';
import {ColorThemes} from 'src/hooks/useColorTheme';
import {StyleSheet} from 'react-native';

export const defaultButtonStyles = {
  [ColorThemes.DARK]: {
    button: {
      pressed: {
        small: {backgroundColor: COLORS.secondary_dark_01},
        medium: {backgroundColor: COLORS.secondary_dark_01},
        large: {backgroundColor: COLORS.secondary_dark_01},
      },
      disabled: {},
      delete: {},
      small: {backgroundColor: COLORS.grayscale_dark_07},
      medium: {backgroundColor: COLORS.grayscale_dark_07},
      large: {backgroundColor: COLORS.grayscale_dark_05},
    },
    text: {
      pressed: {color: COLORS.grayscale_dark_07},
      delete: {color: COLORS.additional_error},
      disabled: {color: COLORS.grayscale_dark_04},
      small: {color: COLORS.secondary_dark_01},
      medium: {color: COLORS.secondary_dark_01},
      large: {color: COLORS.secondary_dark_01},
    },
  },
  [ColorThemes.LIGHT]: {
    button: {
      pressed: {
        small: {backgroundColor: COLORS.secondary_light_01},
        medium: {backgroundColor: COLORS.dark_mode},
        large: {backgroundColor: COLORS.secondary_light_01},
      },
      disabled: {backgroundColor: COLORS.grayscale_light_05},
      delete: {backgroundColor: COLORS.grayscale_light_07},
      small: {backgroundColor: COLORS.dark_mode},
      medium: {backgroundColor: COLORS.grayscale_light_07},
      large: {backgroundColor: COLORS.dark_mode},
    },
    text: {
      pressed: {color: COLORS.grayscale_light_07},
      delete: {color: COLORS.additional_error},
      disabled: {color: COLORS.grayscale_light_03},
      small: {color: COLORS.grayscale_light_07},
      medium: {color: COLORS.dark_mode},
      large: {color: COLORS.grayscale_light_07},
    },
  },
  sizes: {
    small: {
      maxWidth: 148,
      borderRadius: 17,
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 32,
      paddingRight: 32,
    },
    medium: {
      paddingTop: 12,
      paddingRight: 12,
      paddingBottom: 10,
      paddingLeft: 12,
      borderRadius: 15,
    },
    large: {
      paddingTop: 16,
      paddingRight: 32,
      paddingBottom: 16,
      paddingLeft: 32,
      borderRadius: 21,
    },
  },
  root: StyleSheet.create({
    fontText: outfitTextStyles.bodyRegular_18,
    container: {
      width: '100%',
      maxWidth: 343,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  }),
};

interface ButtonStylesOptions {
  themeVariant: ColorThemes;
  buttonSize: ButtonSize;
  isPressed?: boolean;
  isDisabled?: boolean;
  isDelete?: boolean;
}

export const getButtonStyles = ({
  themeVariant,
  buttonSize,
  isPressed,
  isDisabled,
  isDelete,
}: ButtonStylesOptions) => {
  return {
    container: defaultButtonStyles.root.container,
    fontText: defaultButtonStyles.root.fontText,
    sizeContainer: defaultButtonStyles.sizes[buttonSize],
    button: [
      defaultButtonStyles[themeVariant].button[buttonSize],
      isDelete && defaultButtonStyles[themeVariant].button.delete,
      isPressed && defaultButtonStyles[themeVariant].button.pressed[buttonSize],
      isDisabled && defaultButtonStyles[themeVariant].button.disabled,
    ],
    text: [
      defaultButtonStyles[themeVariant].text[buttonSize],
      isDelete && defaultButtonStyles[themeVariant].text.delete,
      isPressed && defaultButtonStyles[themeVariant].text.pressed,
      isDisabled && defaultButtonStyles[themeVariant].text.disabled,
    ],
  };
};
