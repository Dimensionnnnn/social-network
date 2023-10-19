import {COLORS} from 'src/assets/styles/colors';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {ColorThemes} from 'src/hooks/useColorTheme';

export const textIconButtonStyles = {
  dark: {
    button: {
      pressed: {backgroundColor: COLORS.secondary_dark_01},
      disabled: {backgroundColor: COLORS.grayscale_dark_04},
      initial: {backgroundColor: COLORS.grayscale_dark_05},
    },
    text: {
      pressed: {color: COLORS.grayscale_dark_05},
      disabled: {color: COLORS.grayscale_dark_02},
      initial: {color: COLORS.grayscale_dark_01},
    },
    icon: {
      pressed: {fill: COLORS.grayscale_dark_05},
      disabled: {fill: COLORS.grayscale_dark_02},
      initial: {fill: COLORS.grayscale_dark_01},
    },
  },
  light: {
    button: {
      pressed: {backgroundColor: COLORS.dark_mode},
      disabled: {backgroundColor: COLORS.grayscale_light_05},
      initial: {backgroundColor: COLORS.grayscale_light_05},
    },
    text: {
      pressed: {color: COLORS.grayscale_light_01},
      disabled: {color: COLORS.grayscale_light_03},
      initial: {color: COLORS.grayscale_light_01},
    },
    icon: {
      pressed: {fill: COLORS.grayscale_light_01},
      disabled: {fill: COLORS.grayscale_light_03},
      initial: {fill: COLORS.grayscale_light_01},
    },
  },
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
  text: outfitTextStyles.bodyRegular_18,
};

export enum ButtonElement {
  button = 'button',
  text = 'text',
  icon = 'icon',
}

export const getButtonStyles = (
  themeVariant: ColorThemes,
  type: ButtonElement,
  pressed: boolean,
  isDisabled?: boolean,
) => {
  const theme = textIconButtonStyles[themeVariant];
  const baseStyles = theme[type].initial;

  const specificStyles = {
    disabled: isDisabled && theme[type].disabled,
    pressed: pressed && theme[type].pressed,
  };
  return [baseStyles, specificStyles.disabled, specificStyles.pressed];
};

export const getIconColor = (
  themeVariant: ColorThemes,
  pressed: boolean,
  isDisabled?: boolean,
) => {
  const theme = textIconButtonStyles[themeVariant];
  const baseStyles = theme.icon.initial;

  if (isDisabled) {
    return theme.icon.disabled;
  } else if (pressed) {
    return theme.icon.pressed;
  }

  return baseStyles;
};
