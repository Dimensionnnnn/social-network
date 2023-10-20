import {outfitTextStyles} from 'src/assets/styles/typography';
import {COLORS} from 'src/assets/styles/colors';
import {ColorThemes} from 'src/hooks/useColorTheme';
import {StyleSheet} from 'react-native';

export const textIconLeftButtonStyles = {
  dark: {
    text: StyleSheet.create({
      pressed: {color: COLORS.secondary_dark_01},
      disabled: {color: COLORS.grayscale_dark_04},
      initial: {color: COLORS.grayscale_dark_01},
    }),
    icon: {
      pressed: {fill: COLORS.secondary_dark_01},
      disabled: {fill: COLORS.grayscale_dark_04},
      initial: {fill: COLORS.grayscale_dark_01},
    },
  },
  light: {
    text: StyleSheet.create({
      pressed: {color: COLORS.secondary_light_01},
      disabled: {color: COLORS.grayscale_light_05},
      initial: {color: COLORS.grayscale_light_01},
    }),
    icon: {
      pressed: {fill: COLORS.secondary_light_01},
      disabled: {fill: COLORS.grayscale_light_05},
      initial: {fill: COLORS.grayscale_light_01},
    },
  },
  root: StyleSheet.create({
    container: {
      width: '100%',
      maxWidth: 131,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    font: outfitTextStyles.bodyRegular_18,
  }),
};

export const getButtonStyleSheet = (
  themeVariant: ColorThemes,
  pressed: boolean,
  isDisabled?: boolean,
) => {
  switch (themeVariant) {
    default:
    case ColorThemes.DARK:
      return {
        container: [textIconLeftButtonStyles.root.container],
        font: textIconLeftButtonStyles.root.font,
        text: [
          textIconLeftButtonStyles.dark.text.initial,
          pressed && textIconLeftButtonStyles.dark.text.pressed,
          isDisabled && textIconLeftButtonStyles.dark.text.disabled,
        ],
      };
    case ColorThemes.LIGHT:
      return {
        container: [textIconLeftButtonStyles.root.container],
        font: textIconLeftButtonStyles.root.font,
        text: [
          textIconLeftButtonStyles.light.text.initial,
          pressed && textIconLeftButtonStyles.light.text.pressed,
          isDisabled && textIconLeftButtonStyles.light.text.disabled,
        ],
      };
  }
};

export const getIconColor = (
  themeVariant: ColorThemes,
  pressed: boolean,
  isDisabled?: boolean,
) => {
  switch (themeVariant) {
    default:
    case ColorThemes.DARK: {
      if (pressed) {
        return textIconLeftButtonStyles.dark.icon.pressed;
      }
      if (isDisabled) {
        return textIconLeftButtonStyles.dark.icon.disabled;
      }
      return textIconLeftButtonStyles.dark.icon.initial;
    }
    case ColorThemes.LIGHT: {
      if (pressed) {
        return textIconLeftButtonStyles.light.icon.pressed;
      }
      if (isDisabled) {
        return textIconLeftButtonStyles.light.icon.disabled;
      }
      return textIconLeftButtonStyles.light.icon.initial;
    }
  }
};
