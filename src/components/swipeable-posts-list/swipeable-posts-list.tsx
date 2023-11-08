import React from 'react';
import {View, FlatList} from 'react-native';
import {Spinner} from 'src/components/UI/spinner/spinner';
import {PostCard} from 'src/components/UI/post-card/post-card';
import {ListEmpty} from 'src/components/UI/list-empty/list-empty';
import {formatAuthorName} from 'src/helpers/formatAuthorName';
import {useColorTheme} from 'src/hooks/theme/useColorTheme';
import {FavouritePosts} from 'src/api/posts/gql/querys/__generated__/get-favourite-posts.qury';
import {Posts} from 'src/api/posts/gql/querys/__generated__/get-posts.query';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import dayjs from 'dayjs';
import {Button as DeleteButton} from 'src/components/UI/button/delete-button/delete-button';
import {getPostsListsStyle} from '../posts-list/styles';
import {usePostDelete} from 'src/api/posts/gql/mutations/__generated__/post-delete.mutation';

type CustomFavourite = FavouritePosts['favouritePosts']['data'];
type CustomPosts = Posts['posts']['data'];

interface Props {
  isError: boolean;
  isLoading: boolean;
  data: CustomFavourite | CustomPosts | undefined;
  fetchMore: () => void;
}

const ItemSwipe = (item: any, handleDeletePost: any) => {
  const renderRightActions = () => {
    return (
      <View style={{width: 73}}>
        <DeleteButton onPress={() => handleDeletePost(item.id)} />
      </View>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
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
    </Swipeable>
  );
};

export const SwipeablePostsList: React.FC<Props> = ({
  isError,
  isLoading,
  data,
  fetchMore,
}) => {
  const themeVariant = useColorTheme();
  const styles = getPostsListsStyle(themeVariant);

  const [postDelete] = usePostDelete();

  const handleDeletePost = async (id: string) => {
    try {
      await postDelete({
        variables: {
          input: {
            id,
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <FlatList
        contentContainerStyle={[styles.container, styles.containerBackground]}
        data={data}
        renderItem={({item}) => ItemSwipe(item, handleDeletePost)}
        keyExtractor={item => item.id}
        onEndReached={fetchMore}
        onEndReachedThreshold={0.1}
        ListEmptyComponent={
          <ListEmpty isLoading={isLoading} isError={isError} />
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
