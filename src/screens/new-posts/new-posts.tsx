import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RadioField} from 'src/components/radio-field/radio-field';

export const NewPosts = () => {
  return (
    <View style={styles.container}>
      <Text>New posts</Text>
      <RadioField />
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
