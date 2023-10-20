import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {ColorThemes} from 'src/hooks/useColorTheme';

export const textIconButtonStyles = {
  dark: {
    button: StyleSheet.create({
      pressed: {backgroundColor: COLORS.secondary_dark_01},
      disabled: {backgroundColor: COLORS.grayscale_dark_04},
      initial: {backgroundColor: COLORS.grayscale_dark_05},
    }),
    content: StyleSheet.create({
      pressed: {color: COLORS.grayscale_dark_05},
      disabled: {color: COLORS.grayscale_dark_02},
      initial: {color: COLORS.grayscale_dark_01},
    }),
    icon: {
      pressed: {fill: COLORS.grayscale_dark_05},
      disabled: {fill: COLORS.grayscale_dark_02},
      initial: {fill: COLORS.grayscale_dark_01},
    },
  },
  light: {
    button: StyleSheet.create({
      pressed: {backgroundColor: COLORS.dark_mode},
      disabled: {backgroundColor: COLORS.grayscale_light_05},
      initial: {backgroundColor: COLORS.grayscale_light_05},
    }),
    content: StyleSheet.create({
      pressed: {color: COLORS.grayscale_light_01},
      disabled: {color: COLORS.grayscale_light_03},
      initial: {color: COLORS.grayscale_light_01},
    }),
    icon: {
      pressed: {fill: COLORS.grayscale_light_01},
      disabled: {fill: COLORS.grayscale_light_03},
      initial: {fill: COLORS.grayscale_light_01},
    },
  },
  root: StyleSheet.create({
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
  }),
};

export const getButtonStyleSheet = (
  themeVariant: ColorThemes,
  pressed: boolean,
  isDisabled?: boolean,
) => {
  switch (themeVariant) {
    default:
    case ColorThemes.DARK: {
      return {
        container: [textIconButtonStyles.root.container],
        button: [
          textIconButtonStyles.dark.button.initial,
          pressed && textIconButtonStyles.dark.button.pressed,
          isDisabled && textIconButtonStyles.dark.button.disabled,
        ],
        contentText: [
          textIconButtonStyles.root.text,
          textIconButtonStyles.dark.content.initial,
          pressed && textIconButtonStyles.dark.content.pressed,
          isDisabled && textIconButtonStyles.dark.content.disabled,
        ],
      };
    }
    case ColorThemes.LIGHT: {
      return {
        container: [textIconButtonStyles.root.container],
        button: [
          textIconButtonStyles.light.button.initial,
          pressed && textIconButtonStyles.light.button.pressed,
          isDisabled && textIconButtonStyles.light.button.disabled,
        ],
        contentText: [
          textIconButtonStyles.root.text,
          textIconButtonStyles.light.content.initial,
          pressed && textIconButtonStyles.light.content.pressed,
          isDisabled && textIconButtonStyles.light.content.disabled,
        ],
      };
    }
  }
};

export const getIconStyles = (
  themeVariant: ColorThemes,
  pressed: boolean,
  isDisabled?: boolean,
) => {
  switch (themeVariant) {
    default:
    case ColorThemes.DARK: {
      if (pressed) {
        return textIconButtonStyles.dark.icon.pressed;
      }
      if (isDisabled) {
        return textIconButtonStyles.dark.icon.disabled;
      }
      return textIconButtonStyles.dark.icon.initial;
    }
    case ColorThemes.LIGHT: {
      if (pressed) {
        return textIconButtonStyles.light.icon.pressed;
      }
      if (isDisabled) {
        return textIconButtonStyles.light.icon.disabled;
      }
      return textIconButtonStyles.light.icon.initial;
    }
  }
};
