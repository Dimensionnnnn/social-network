import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {
  UserIcon,
  UserIconSize,
} from 'src/components/UI/button/user-icon/user-icon';
import {useAuth} from 'src/hooks/authentication/useAuth';
import {SvgUserIcon} from 'src/shared/icons/components/user-icon';
import {SvgExit} from 'src/shared/icons/components/exit-svg';
import {SvgLightTheme} from 'src/shared/icons/components/light-theme-svg';
import {SvgDarkTheme} from 'src/shared/icons/components/dark-theme-svg';
import {Text, View} from 'react-native';
import {ColorThemes, useColorTheme} from 'src/hooks/theme/useColorTheme';
import {getDrawerContentStyles} from './styles';
import {SvgProps} from 'react-native-svg';
import {Appearance, useColorScheme} from 'react-native';

const DrawerItemIcon = (
  Icon: (props: SvgProps) => JSX.Element,
  color: string,
) => {
  return <Icon color={color} />;
};

export const DrawerContent = (props: DrawerContentComponentProps) => {
  const themeVariant: ColorThemes = useColorTheme();
  const isDarkMode = useColorScheme() === 'dark';
  const {logout} = useAuth();

  const styles = getDrawerContentStyles(themeVariant);

  const handleToggleTheme = () => {
    Appearance.setColorScheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
      style={styles.containerBackgroundColor}>
      <DrawerItemList {...props} />
      <View>
        <View style={styles.userContainer}>
          <UserIcon size={UserIconSize.MEDIUM} />
          <Text style={[styles.fontUserName, styles.colorText]}>John Moor</Text>
        </View>
        <DrawerItem
          label="Profile"
          icon={() => DrawerItemIcon(SvgUserIcon, styles.colorIcon)}
          onPress={() => {
            console.log('profile');
          }}
          labelStyle={[
            styles.itemLabel,
            styles.fontItemLabel,
            styles.colorText,
          ]}
        />
        <DrawerItem
          label="Exit"
          icon={() => DrawerItemIcon(SvgExit, styles.colorIcon)}
          onPress={logout}
          labelStyle={[
            styles.itemLabel,
            styles.fontItemLabel,
            styles.colorText,
          ]}
        />
      </View>
      {isDarkMode ? (
        <DrawerItem
          label="Night theme"
          icon={() => DrawerItemIcon(SvgDarkTheme, styles.colorIcon)}
          onPress={() => handleToggleTheme()}
          labelStyle={[
            styles.itemLabel,
            styles.fontItemLabel,
            styles.colorText,
          ]}
        />
      ) : (
        <DrawerItem
          label="Light theme"
          icon={() => DrawerItemIcon(SvgLightTheme, styles.colorIcon)}
          onPress={() => handleToggleTheme()}
          labelStyle={[
            styles.itemLabel,
            styles.fontItemLabel,
            styles.colorText,
          ]}
        />
      )}
    </DrawerContentScrollView>
  );
};
