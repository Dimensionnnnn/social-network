import {ColorThemes} from 'src/hooks/useColorTheme';
import {COLORS} from 'src/assets/styles/colors';
import {StyleSheet} from 'react-native';
import {ButtonSize} from './button-icon';

export const iconButtonStyles = {
  [ColorThemes.DARK]: {
    icon: {
      defaultIcon: {
        pressed: COLORS.secondary_dark_01,
        disabled: COLORS.grayscale_dark_04,
        initial: COLORS.grayscale_dark_01,
      },
      closedIcon: {
        pressed: COLORS.grayscale_dark_07,
        disabled: COLORS.grayscale_dark_07,
        initial: COLORS.grayscale_dark_01,
      },
      small: {
        pressed: {
          color: COLORS.grayscale_dark_07,
          backgroundColor: COLORS.secondary_dark_01,
        },
        disabled: {
          color: COLORS.grayscale_dark_07,
          backgroundColor: COLORS.grayscale_dark_04,
        },
        initial: {
          color: COLORS.grayscale_dark_07,
          backgroundColor: COLORS.grayscale_dark_05,
        },
      },
      medium: {
        pressed: {
          color: COLORS.secondary_dark_01,
          backgroundColor: COLORS.grayscale_dark_07,
        },
        disabled: {
          color: COLORS.grayscale_dark_02,
          backgroundColor: COLORS.grayscale_dark_04,
        },
        initial: {
          color: COLORS.grayscale_dark_07,
          backgroundColor: COLORS.secondary_dark_01,
        },
      },
      large: {
        pressed: {
          color: COLORS.secondary_dark_01,
          backgroundColor: COLORS.grayscale_dark_07,
        },
        disabled: {
          color: COLORS.grayscale_dark_02,
          backgroundColor: COLORS.grayscale_dark_04,
        },
        initial: {
          color: COLORS.grayscale_dark_07,
          backgroundColor: COLORS.secondary_dark_01,
        },
      },
    },
  },
  [ColorThemes.LIGHT]: {
    icon: {
      defaultIcon: {
        pressed: COLORS.dark_mode,
        disabled: COLORS.grayscale_light_03,
        initial: COLORS.grayscale_light_01,
      },
      closedIcon: {
        pressed: COLORS.dark_mode,
        disabled: COLORS.grayscale_light_07,
        initial: COLORS.grayscale_light_01,
      },
      small: {
        pressed: {
          color: COLORS.grayscale_light_01,
          backgroundColor: COLORS.dark_mode,
        },
        disabled: {
          color: COLORS.grayscale_light_03,
          backgroundColor: COLORS.grayscale_light_02,
        },
        initial: {
          color: COLORS.grayscale_light_02,
          backgroundColor: COLORS.grayscale_dark_05,
        },
      },
      medium: {
        pressed: {
          color: COLORS.grayscale_light_07,
          backgroundColor: COLORS.secondary_light_01,
        },
        disabled: {
          color: COLORS.grayscale_light_05,
          backgroundColor: COLORS.grayscale_light_03,
        },
        initial: {
          color: COLORS.grayscale_light_07,
          backgroundColor: COLORS.dark_mode,
        },
      },
      large: {
        pressed: {
          color: COLORS.grayscale_light_06,
          backgroundColor: COLORS.secondary_light_01,
        },
        disabled: {
          color: COLORS.grayscale_light_03,
          backgroundColor: COLORS.grayscale_light_05,
        },
        initial: {
          color: COLORS.grayscale_light_07,
          backgroundColor: COLORS.dark_mode,
        },
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

interface IconButtonStylesOptions {
  themeVariant: ColorThemes;
  buttonSize?: ButtonSize;
  isDefaultIcon: boolean;
  isPressed?: boolean;
  isDisabled?: boolean;
}

interface IconStylesStateOptions {
  isDisabled?: boolean;
  isPressed?: boolean;
  styles: {
    pressed: {
      color: string;
      backgroundColor: string;
    };
    disabled: {
      color: string;
      backgroundColor: string;
    };
    initial: {
      color: string;
      backgroundColor: string;
    };
  };
}

const getIconColorByState = ({
  isDisabled,
  isPressed,
  styles,
}: IconStylesStateOptions) => {
  if (isDisabled) {
    return styles.disabled;
  }
  if (isPressed) {
    return styles.pressed;
  }
  return styles.initial;
};

const getIconColor = ({
  themeVariant,
  buttonSize,
  isDefaultIcon,
  isPressed,
  isDisabled,
}: IconButtonStylesOptions) => {
  const iconColor = iconButtonStyles[themeVariant].icon;

  if (buttonSize) {
    return getIconColorByState({
      isDisabled,
      isPressed,
      styles: iconColor[buttonSize],
    }).color;
  }

  if (isDefaultIcon) {
    return getIconColorByState({
      isDisabled,
      isPressed,
      styles: iconColor.defaultIcon,
    });
  }

  return getIconColorByState({
    isDisabled,
    isPressed,
    styles: iconColor.closedIcon,
  });
};

export const getIconButtonStyles = ({
  themeVariant,
  buttonSize,
  isDefaultIcon,
  isPressed,
  isDisabled,
}: IconButtonStylesOptions) => {
  return {
    container: iconButtonStyles.root.container,
    sizeContainer: buttonSize && iconButtonStyles.root[buttonSize],
    buttonBackground:
      buttonSize &&
      getIconColorByState({
        isDisabled,
        isPressed,
        styles: iconButtonStyles[themeVariant].icon[buttonSize],
      }),
    iconColor: getIconColor({
      themeVariant,
      buttonSize,
      isDefaultIcon,
      isPressed,
      isDisabled,
    }),
  };
};
