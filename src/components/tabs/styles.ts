import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/styles/colors';
import {outfitTextStyles} from 'src/assets/styles/typography';
import {ColorThemes} from 'src/hooks/theme/useColorTheme';

export const tabsStyles = {
  [ColorThemes.DARK]: {
    containerColor: {
      active: {backgroundColor: COLORS.secondary_dark_01},
      initial: {backgroundColor: COLORS.grayscale_dark_05},
    },
    textColor: {
      active: COLORS.grayscale_dark_07,
      initial: COLORS.grayscale_dark_01,
    },
    indicatorColor: {
      active: {backgroundColor: COLORS.secondary_dark_01},
      initial: {backgroundColor: COLORS.grayscale_dark_05},
    },
    tabsContainerBgColor: {backgroundColor: COLORS.grayscale_dark_07},
  },
  [ColorThemes.LIGHT]: {
    containerColor: {
      active: {backgroundColor: COLORS.dark_mode},
      initial: {backgroundColor: COLORS.grayscale_light_06},
    },
    textColor: {
      active: COLORS.grayscale_light_07,
      initial: COLORS.grayscale_light_01,
    },
    indicatorColor: {
      active: {backgroundColor: COLORS.dark_mode},
      initial: {backgroundColor: COLORS.grayscale_light_06},
    },
    tabsContainerBgColor: {backgroundColor: COLORS.grayscale_light_07},
  },
  root: StyleSheet.create({
    fontText: outfitTextStyles.bodyRegular_18,
    tabsContainer: {
      flex: 1,
      width: '100%',
    },
    container: {
      height: 47,
      width: '100%',
      maxWidth: 343,
      elevation: 0,
      alignSelf: 'center',
      backgroundColor: 'transparent',
      marginBottom: 40,
    },
    containerItem: {
      maxWidth: 171.5,
    },
    containerIndicator: {
      borderRadius: 16,
    },
    indicatorStyles: {
      height: '100%',
    },
    indicatorItemLeft: {
      borderTopLeftRadius: 16,
      borderBottomLeftRadius: 16,
    },
    indicatorItemRight: {
      borderTopRightRadius: 16,
      borderBottomRightRadius: 16,
    },
  }),
};

export const getTabsStyles = (themeVariant: ColorThemes) => {
  return {
    container: tabsStyles.root.container,
    containerColor: {
      active: tabsStyles[themeVariant].containerColor.active,
      initial: tabsStyles[themeVariant].containerColor.initial,
    },
    containerItem: tabsStyles.root.containerItem,
    containerIndicator: [
      tabsStyles.root.containerIndicator,
      tabsStyles[themeVariant].indicatorColor.initial,
    ],
    tabsContainer: tabsStyles.root.tabsContainer,
    indicatorStyles: {
      styles: tabsStyles.root.indicatorStyles,
      itemLeft: tabsStyles.root.indicatorItemLeft,
      itemRight: tabsStyles.root.indicatorItemRight,
      backgroundColor: tabsStyles[themeVariant].indicatorColor.active,
    },
    fontText: tabsStyles.root.fontText,
    textColor: {
      active: tabsStyles[themeVariant].textColor.active,
      initial: tabsStyles[themeVariant].textColor.initial,
    },
    tabsContainerBgColor: tabsStyles[themeVariant].tabsContainerBgColor,
  };
};
