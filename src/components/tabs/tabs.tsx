import React from 'react';
import {useColorTheme, ColorThemes} from 'src/hooks/useColorTheme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {getTabsStyles} from './styles';
import {NewPosts} from 'src/screens/new-posts/new-posts';
import {TopPosts} from 'src/screens/top-posts/top-posts';

const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {
  const themeVariant: ColorThemes = useColorTheme();
  const topTabStyles = getTabsStyles(themeVariant);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorContainerStyle: topTabStyles.containerIndicator,
        tabBarStyle: topTabStyles.container,
        tabBarLabelStyle: [topTabStyles.fontText, {textTransform: 'none'}],
        tabBarPressColor: 'transparent',
        tabBarActiveTintColor: topTabStyles.textColor.active,
        tabBarInactiveTintColor: topTabStyles.textColor.initial,
      }}>
      <Tab.Screen
        name="New"
        component={NewPosts}
        options={{
          tabBarItemStyle: topTabStyles.containerItem,
          tabBarIndicatorStyle: [
            topTabStyles.indicatorStyles.styles,
            topTabStyles.indicatorStyles.itemLeft,
            topTabStyles.indicatorStyles.backgroundColor,
          ],
        }}
      />
      <Tab.Screen
        name="Top"
        component={TopPosts}
        options={{
          tabBarItemStyle: topTabStyles.containerItem,
          tabBarIndicatorStyle: [
            topTabStyles.indicatorStyles.styles,
            topTabStyles.indicatorStyles.itemRight,
            topTabStyles.indicatorStyles.backgroundColor,
          ],
        }}
      />
    </Tab.Navigator>
  );
};
