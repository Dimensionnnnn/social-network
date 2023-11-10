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
import {useColorTheme} from 'src/hooks/theme/useColorTheme';
import {getDrawerContentStyles} from './styles';
import {SvgProps} from 'react-native-svg';
import {Appearance, useColorScheme} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList, RouteNames} from 'src/routes/routes';
import {useUserMeRequest} from 'src/hooks/user/useUserMe';
import {formatUserName} from 'src/helpers/formatUserName';

const DrawerItemIcon = (
  Icon: (props: SvgProps) => JSX.Element,
  color: string,
) => {
  return <Icon color={color} />;
};

export const DrawerContent = (props: DrawerContentComponentProps) => {
  const themeVariant = useColorTheme();
  const isDarkMode = useColorScheme() === 'dark';
  const {logout} = useAuth();
  const {user} = useUserMeRequest();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const userName = formatUserName(user?.firstName, user?.lastName);

  const styles = getDrawerContentStyles(themeVariant);

  const handleOpenProfile = () => {
    navigation.navigate(RouteNames.PROFILE);
  };

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
          <UserIcon
            size={UserIconSize.MEDIUM}
            userPhotoUrl={user?.avatarUrl ?? undefined}
          />
          <Text style={[styles.fontUserName, styles.colorText]}>
            {userName ?? 'Hello'}
          </Text>
        </View>
        <DrawerItem
          label="Profile"
          icon={() => DrawerItemIcon(SvgUserIcon, styles.colorIcon)}
          onPress={handleOpenProfile}
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
