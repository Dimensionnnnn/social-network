import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RadioGroup} from 'src/components/radio-field/radio-group';

const LABELS = [
  {id: 101, label: 'Male'},
  {id: 102, label: 'Female'},
  {id: 103, label: 'Other'},
];

export const NewPosts = () => {
  return (
    <View style={styles.container}>
      <Text>New posts</Text>
      <RadioGroup labels={LABELS} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
