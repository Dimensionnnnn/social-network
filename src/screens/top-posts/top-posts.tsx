import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const TopPosts = () => {
  return (
    <View style={styles.container}>
      <Text>Top posts</Text>
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
});
