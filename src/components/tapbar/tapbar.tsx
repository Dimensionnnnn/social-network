import React from 'react';
import {useColorTheme, ColorThemes} from 'src/hooks/useColorTheme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getTapBarStyles} from './styles';
import {Main} from 'src/screens/main/main';
import {Favorites} from 'src/screens/favorites/favorites';
import {Posts} from 'src/screens/posts/posts';
import {TabBarIcon, TabBarIconsNames} from '../UI/tapbar-icon/tapbar-iсon';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  const themeVariant: ColorThemes = useColorTheme();
  const tapBarStyles = getTapBarStyles(themeVariant);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: tapBarStyles.iconColor.active,
        tabBarInactiveTintColor: tapBarStyles.iconColor.initial,
        tabBarStyle: [tapBarStyles.containerColor, tapBarStyles.container],
        tabBarLabelStyle: tapBarStyles.fontText,
        tabBarItemStyle: tapBarStyles.containerItem,
      }}>
      <Tab.Screen
        name={TabBarIconsNames.Main}
        component={Main}
        options={{
          tabBarLabel: TabBarIconsNames.Main,
          tabBarIcon: ({color}) => (
            <TabBarIcon name={TabBarIconsNames.Main} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={TabBarIconsNames.Favorites}
        component={Favorites}
        options={{
          tabBarLabel: TabBarIconsNames.Favorites,
          tabBarIcon: ({color}) => (
            <TabBarIcon name={TabBarIconsNames.Favorites} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={TabBarIconsNames['My posts']}
        component={Posts}
        options={{
          tabBarLabel: TabBarIconsNames['My posts'],
          tabBarIcon: ({color}) => (
            <TabBarIcon name={TabBarIconsNames['My posts']} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
