import React from 'react';
import {Appearance, StyleSheet, useColorScheme, View} from 'react-native';

import {
  ButtonSize,
  Button as UIButton,
} from './src/components/UI/button/default-button';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const handeChangeTheme = () =>
    Appearance.setColorScheme(isDarkMode ? 'light' : 'dark');

  return (
    <>
      <View style={styles.buttonContainer}>
        <UIButton
          isDarkMode={isDarkMode}
          title="Title 1"
          onPress={handeChangeTheme}
          buttonSize={ButtonSize.small}
        />
      </View>
      <View style={styles.buttonContainer}>
        <UIButton
          isDarkMode={isDarkMode}
          title="Title 2"
          onPress={handeChangeTheme}
          buttonSize={ButtonSize.medium}
        />
      </View>
      <View style={styles.buttonContainer}>
        <UIButton
          isDarkMode={isDarkMode}
          title="Title 3"
          onPress={handeChangeTheme}
          buttonSize={ButtonSize.large}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 20,
  },
});

export default App;
