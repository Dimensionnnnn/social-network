import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {ColorThemes} from 'src/hooks/theme/useColorTheme';

export const dateTimePickerStyles = {
  [ColorThemes.DARK]: {
    filled: {
      color: COLORS.grayscale_dark_01,
      borderColor: COLORS.grayscale_dark_01,
    },
    initial: {
      color: COLORS.grayscale_dark_04,
      borderBottomWidth: 1.5,
      borderColor: COLORS.grayscale_dark_04,
    },
    error: {
      color: COLORS.additional_error,
      borderColor: COLORS.additional_error,
    },
  },
  [ColorThemes.LIGHT]: {
    filled: {
      color: COLORS.grayscale_light_01,
      borderColor: COLORS.grayscale_light_01,
    },
    initial: {
      color: COLORS.grayscale_light_03,
      borderBottomWidth: 1.5,
      borderColor: COLORS.grayscale_light_03,
    },
    error: {
      color: COLORS.additional_error,
      borderColor: COLORS.additional_error,
    },
  },
  label: {color: COLORS.grayscale_dark_03},
  root: StyleSheet.create({
    fontText: outfitTextStyles.bodyRegular_16,
    fontLabel: outfitTextStyles.headlineSemiBold_14,
    fontError: outfitTextStyles.bodyRegular_14,
    container: {
      width: '100%',
      maxWidth: 343,
      position: 'relative',
    },
    containerValue: {
      paddingTop: 12,
      paddingBottom: 16,
    },
    containerError: {
      color: COLORS.additional_error,
      paddingTop: 4,
      paddingBottom: 4,
      width: '100%',
      maxWidth: 343,
    },
  }),
};

interface Props {
  themeVariant: ColorThemes;
  isFilled?: boolean;
  isError?: boolean;
}

export const getDateTimePickerStyles = ({
  themeVariant,
  isFilled,
  isError,
}: Props) => {
  return {
    ...dateTimePickerStyles.root,
    labelColor: dateTimePickerStyles.label,
    textColor: [
      dateTimePickerStyles[themeVariant].initial,
      isFilled && dateTimePickerStyles[themeVariant].filled,
      isError && dateTimePickerStyles[themeVariant].error,
    ],
  };
};
