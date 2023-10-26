import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {ColorThemes} from 'src/hooks/useColorTheme';

export const radioButtonStyles = {
  [ColorThemes.DARK]: {
    containerColor: {
      checked: {
        borderColor: COLORS.grayscale_dark_05,
        backgroundColor: COLORS.grayscale_dark_06,
      },
      initial: {borderColor: COLORS.grayscale_dark_04},
    },
    checkedColor: {backgroundColor: COLORS.secondary_dark_01},
    labelColor: {color: COLORS.grayscale_dark_01},
  },
  [ColorThemes.LIGHT]: {
    containerColor: {
      checked: {
        borderColor: COLORS.grayscale_light_05,
        backgroundColor: COLORS.grayscale_light_05,
      },
      initial: {borderColor: COLORS.grayscale_light_02},
    },
    checkedColor: {backgroundColor: COLORS.secondary_light_01},
    labelColor: {color: COLORS.grayscale_light_01},
  },
  root: StyleSheet.create({
    container: {
      height: 20,
      width: '100%',
      maxWidth: 20,
      borderRadius: 24,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    checkedContainer: {
      height: 8,
      width: '100%',
      maxWidth: 8,
      borderRadius: 26,
    },
    radioButtonContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      gap: 8,
    },
    fontText: outfitTextStyles.bodyRegular_16,
  }),
};

export const getRadioButtonStyles = (
  themeVariant: ColorThemes,
  isChecked: boolean,
) => {
  return {
    container: radioButtonStyles.root.container,
    containerColor: isChecked
      ? radioButtonStyles[themeVariant].containerColor.checked
      : radioButtonStyles[themeVariant].containerColor.initial,
    checkedContainer: radioButtonStyles.root.checkedContainer,
    radioButtonContainer: radioButtonStyles.root.radioButtonContainer,
    labelColor: radioButtonStyles[themeVariant].labelColor,
    fontText: radioButtonStyles.root.fontText,
    checkedColor: isChecked && radioButtonStyles[themeVariant].checkedColor,
  };
};
