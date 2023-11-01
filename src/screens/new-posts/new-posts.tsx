import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RadioGroup} from 'src/components/radio-field/radio-group';
import {UserIcon} from 'src/components/UI/button/user-icon/user-icon';
import {CustomSwitch} from 'src/components/UI/switch/switch';

const LABELS = [
  {id: 101, label: 'Male'},
  {id: 102, label: 'Female'},
  {id: 103, label: 'Other'},
];

export const NewPosts = () => {
  const userPhotoUrl = require('src\\shared\\images\\userPhoto.png');
  return (
    <ScrollView>
      <View style={styles.container}>
        <CustomSwitch />
        <Text>New posts</Text>
        <RadioGroup labels={LABELS} />
        <UserIcon size="small" userPhotoUrl={userPhotoUrl} />
        <UserIcon size="small" />
        <UserIcon size="medium" userPhotoUrl={userPhotoUrl} />
        <UserIcon size="medium" />
        <UserIcon size="large" userPhotoUrl={userPhotoUrl} />
        <UserIcon size="large" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
