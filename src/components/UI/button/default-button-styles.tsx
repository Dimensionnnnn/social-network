import {outfitTextStyles} from 'src/assets/styles/typography';
import {COLORS} from 'src/assets/styles/colors';
import {ButtonSize} from './default-button';
import {ColorThemes} from 'hooks/useColorTheme';

export const defaultButtonStyles = {
  dark: {
    button: {
      pressed: {
        small: {backgroundColor: COLORS.secondary_dark_01},
        medium: {backgroundColor: COLORS.secondary_dark_01},
        large: {backgroundColor: COLORS.secondary_dark_01},
      },
      disabled: {},
      delete: {},
      small: {
        backgroundColor: COLORS.grayscale_dark_07,
      },
      medium: {
        backgroundColor: COLORS.grayscale_dark_07,
      },
      large: {
        backgroundColor: COLORS.grayscale_dark_05,
      },
    },
    text: {
      pressed: {
        small: {color: COLORS.grayscale_dark_07},
        medium: {color: COLORS.grayscale_dark_07},
        large: {color: COLORS.grayscale_dark_07},
      },
      delete: {color: COLORS.additional_error},
      disabled: {color: COLORS.grayscale_dark_04},
      small: {color: COLORS.secondary_dark_01},
      medium: {color: COLORS.secondary_dark_01},
      large: {color: COLORS.secondary_dark_01},
    },
  },
  light: {
    button: {
      pressed: {
        small: {backgroundColor: COLORS.secondary_light_01},
        medium: {backgroundColor: COLORS.dark_mode},
        large: {backgroundColor: COLORS.secondary_light_01},
      },
      disabled: {
        backgroundColor: COLORS.grayscale_light_05,
      },
      delete: {
        backgroundColor: COLORS.grayscale_light_07,
      },
      small: {
        backgroundColor: COLORS.dark_mode,
      },
      medium: {
        backgroundColor: COLORS.grayscale_light_07,
      },
      large: {
        backgroundColor: COLORS.dark_mode,
      },
    },
    text: {
      pressed: {
        small: {color: COLORS.grayscale_light_07},
        medium: {color: COLORS.grayscale_light_07},
        large: {color: COLORS.grayscale_light_07},
      },
      delete: {color: COLORS.additional_error},
      disabled: {color: COLORS.grayscale_light_03},
      small: {color: COLORS.grayscale_light_07},
      medium: {color: COLORS.dark_mode},
      large: {color: COLORS.grayscale_light_07},
    },
  },
  container: {
    width: '100%',
    maxWidth: 343,
    alignItems: 'center',
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
  text: outfitTextStyles.bodyMedium_16,
};

export enum ButtonType {
  button = 'button',
  text = 'text',
}

export const getButtonStyles = (
  themeVariant: ColorThemes,
  type: ButtonType,
  pressed: boolean,
  buttonSize: ButtonSize,
  isDelete?: boolean,
  isDisabled?: boolean,
) => {
  const theme = defaultButtonStyles[themeVariant];

  const baseStyles = theme[type][buttonSize];

  const specificStyles = {
    delete: isDelete && theme[type].delete,
    disabled: isDisabled && theme[type].disabled,
    pressed: pressed && theme[type].pressed[buttonSize],
  };

  return [
    baseStyles,
    specificStyles.delete,
    specificStyles.disabled,
    specificStyles.pressed,
  ];
};
