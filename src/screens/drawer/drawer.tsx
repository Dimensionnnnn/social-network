import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomTab} from 'src/components/tapbar/tapbar';
import {DrawerContent} from 'src/components/drawer-content/drawer-content';
import {getDrawerStyles} from './styles';
import {ColorThemes, useColorTheme} from 'src/hooks/useColorTheme';
import {ScrollView} from 'react-native';

const Drawer = createDrawerNavigator();

export const CustomDrawer = () => {
  const themeVariant: ColorThemes = useColorTheme();
  const styles = getDrawerStyles(themeVariant);

  return (
    <ScrollView
      contentContainerStyle={[styles.container, styles.backgroundColor]}>
      <Drawer.Navigator drawerContent={DrawerContent}>
        <Drawer.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: false, drawerItemStyle: {display: 'none'}}}
        />
      </Drawer.Navigator>
    </ScrollView>
  );
};
