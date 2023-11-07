import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button} from 'src/components/UI/button/button-icon-bg/button-icon-bg';
import {SvgPlus} from 'src/shared/icons/components/plus-svg';
import {PostFilterType} from 'src/shared/types/__generated__/gql-types';
import {SwipeablePostsList} from 'src/components/swipeable-posts-list/swipeable-posts-list';
import {usePostsData} from 'src/hooks/posts/usePostsData';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList, RouteNames} from 'src/routes/routes';

export const MyPosts = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleOpenCreatePostScreen = () => {
    navigation.navigate(RouteNames.CREATE_POST);
  };

  const {isLoading, isError, posts, fetchMore} = usePostsData({
    type: PostFilterType.Top,
  });
  return (
    <>
      <View style={styles.container}>
        <SwipeablePostsList
          isLoading={isLoading}
          isError={isError}
          data={posts}
          fetchMore={fetchMore}
        />
      </View>
      <View style={styles.containerNewPost}>
        <Button
          Icon={SvgPlus}
          buttonSize="large"
          onPress={handleOpenCreatePostScreen}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  containerNewPost: {
    width: '100%',
    position: 'absolute',
    bottom: 32,
    left: '80%',
  },
});
