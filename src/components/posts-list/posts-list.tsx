import React from 'react';
import {View, FlatList} from 'react-native';
import {Spinner} from 'src/components/UI/spinner/spinner';
import {PostCard} from 'src/components/UI/post-card/post-card';
import {ListEmptyComponent} from 'src/components/UI/list-empty/list-empty';
import {formatAuthorName} from 'src/helpers/formatAuthorName';
import {useColorTheme} from 'src/hooks/useColorTheme';
import {getPostsListsStyle} from './styles';
import {FavouritePosts} from 'src/api/posts/gql/querys/__generated__/get-favourite-posts.qury';
import {Posts} from 'src/api/posts/gql/querys/__generated__/get-posts.query';
import dayjs from 'dayjs';

type CustomFavourite = FavouritePosts['favouritePosts']['data'];
type CustomPosts = Posts['posts']['data'];

interface Props {
  isError: boolean;
  isLoading: boolean;
  data: CustomFavourite | CustomPosts | undefined;
  fetchMore: () => void;
}

export const PostsList: React.FC<Props> = ({
  isError,
  isLoading,
  data,
  fetchMore,
}) => {
  const themeVariant = useColorTheme();
  const styles = getPostsListsStyle(themeVariant);

  return (
    <>
      <FlatList
        contentContainerStyle={[styles.container, styles.containerBackground]}
        data={data}
        renderItem={({item}) => (
          <PostCard
            postId={item.id}
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
            isLiked={item.isLiked}
          />
        )}
        keyExtractor={item => item.id}
        onEndReached={fetchMore}
        onEndReachedThreshold={0.1}
        ListEmptyComponent={
          <ListEmptyComponent isLoading={isLoading} isError={isError} />
        }
      />
      {isLoading && data && (
        <View style={styles.containerSpinner}>
          <Spinner color={styles.spinnerColor} stroke={styles.spinnerStroke} />
        </View>
      )}
    </>
  );
};
