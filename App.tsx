import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from 'src/routes/routes';
import BootSplash from 'react-native-bootsplash';
import {ApolloProvider} from '@apollo/client';
import {apolloClient} from 'src/api/client';
import {AuthProvider} from 'src/context/auth-context';

function App(): JSX.Element {
  return (
    <AuthProvider>
      <ApolloProvider client={apolloClient}>
        <NavigationContainer onReady={() => BootSplash.hide()}>
          <Routes />
        </NavigationContainer>
      </ApolloProvider>
    </AuthProvider>
  );
}

export default App;
