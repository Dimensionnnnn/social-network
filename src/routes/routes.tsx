import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WelcomeScreen} from 'src/screens/welcome-screen/welcome-screen';
import {LoginScreen} from 'src/screens/login/login';
import {RegistrationScreen} from 'src/screens/registration/registration';
import {useAuth} from 'src/hooks/authentication/useAuth';
import {CustomDrawer} from 'src/screens/drawer/drawer';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  WelcomeScreen: undefined;
  Login: undefined;
  Registration: undefined;
  BottomTab: undefined;
};

enum RouteNames {
  CUSTOM_DRAWER = 'CustomDrawer',
  WELCOME_SCREEN = 'WelcomeScreen',
  LOGIN = 'Login',
  REGISTRATION = 'Registration',
}

export const Routes = () => {
  const {userToken} = useAuth();

  return (
    <Stack.Navigator>
      {userToken ? (
        <Stack.Screen
          name={RouteNames.CUSTOM_DRAWER}
          component={CustomDrawer}
          options={{headerShown: false}}
        />
      ) : (
        <>
          <Stack.Screen
            name={RouteNames.WELCOME_SCREEN}
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={RouteNames.LOGIN}
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={RouteNames.REGISTRATION}
            component={RegistrationScreen}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
