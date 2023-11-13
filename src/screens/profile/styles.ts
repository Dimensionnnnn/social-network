import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {ColorThemes} from 'src/hooks/theme/useColorTheme';

const registrationScreenStyles = {
  [ColorThemes.DARK]: {
    containerBackground: {backgroundColor: COLORS.grayscale_dark_07},
    titleColor: {color: COLORS.secondary_dark_01},
    textColor: {color: COLORS.grayscale_dark_01},
  },
  [ColorThemes.LIGHT]: {
    containerBackground: {backgroundColor: COLORS.grayscale_light_07},
    titleColor: {color: COLORS.dark_mode},
    textColor: {color: COLORS.grayscale_light_01},
  },
  root: StyleSheet.create({
    fontTitle: outfitTextStyles.titleSemiBold_32,
    fontText: outfitTextStyles.bodyMedium_18,
    fontHeader: outfitTextStyles.headlineSemiBold_18,
    container: {
      flex: 1,
    },
    containerScroll: {
      width: '100%',
      justifyContent: 'center',
      gap: 32,
      paddingBottom: 32,
      paddingLeft: 16,
    },
    containerHeader: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 16,
      gap: 16,
    },
    containerIcons: {
      position: 'relative',
      alignItems: 'center',
      paddingRight: 16,
      width: '100%',
    },
    containerCamera: {
      width: '100%',
      bottom: 0,
      left: '60%',
      position: 'absolute',
    },
    containerText: {
      textAlign: 'center',
      width: 263,
    },
    containerTextButton: {
      width: '100%',
      maxWidth: 40,
    },
    wrapper: {
      gap: 16,
    },
  }),
};

export const getProfileStyles = (themeVariant: ColorThemes) => {
  return {
    ...registrationScreenStyles[themeVariant],
    ...registrationScreenStyles.root,
  };
};
