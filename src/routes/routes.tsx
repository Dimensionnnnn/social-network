import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WelcomeScreen} from 'src/screens/welcome-screen/welcome-screen';
import {LoginScreen} from 'src/screens/login/login';
import {RegistrationScreen} from 'src/screens/registration/registration';
import {useAuth} from 'src/hooks/authentication/useAuth';
import {CustomDrawer} from 'src/screens/drawer/drawer';
import {Post} from 'src/screens/post/post';
import {CreatePost} from 'src/screens/create-post/create-post';
import {Profile} from 'src/screens/profile/profile';

const Stack = createNativeStackNavigator();

type PostCardRouteParams = {
  postId: string;
  title: string;
  createdAt: string;
  description: string;
  mediaUrl: string;
  avatarUrl?: string;
  authorName?: string;
  isLiked?: boolean;
  likesCount: number;
};
export type RootStackParamList = {
  WelcomeScreen: undefined;
  Login: undefined;
  Registration: undefined;
  BottomTab: undefined;
  Post: PostCardRouteParams;
  CreatePost: undefined;
  Profile: undefined;
};

export enum RouteNames {
  CUSTOM_DRAWER = 'CustomDrawer',
  WELCOME_SCREEN = 'WelcomeScreen',
  LOGIN = 'Login',
  REGISTRATION = 'Registration',
  POST = 'Post',
  CREATE_POST = 'CreatePost',
  PROFILE = 'Profile',
}

export const Routes = () => {
  const {userToken} = useAuth();

  return (
    <Stack.Navigator>
      {userToken ? (
        <>
          <Stack.Screen
            name={RouteNames.CUSTOM_DRAWER}
            component={CustomDrawer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={RouteNames.POST}
            component={Post}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={RouteNames.CREATE_POST}
            component={CreatePost}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={RouteNames.PROFILE}
            component={Profile}
            options={{headerShown: false}}
          />
        </>
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
