import React from 'react';
import {BottomTab} from 'src/components/tapbar/tapbar';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';

function App(): JSX.Element {
  return (
    <NavigationContainer onReady={() => BootSplash.hide()}>
      <BottomTab />
    </NavigationContainer>
  );
}

export default App;
