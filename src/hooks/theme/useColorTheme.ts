import {useColorScheme} from 'react-native';

export enum ColorThemes {
  LIGHT = 'light',
  DARK = 'dark',
}

export const useColorTheme = () => {
  const colorScheme = useColorScheme();
  return colorScheme ?? 'light';
};
