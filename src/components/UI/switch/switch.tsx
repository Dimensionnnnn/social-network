import React from 'react';
import {Appearance, useColorScheme, Switch} from 'react-native';

export const CustomSwitch = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const handeChangeTheme = () =>
    Appearance.setColorScheme(isDarkMode ? 'light' : 'dark');

  return <Switch onChange={handeChangeTheme} />;
};
