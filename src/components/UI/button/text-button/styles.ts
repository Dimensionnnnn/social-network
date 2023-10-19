import {outfitTextStyles} from 'src/assets/styles/typography';
import {COLORS} from 'src/assets/styles/colors';
import {ColorThemes} from 'src/hooks/useColorTheme';
import {StyleSheet} from 'react-native';

export const textButtonStyles = StyleSheet.create({
  darkPressed: {color: COLORS.primary_light_02},
  darkDisabled: {color: COLORS.grayscale_dark_04},
  darkInitial: {color: COLORS.secondary_dark_01},
  lightPressed: {color: COLORS.secondary_light_01},
  lightDisabled: {color: COLORS.grayscale_light_05},
  lightInitial: {color: COLORS.dark_mode},
  text: outfitTextStyles.bodyMedium_16,
  container: {
    width: '100%',
    maxWidth: 39,
    backgroundColor: 'initial',
  },
});

const borderLineButtonStyles = StyleSheet.create({
  darkPresed: {backgroundColor: COLORS.primary_light_02},
  darkDisabled: {backgroundColor: COLORS.grayscale_dark_04},
  darkInitial: {backgroundColor: COLORS.secondary_dark_01},
  lightPressed: {backgroundColor: COLORS.secondary_light_01},
  lightDisabled: {backgroundColor: COLORS.grayscale_light_05},
  lightInitial: {backgroundColor: COLORS.dark_mode},
  borderLine: {height: 1},
});

export const getButtonStyleSheet = (
  themeVariant: ColorThemes,
  pressed: boolean,
  isDisabled?: boolean,
) => {
  switch (themeVariant) {
    default:
    case ColorThemes.DARK: {
      return {
        textStyle: [
          textButtonStyles.darkInitial,
          pressed && textButtonStyles.darkPressed,
          isDisabled && textButtonStyles.darkDisabled,
          textButtonStyles.text,
        ],
        borderLineStyle: [
          borderLineButtonStyles.darkInitial,
          pressed && borderLineButtonStyles.darkPresed,
          isDisabled && borderLineButtonStyles.darkDisabled,
          borderLineButtonStyles.borderLine,
        ],
      };
    }
    case ColorThemes.LIGHT: {
      return {
        textStyle: [
          textButtonStyles.lightInitial,
          pressed && textButtonStyles.lightPressed,
          isDisabled && textButtonStyles.lightDisabled,
          textButtonStyles.text,
        ],
        borderLineStyle: [
          borderLineButtonStyles.lightInitial,
          pressed && borderLineButtonStyles.lightPressed,
          isDisabled && borderLineButtonStyles.lightDisabled,
          borderLineButtonStyles.borderLine,
        ],
      };
    }
  }
};
