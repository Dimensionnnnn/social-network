import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {BottomTab} from 'src/components/tapbar/tapbar';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import {WelcomeScreen} from 'src/screens/welcome-screen/welcome-screen';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from 'src/screens/login/login';
import {RegistrationScreen} from 'src/screens/registration/registration';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const Stack = createStackNavigator();

const client = new ApolloClient({
  uri: 'https://internship-social-media.purrweb.com/graphql',
  cache: new InMemoryCache(),
});

function App(): JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ApolloProvider client={client}>
      <NavigationContainer onReady={() => BootSplash.hide()}>
        <Stack.Navigator>
          {isAuthenticated ? (
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
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
