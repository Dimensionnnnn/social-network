import React from 'react';
import {View, FlatList} from 'react-native';
import {useColorTheme} from 'src/hooks/useColorTheme';
import {usePostsRequest} from 'src/hooks/usePostsRequest';
import {PostFilterType} from 'src/shared/types/__generated__/gql-types';
import {getMainPostsStyle} from './styles';
import {Spinner} from 'src/components/UI/spinner/spinner';
import {ListEmptyComponent} from 'src/components/UI/list-empty/list-empty';
import {formatAuthorName} from 'src/helpers/formatAuthorName';
import {PostCard} from 'src/components/UI/post-card/post-card';
import {RouteProp} from '@react-navigation/native';
import dayjs from 'dayjs';

type MainPostsRouteProp = RouteProp<
  {MainPosts: {type: PostFilterType}},
  'MainPosts'
>;

export const MainPosts = ({route}: {route?: MainPostsRouteProp}) => {
  const themeVariant = useColorTheme();
  const styles = getMainPostsStyle(themeVariant);
  const {type} = route!.params;
  const {isLoading, isError, posts, fetchMore} = usePostsRequest({
    type,
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
