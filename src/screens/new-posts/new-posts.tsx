import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const NewPosts = () => {
  return (
    <View style={styles.container}>
      <Text>New posts</Text>
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
