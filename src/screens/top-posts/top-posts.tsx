import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {Button as UIButton} from 'src/components/UI/button/default-button/default-button';
import {Button as UIButtonTextIcon} from 'src/components/UI/button/text-icon/text-icon-button';
import {Button as UIBUttonText} from 'src/components/UI/button/text-button/text-button';
import {Button as UIButtonTextIconLeft} from 'src/components/UI/button/text-icon-left/text-icon-left';
import {Button as UIButtonIcon} from 'src/components/UI/button/button-icon/button-icon';
import {Button as UIButtonDelete} from 'src/components/UI/button/delete-button/delete-button';

import {Input} from 'src/components/UI/input/default-input/default-input';

import {SvgExit} from 'src/shared/icons/components/exit-svg';
import {SvgXMini} from 'src/shared/icons/components/x-mark-mini-svg';
import {SvgXMark} from 'src/shared/icons/components/x-mark-svg';
import {SvgPlus} from 'src/shared/icons/components/plus-svg';
import {SvgCamera} from 'src/shared/icons/components/camera-svg';
import {SvgArrowLeft} from 'src/shared/icons/components/arrow-left-svg';
import {SvgCheckMini} from 'src/shared/icons/components/check-mini-svg';

import {CustomSwitch} from 'src/components/UI/switch/switch';

import {useColorTheme, ColorThemes} from 'src/hooks/useColorTheme';

export const TopPosts = () => {
  const themeVariant: ColorThemes = useColorTheme();
  return (
    <View style={[styles.container, styles[themeVariant]]}>
      <Text>Top posts</Text>
      <CustomSwitch />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.buttonContainer}>
          <UIButton title="Small" buttonSize="small" />
        </View>
        <View style={styles.buttonContainer}>
          <UIButton title="Small" buttonSize="small" isLoading={true} />
        </View>
        <View style={styles.buttonContainer}>
          <UIButton title="Disabled" buttonSize="small" isDisabled />
        </View>
        <View style={styles.buttonContainer}>
          <UIButton title="Medium" buttonSize="medium" />
        </View>
        <View style={styles.buttonContainer}>
          <UIButton title="Medium" buttonSize="medium" isLoading={true} />
        </View>
        <View style={styles.buttonContainer}>
          <UIButton title="Disabled" buttonSize="medium" isDisabled />
        </View>
        <View style={styles.buttonContainer}>
          <UIButton title="Delete" buttonSize="medium" isDelete />
        </View>
        <View style={styles.buttonContainer}>
          <UIButton title="Large" buttonSize="large" />
        </View>
        <View style={styles.buttonContainer}>
          <UIButton title="Large" buttonSize="large" isLoading={true} />
        </View>
        <View style={styles.buttonContainer}>
          <UIButton title="Disabled" buttonSize="large" isDisabled />
        </View>
        <View style={styles.buttonContainer}>
          <UIButtonTextIcon title="Link" />
        </View>
        <View style={styles.buttonContainer}>
          <UIButtonTextIcon title="Link" isLoading={true} />
        </View>
        <View style={styles.buttonContainer}>
          <UIButtonTextIcon title="Link" isDisabled />
        </View>
        <View style={styles.buttonContainer}>
          <UIBUttonText title="Done" />
        </View>
        <View style={styles.buttonContainer}>
          <UIBUttonText title="Done" isDisabled />
        </View>
        <View style={styles.buttonContainer}>
          <UIButtonTextIconLeft title="Link" Icon={SvgExit} />
        </View>
        <View style={styles.buttonContainer}>
          <UIButtonTextIconLeft title="Link" Icon={SvgExit} isDisabled />
        </View>
        <View style={styles.buttonContainer}>
          <Input label="Email" placeholder="Enter email" />
        </View>
        <View style={styles.buttonContainer}>
          <Input
            label="Email"
            placeholder="Enter email"
            value="Email"
            isDisabled
          />
        </View>
        <View style={styles.buttonContainer}>
          <Input
            label="Email"
            placeholder="Enter email"
            value="Email"
            isSuccess
            SuccessIcon={SvgCheckMini}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Input
            label="Email"
            placeholder="Enter email"
            value="Email"
            errorMessage="Enter correct e-mail"
            isError
          />
        </View>
        <View style={styles.buttonContainer}>
          <Input
            label="Password"
            placeholder="Enter password"
            isPassword={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <UIButtonIcon isDefaultIcon={true} Icon={SvgArrowLeft} />
        </View>
        <View style={styles.buttonContainer}>
          <UIButtonIcon isDefaultIcon={false} Icon={SvgXMark} />
        </View>
        <View style={styles.buttonContainer}>
          <UIButtonIcon
            isDefaultIcon={false}
            Icon={SvgXMini}
            buttonSize="small"
          />
        </View>
        <View style={styles.buttonContainer}>
          <UIButtonIcon
            isDefaultIcon={false}
            Icon={SvgCamera}
            buttonSize="medium"
          />
        </View>
        <View style={styles.buttonContainer}>
          <UIButtonIcon
            isDefaultIcon={false}
            Icon={SvgPlus}
            buttonSize="large"
          />
        </View>
        <View style={styles.buttonContainer}>
          <UIButtonDelete title="Delete" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 20,
  },
  scrollContainer: {
    width: '100%',
  },
  [ColorThemes.DARK]: {
    backgroundColor: '#424244',
  },
  [ColorThemes.LIGHT]: {
    backgroundColor: '#FFFFFF',
  },
});
