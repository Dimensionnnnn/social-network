import React from 'react';
import {View, FlatList} from 'react-native';
import {PostCard} from 'src/components/UI/post-card/post-card';
import {PostFilterType} from 'src/shared/types/__generated__/gql-types';
import {getNewPostsStyles} from './styles';
import {useColorTheme} from 'src/hooks/useColorTheme';
import {formatAuthorName} from 'src/helpers/formatAuthorName';
import {Spinner} from 'src/components/UI/spinner/spinner';
import dayjs from 'dayjs';
import {usePostsRequest} from 'src/hooks/usePostsRequest';
import {ListEmptyComponent} from 'src/components/UI/list-empty/list-empty';

export const NewPosts = () => {
  const themeVariant = useColorTheme();
  const styles = getNewPostsStyles(themeVariant);
  const {isLoading, isError, posts, fetchMore} = usePostsRequest({
    type: PostFilterType.New,
  });

  return (
    <>
      <FlatList
        contentContainerStyle={[styles.container, styles.containerBackground]}
        data={posts}
        renderItem={({item}) => (
          <PostCard
            key={item.id}
            title={item.title}
            createdAt={dayjs(item.createdAt).format('DD.MM.YY')}
            description={item.description}
            mediaUrl={item.mediaUrl}
            avatarUrl={item.author.avatarUrl || ''}
            authorName={formatAuthorName(
              item.author.firstName || '',
              item.author.lastName || '',
            )}
            likesCount={item.likesCount}
          />
        )}
        keyExtractor={item => item.id}
        onEndReached={fetchMore}
        onEndReachedThreshold={0.1}
        ListEmptyComponent={
          <ListEmptyComponent isLoading={isLoading} isError={isError} />
        }
      />
      {isLoading && posts && (
        <View style={styles.containerSpinner}>
          <Spinner color={styles.spinnerColor} stroke={styles.spinnerStroke} />
        </View>
      )}
    </>
  );
};
