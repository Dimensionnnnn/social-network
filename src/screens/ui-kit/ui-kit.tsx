import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {Button as UIButton} from 'src/components/UI/button/default-button/default-button';
import {Button as UIButtonTextIcon} from 'src/components/UI/button/text-icon/text-icon-button';
import {Button as UIBUttonText} from 'src/components/UI/button/text-button/text-button';
import {Button as UIButtonTextIconLeft} from 'src/components/UI/button/text-icon-left/text-icon-left';
import {Button as UIButtonIcon} from 'src/components/UI/button/button-icon/button-icon';
import {Button as UIButtonBgIcon} from 'src/components/UI/button/button-icon-bg/button-icon-bg';
import {Button as UIButtonDelete} from 'src/components/UI/button/delete-button/delete-button';

import {Input} from 'src/components/UI/input/default-input/default-input';

import {SvgExit} from 'src/shared/icons/components/exit-svg';
import {SvgXMini} from 'src/shared/icons/components/x-mark-mini-svg';
import {SvgXMark} from 'src/shared/icons/components/x-mark-svg';
import {SvgPlus} from 'src/shared/icons/components/plus-svg';
import {SvgCamera} from 'src/shared/icons/components/camera-svg';
import {SvgArrowLeft} from 'src/shared/icons/components/arrow-left-svg';
import {SvgCheckMini} from 'src/shared/icons/components/check-mini-svg';

import {PostCard} from 'src/components/UI/post-card/post-card';

import {RadioGroup} from 'src/components/radio-field/radio-group';
import {UserIcon} from 'src/components/UI/button/user-icon/user-icon';

import {CustomSwitch} from 'src/components/UI/switch/switch';

import {useColorTheme, ColorThemes} from 'src/hooks/useColorTheme';

const LABELS = [
  {id: 101, label: 'Male'},
  {id: 102, label: 'Female'},
  {id: 103, label: 'Other'},
];
const description =
  'The Queen of the Carnival in Rio de Janeiro and up to two princesses having the duty to woo the revelry, along with the King Momo. Unlike some cities, in the city of Rio de Janeiro, Queens of Carnival do not see a certain school of samba. In competitions, princesses are usually placed as second and third, and are correspondingly 1st and 2nd Princess. Some of them after the reign become queens or battery bridesmaids. Incorporated into every aspect of the Rio carnival are dancing and music. The most famous dance is carnival samba, a Brazilian dance with African influences. The samba remains a popular dance not only in carnival but in the ghettos outside of the main cities.Some of them after the reign become queens or battery bridesmaids. Incorporated into every aspect of the Rio';
const userPhotoUrl = require('src\\shared\\images\\userPhoto.png');
const postPhotoUrl = require('src\\shared\\images\\postPhoto.png');

export const UIKit = () => {
  const themeVariant = useColorTheme();
  return (
    <View style={[styles.container, styles[themeVariant]]}>
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
          <UIButtonIcon Icon={SvgArrowLeft} />
        </View>
        <View style={styles.buttonContainer}>
          <UIButtonIcon Icon={SvgXMark} />
        </View>
        <View style={styles.buttonContainer}>
          <UIButtonBgIcon Icon={SvgXMini} buttonSize="small" />
        </View>
        <View style={styles.buttonContainer}>
          <UIButtonBgIcon Icon={SvgCamera} buttonSize="medium" />
        </View>
        <View style={styles.buttonContainer}>
          <UIButtonBgIcon Icon={SvgPlus} buttonSize="large" />
        </View>
        <View style={styles.buttonContainer}>
          <UIButtonDelete title="Delete" />
        </View>
        <RadioGroup labels={LABELS} />
        <UserIcon size="small" userPhotoUrl={userPhotoUrl} />
        <UserIcon size="small" />
        <UserIcon size="medium" userPhotoUrl={userPhotoUrl} />
        <UserIcon size="medium" />
        <UserIcon size="large" userPhotoUrl={userPhotoUrl} />
        <UserIcon size="large" />
        <PostCard
          title="Apple love"
          createdAt="11.09.22"
          //mediaUrl={postPhotoUrl}
          //avatarUrl={userPhotoUrl}
          likesCount={137}
          authorName="Hannah K."
          description={description}
        />
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
    backgroundColor: '#F0F0F0',
  },
});
