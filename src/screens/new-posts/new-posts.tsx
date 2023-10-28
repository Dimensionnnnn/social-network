import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RadioGroup} from 'src/components/radio-field/radio-group';
import {UserIcon} from 'src/components/UI/button/user-icon/user-icon';
import {CustomSwitch} from 'src/components/UI/switch/switch';
import {PostCard} from 'src/components/UI/post-card/post-card';
import {useColorTheme, ColorThemes} from 'src/hooks/useColorTheme';

const LABELS = [
  {id: 101, label: 'Male'},
  {id: 102, label: 'Female'},
  {id: 103, label: 'Other'},
];

const description =
  'The Queen of the Carnival in Rio de Janeiro and up to two princesses having the duty to woo the revelry, along with the King Momo. Unlike some cities, in the city of Rio de Janeiro, Queens of Carnival do not see a certain school of samba. In competitions, princesses are usually placed as second and third, and are correspondingly 1st and 2nd Princess. Some of them after the reign become queens or battery bridesmaids. Incorporated into every aspect of the Rio carnival are dancing and music. The most famous dance is carnival samba, a Brazilian dance with African influences. The samba remains a popular dance not only in carnival but in the ghettos outside of the main cities.Some of them after the reign become queens or battery bridesmaids. Incorporated into every aspect of the Rio';

export const NewPosts = () => {
  const userPhotoUrl = require('src\\shared\\images\\userPhoto.png');
  const postPhotoUrl = require('src\\shared\\images\\postPhoto.png');

  const themeVariant: ColorThemes = useColorTheme();
  return (
    <ScrollView>
      <View style={[styles.container, styles[themeVariant]]}>
        <CustomSwitch />
        <Text>New posts</Text>
        <RadioGroup labels={LABELS} />
        <UserIcon size="small" userPhotoUrl={userPhotoUrl} />
        <UserIcon size="small" />
        <UserIcon size="medium" userPhotoUrl={userPhotoUrl} />
        <UserIcon size="medium" />
        <UserIcon size="large" userPhotoUrl={userPhotoUrl} />
        <UserIcon size="large" />
        <PostCard
          name="Apple love"
          dateOfCreation="11.09.22"
          photoUrl={postPhotoUrl}
          authorPhotoUrl={userPhotoUrl}
          likesCount={137}
          authorName="Hannah K."
          description={description}
        />
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
  [ColorThemes.DARK]: {
    backgroundColor: '#131313',
  },
  [ColorThemes.LIGHT]: {
    backgroundColor: '#FFFFFF',
  },
});
