import {outfitTextStyles} from 'src/assets/styles/typography';
import {COLORS} from 'src/assets/styles/colors';
import {ButtonSize} from './default-button';

export const THEMES = {
  dark: {
    defaultButton: {
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
    defaultButtonText: {
      pressed: {color: COLORS.grayscale_dark_07},
      delete: {color: COLORS.additional_error},
      disabled: {color: COLORS.grayscale_dark_04},
      small: {color: COLORS.secondary_dark_01},
      medium: {color: COLORS.secondary_dark_01},
      large: {color: COLORS.secondary_dark_01},
    },
  },
  light: {
    defaultButton: {
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
    defaultButtonText: {
      pressed: {color: COLORS.grayscale_light_07},
      delete: {color: COLORS.additional_error},
      disabled: {color: COLORS.grayscale_light_03},
      small: {color: COLORS.grayscale_light_07},
      medium: {color: COLORS.dark_mode},
      large: {color: COLORS.grayscale_light_07},
    },
  },
};

export const CONTAINER = {
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
};

export const TEXT = {
  text: outfitTextStyles.bodyMedium_16,
};

export const getButtonThemeStyles = (
  pressed: boolean,
  stylesThemes: (typeof THEMES)[keyof typeof THEMES],
  buttonSize: ButtonSize,
  isDelete?: boolean,
  isDisabled?: boolean,
) => [
  stylesThemes.defaultButton[buttonSize],
  isDelete && stylesThemes.defaultButton.delete,
  isDisabled && stylesThemes.defaultButton.disabled,
  pressed && stylesThemes.defaultButton.pressed,
  pressed && stylesThemes.defaultButton.pressed[buttonSize],
];

export const getButtonTextStyles = (
  pressed: boolean,
  stylesThemes: (typeof THEMES)[keyof typeof THEMES],
  buttonSize: ButtonSize,
  isDelete?: boolean,
  isDisabled?: boolean,
) => [
  stylesThemes.defaultButtonText[buttonSize],
  isDelete && stylesThemes.defaultButtonText.delete,
  isDisabled && stylesThemes.defaultButtonText.disabled,
  pressed && stylesThemes.defaultButtonText.pressed,
];
