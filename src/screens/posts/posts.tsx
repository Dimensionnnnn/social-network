import {StyleSheet, View, FlatList, Text} from 'react-native';
import React from 'react';
import {Button} from 'src/components/UI/button/button-icon-bg/button-icon-bg';
import {SvgPlus} from 'src/shared/icons/components/plus-svg';
import {PostsList} from 'src/components/posts-list/posts-list';
import {usePostsRequest} from 'src/hooks/usePostsRequest';
import {PostFilterType} from 'src/shared/types/__generated__/gql-types';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {Button as DeleteButton} from 'src/components/UI/button/delete-button/delete-button';
import {PostCard} from 'src/components/UI/post-card/post-card';
import {SwipeablePostsList} from 'src/components/swipeable-posts-list/swipeable-posts-list';

const renderItemSwipe = (item: any) => {
  const renderRightActions = () => {
    return (
      <View style={{width: 73}}>
        <DeleteButton />
      </View>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <PostCard
        postId={item.item.id}
        key={item.item.id}
        title={item.item.title}
        createdAt={item.item.createdAt}
        description={item.item.description}
        mediaUrl={item.item.mediaUrl}
        avatarUrl={item.item.author.avatarUrl || ''}
        authorName={item.item.author.firstName || ''}
        likesCount={item.item.likesCount}
        isLiked={item.item.isLiked}
      />
    </Swipeable>
  );
};

export const Posts = () => {
  const [prevOpened, setPrevOpened] = React.useState<any>(null);
  const {isLoading, isError, posts, fetchMore} = usePostsRequest({
    type: PostFilterType.Top,
  });
  return (
    <View style={styles.container}>
      <SwipeablePostsList
        isLoading={isLoading}
        isError={isError}
        data={posts}
        fetchMore={fetchMore}
      />
    </View>
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
