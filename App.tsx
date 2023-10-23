import React from 'react';
import {Appearance, StyleSheet, useColorScheme, View} from 'react-native';

import {Button as UIButton} from 'src/components/UI/button/default-button/default-button';
import {Button as UIButtonTextIcon} from 'src/components/UI/button/text-icon/text-icon-button';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const handeChangeTheme = () =>
    Appearance.setColorScheme(isDarkMode ? 'light' : 'dark');

  return (
    <>
      <View style={styles.buttonContainer}>
        <UIButton title="Small" onPress={handeChangeTheme} buttonSize="small" />
      </View>
      <View style={styles.buttonContainer}>
        <UIButton
          title="Disabled"
          onPress={handeChangeTheme}
          buttonSize="small"
          isDisabled
        />
      </View>
      <View style={styles.buttonContainer}>
        <UIButton
          title="Medium"
          onPress={handeChangeTheme}
          buttonSize="medium"
        />
      </View>
      <View style={styles.buttonContainer}>
        <UIButton
          title="Disabled"
          onPress={handeChangeTheme}
          buttonSize="medium"
          isDisabled
        />
      </View>
      <View style={styles.buttonContainer}>
        <UIButton
          title="Delete"
          onPress={handeChangeTheme}
          buttonSize="medium"
          isDelete
        />
      </View>
      <View style={styles.buttonContainer}>
        <UIButton title="Large" onPress={handeChangeTheme} buttonSize="large" />
      </View>
      <View style={styles.buttonContainer}>
        <UIButton
          title="Disabled"
          onPress={handeChangeTheme}
          buttonSize="large"
          isDisabled
        />
      </View>
      <View style={styles.buttonContainer}>
        <UIButtonTextIcon title="Link" onPress={handeChangeTheme} />
      </View>
      <View style={styles.buttonContainer}>
        <UIButtonTextIcon title="Link" onPress={handeChangeTheme} isDisabled />
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
