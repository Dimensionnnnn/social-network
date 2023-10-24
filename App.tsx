import React from 'react';
import {
  Appearance,
  StyleSheet,
  useColorScheme,
  View,
  ScrollView,
} from 'react-native';

import {Button as UIButton} from 'src/components/UI/button/default-button/default-button';
import {Button as UIButtonTextIcon} from 'src/components/UI/button/text-icon/text-icon-button';
import {Button as UIBUttonText} from 'src/components/UI/button/text-button/text-button';
import {Button as UIButtonTextIconLeft} from 'src/components/UI/button/text-icon-left/text-icon-left';
import {Button as UIButtonIcon} from 'src/components/UI/button/button-icon/button-icon';

import {Input as EmailInput} from 'src/components/UI/input/default-input/default-input';

import {SvgExit} from 'src/shared/icons/components/exit-svg';
import {SvgXMini} from 'src/shared/icons/components/x-mark-mini-svg';
import {SvgXMark} from 'src/shared/icons/components/x-mark-svg';
import {SvgPlus} from 'src/shared/icons/components/plus-svg';
import {SvgCamera} from 'src/shared/icons/components/camera-svg';
import {SvgArrowLeft} from 'src/shared/icons/components/arrow-left-svg';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const handeChangeTheme = () =>
    Appearance.setColorScheme(isDarkMode ? 'light' : 'dark');

  return (
    <>
      <ScrollView>
        <View style={styles.buttonContainer}>
          <UIButton
            title="Small"
            onPress={handeChangeTheme}
            buttonSize="small"
          />
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
          <UIButton
            title="Large"
            onPress={handeChangeTheme}
            buttonSize="large"
          />
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
          <UIButtonTextIcon
            title="Link"
            onPress={handeChangeTheme}
            isDisabled
          />
        </View>
        <View style={styles.buttonContainer}>
          <UIBUttonText title="Done" onPress={handeChangeTheme} />
        </View>
        <View style={styles.buttonContainer}>
          <UIBUttonText title="Done" onPress={handeChangeTheme} isDisabled />
        </View>
        <View style={styles.buttonContainer}>
          <UIButtonTextIconLeft
            title="Link"
            onPress={handeChangeTheme}
            Icon={SvgExit}
          />
        </View>
        <View style={styles.buttonContainer}>
          <UIButtonTextIconLeft
            title="Link"
            onPress={handeChangeTheme}
            Icon={SvgExit}
            isDisabled
          />
        </View>
        <View style={styles.buttonContainer}>
          <EmailInput label="Email" placeholder="Enter email" />
        </View>
        <View style={styles.buttonContainer}>
          <EmailInput
            label="Email"
            placeholder="Enter email"
            value="Email"
            isDisabled
          />
        </View>
        <View style={styles.buttonContainer}>
          <EmailInput
            label="Email"
            placeholder="Enter email"
            value="Email"
            isSuccess
          />
        </View>
        <View style={styles.buttonContainer}>
          <EmailInput
            label="Email"
            placeholder="Enter email"
            value="Email"
            isError
          />
        </View>
        <View style={styles.buttonContainer}>
          <UIButtonIcon
            isDefaultIcon={true}
            Icon={SvgArrowLeft}
            onPress={handeChangeTheme}
          />
        </View>
        <View style={styles.buttonContainer}>
          <UIButtonIcon
            isDefaultIcon={false}
            Icon={SvgXMark}
            onPress={handeChangeTheme}
          />
        </View>
        <View style={styles.buttonContainer}>
          <UIButtonIcon
            isDefaultIcon={false}
            Icon={SvgXMini}
            onPress={handeChangeTheme}
            buttonSize="small"
          />
        </View>
        <View style={styles.buttonContainer}>
          <UIButtonIcon
            isDefaultIcon={false}
            Icon={SvgCamera}
            onPress={handeChangeTheme}
            buttonSize="medium"
          />
        </View>
        <View style={styles.buttonContainer}>
          <UIButtonIcon
            isDefaultIcon={false}
            Icon={SvgPlus}
            onPress={handeChangeTheme}
            buttonSize="large"
          />
        </View>
      </ScrollView>
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
