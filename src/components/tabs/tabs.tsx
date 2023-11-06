import React from 'react';
import {useColorTheme, ColorThemes} from 'src/hooks/useColorTheme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {getTabsStyles} from './styles';
import {View} from 'react-native';
import {Header} from '../header/header';
import {MainPosts} from 'src/screens/main-posts/main-posts';
import {PostFilterType} from 'src/shared/types/__generated__/gql-types';

const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {
  const themeVariant: ColorThemes = useColorTheme();
  const topTabStyles = getTabsStyles(themeVariant);

  return (
    <>
      <Header />
      <View
        style={[topTabStyles.tabsContainer, topTabStyles.tabsContainerBgColor]}>
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
            component={MainPosts}
            initialParams={{type: PostFilterType.New}}
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
            component={MainPosts}
            initialParams={{type: PostFilterType.Top}}
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
      </View>
    </>
  );
};
