import {ColorThemes} from 'src/hooks/useColorTheme';
import {COLORS} from 'src/assets/styles/colors';
import {StyleSheet} from 'react-native';
import {ButtonSize} from './button-icon-bg';

const iconButtonBgStyles = {
  [ColorThemes.DARK]: {
    small: {
      pressed: {
        color: COLORS.grayscale_dark_07,
        background: {backgroundColor: COLORS.secondary_dark_01},
      },
      disabled: {
        color: COLORS.grayscale_dark_07,
        background: {backgroundColor: COLORS.grayscale_dark_04},
      },
      initial: {
        color: COLORS.grayscale_dark_07,
        background: {backgroundColor: COLORS.grayscale_dark_05},
      },
    },
    medium: {
      pressed: {
        color: COLORS.secondary_dark_01,
        background: {backgroundColor: COLORS.grayscale_dark_07},
      },
      disabled: {
        color: COLORS.grayscale_dark_02,
        background: {backgroundColor: COLORS.grayscale_dark_04},
      },
      initial: {
        color: COLORS.grayscale_dark_07,
        background: {backgroundColor: COLORS.secondary_dark_01},
      },
    },
    large: {
      pressed: {
        color: COLORS.secondary_dark_01,
        background: {backgroundColor: COLORS.grayscale_dark_07},
      },
      disabled: {
        color: COLORS.grayscale_dark_02,
        background: {backgroundColor: COLORS.grayscale_dark_04},
      },
      initial: {
        color: COLORS.grayscale_dark_07,
        background: {backgroundColor: COLORS.secondary_dark_01},
      },
    },
  },
  [ColorThemes.LIGHT]: {
    small: {
      pressed: {
        color: COLORS.grayscale_light_01,
        background: {backgroundColor: COLORS.dark_mode},
      },
      disabled: {
        color: COLORS.grayscale_light_03,
        background: {backgroundColor: COLORS.grayscale_light_02},
      },
      initial: {
        color: COLORS.grayscale_light_02,
        background: {backgroundColor: COLORS.grayscale_dark_05},
      },
    },
    medium: {
      pressed: {
        color: COLORS.grayscale_light_07,
        background: {backgroundColor: COLORS.secondary_light_01},
      },
      disabled: {
        color: COLORS.grayscale_light_05,
        background: {backgroundColor: COLORS.grayscale_light_03},
      },
      initial: {
        color: COLORS.grayscale_light_07,
        background: {backgroundColor: COLORS.dark_mode},
      },
    },
    large: {
      pressed: {
        color: COLORS.grayscale_light_06,
        background: {backgroundColor: COLORS.secondary_light_01},
      },
      disabled: {
        color: COLORS.grayscale_light_03,
        background: {backgroundColor: COLORS.grayscale_light_05},
      },
      initial: {
        color: COLORS.grayscale_light_07,
        background: {backgroundColor: COLORS.dark_mode},
      },
    },
  },
  root: StyleSheet.create({
    container: {
      width: '100%',
      maxWidth: 24,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    small: {
      maxWidth: 29,
      height: 29,
      borderRadius: 20,
    },
    medium: {
      maxWidth: 38,
      height: 38,
      borderRadius: 20,
    },
    large: {
      maxWidth: 56,
      height: 56,
      borderRadius: 32,
    },
  }),
};

interface IconButtonStylesBgOptions {
  themeVariant: ColorThemes;
  buttonSize: ButtonSize;
  isPressed?: boolean;
  isDisabled?: boolean;
}

export const getIconButtonBgStyles = ({
  themeVariant,
  buttonSize,
  isPressed,
  isDisabled,
}: IconButtonStylesBgOptions) => {
  return {
    container: iconButtonBgStyles.root.container,
    sizeContainer: iconButtonBgStyles.root[buttonSize],
    iconStyles: getIconColor({
      themeVariant,
      buttonSize,
      isPressed,
      isDisabled,
    }),
  };
};

interface IconColorOptions {
  themeVariant: ColorThemes;
  buttonSize: ButtonSize;
  isPressed?: boolean;
  isDisabled?: boolean;
}

const getIconColor = ({
  themeVariant,
  buttonSize,
  isPressed,
  isDisabled,
}: IconColorOptions) => {
  if (isDisabled) {
    return iconButtonBgStyles[themeVariant][buttonSize].disabled;
  }
  if (isPressed) {
    return iconButtonBgStyles[themeVariant][buttonSize].pressed;
  }
  return iconButtonBgStyles[themeVariant][buttonSize].initial;
};
