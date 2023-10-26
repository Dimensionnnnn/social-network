import React from 'react';
import {useColorTheme, ColorThemes} from 'src/hooks/useColorTheme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getTapBarStyles} from './styles';
import {Favorites} from 'src/screens/favorites/favorites';
import {Posts} from 'src/screens/posts/posts';
import {TabBarIcon, TabBarIconsNames} from '../UI/tapbar-icon/tapbar-iсon';
import {TopTabs} from 'src/components/tabs/tabs';

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
        name={TabBarIconsNames.MAIN}
        component={TopTabs}
        options={{
          tabBarLabel: TabBarIconsNames.MAIN,
          tabBarIcon: ({color}) => (
            <TabBarIcon name={TabBarIconsNames.Main} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={TabBarIconsNames.FAVORITES}
        component={Favorites}
        options={{
          tabBarLabel: TabBarIconsNames.FAVORITES,
          tabBarIcon: ({color}) => (
            <TabBarIcon name={TabBarIconsNames.FAVORITES} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={TabBarIconsNames.MY_POSTS}
        component={Posts}
        options={{
          tabBarLabel: TabBarIconsNames.MY_POSTS,
          tabBarIcon: ({color}) => (
            <TabBarIcon name={TabBarIconsNames.MY_POSTS} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
