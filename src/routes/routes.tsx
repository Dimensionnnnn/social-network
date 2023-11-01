import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WelcomeScreen} from 'src/screens/welcome-screen/welcome-screen';
import {LoginScreen} from 'src/screens/login/login';
import {RegistrationScreen} from 'src/screens/registration/registration';
import {BottomTab} from 'src/components/tapbar/tapbar';
import {AuthContext, AuthContextProps} from 'src/context/auth-context';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  const {userToken} = useContext<AuthContextProps>(AuthContext);

  return (
    <Stack.Navigator>
      {userToken ? (
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
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
