import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WelcomeScreen} from 'src/screens/welcome-screen/welcome-screen';
import {LoginScreen} from 'src/screens/login/login';
import {RegistrationScreen} from 'src/screens/registration/registration';
import {useAuth} from 'src/hooks/useAuth';
import {CustomDrawer} from 'src/screens/drawer/drawer';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  const {userToken} = useAuth();

  return (
    <Stack.Navigator>
      {userToken ? (
        <Stack.Screen
          name="CustomDrawer"
          component={CustomDrawer}
          options={{headerShown: false}}
        />
      ) : (
        <>
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export type RootStackParamList = {
  WelcomeScreen: undefined;
  Login: undefined;
  Registration: undefined;
  BottomTab: undefined;
};
