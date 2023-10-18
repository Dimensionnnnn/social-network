import {COLORS} from 'src/assets/styles/colors';

export const THEMES = {
  dark: {
    defaultButton: {
      pressed: {
        small: {backgroundColor: COLORS.secondaryDark.secondary_01},
        medium: {backgroundColor: COLORS.secondaryDark.secondary_01},
        large: {backgroundColor: COLORS.secondaryDark.secondary_01},
      },
      disabled: {},
      delete: {},
      small: {
        backgroundColor: COLORS.grayscaleDark.grayscale_07,
      },
      medium: {
        backgroundColor: COLORS.grayscaleDark.grayscale_07,
      },
      large: {
        backgroundColor: COLORS.grayscaleDark.grayscale_05,
      },
    },
    defaultButtonText: {
      pressed: {color: COLORS.grayscaleDark.grayscale_07},
      delete: {color: COLORS.additionalError.error},
      disabled: {color: COLORS.grayscaleDark.grayscale_04},
      small: {color: COLORS.secondaryDark.secondary_01},
      medium: {color: COLORS.secondaryDark.secondary_01},
      large: {color: COLORS.secondaryDark.secondary_01},
    },
  },
  light: {
    defaultButton: {
      pressed: {
        small: {backgroundColor: COLORS.secondaryLight.secondary_01},
        medium: {backgroundColor: COLORS.darkMode.darkMode},
        large: {backgroundColor: COLORS.secondaryLight.secondary_01},
      },
      disabled: {
        backgroundColor: COLORS.grayscaleLight.grayscale_05,
      },
      delete: {
        backgroundColor: COLORS.grayscaleLight.grayscale_07,
      },
      small: {
        backgroundColor: COLORS.darkMode.darkMode,
      },
      medium: {
        backgroundColor: COLORS.grayscaleLight.grayscale_07,
      },
      large: {
        backgroundColor: COLORS.darkMode.darkMode,
      },
    },
    defaultButtonText: {
      pressed: {color: COLORS.grayscaleLight.grayscale_07},
      delete: {color: COLORS.additionalError.error},
      disabled: {color: COLORS.grayscaleLight.grayscale_03},
      small: {color: COLORS.grayscaleLight.grayscale_07},
      medium: {color: COLORS.darkMode.darkMode},
      large: {color: COLORS.grayscaleLight.grayscale_07},
    },
  },
};
