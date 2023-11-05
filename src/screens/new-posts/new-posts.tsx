import React from 'react';
import {ScrollView} from 'react-native';
import {usePosts} from 'src/api/posts/gql/querys/__generated__/get-posts.query';
import {PostCard} from 'src/components/UI/post-card/post-card';
import {PostFilterType} from 'src/shared/types/__generated__/gql-types';
import {getNewPostsStyles} from './styles';
import {ColorThemes, useColorTheme} from 'src/hooks/useColorTheme';
import {formatAuthorName} from 'src/helpers/formatAuthorName';
import {Spinner} from 'src/components/UI/spinner/spinner';
import {NotFound} from 'src/components/UI/not-found/not-found';
import {
  errorMessage,
  notFoundMessage,
} from 'src/constants/notificationMessages';
import dayjs from 'dayjs';

export const NewPosts = () => {
  const themeVariant: ColorThemes = useColorTheme();
  const styles = getNewPostsStyles(themeVariant);

  const {loading, error, data} = usePosts({
    variables: {
      input: {
        type: PostFilterType.New,
      },
    },
  });

  const postsData = data?.posts?.data;

  return (
    <ScrollView
      contentContainerStyle={[styles.container, styles.containerBackground]}>
      {loading && (
        <Spinner color={styles.spinnerColor} stroke={styles.spinnerStroke} />
      )}
      {postsData
        ? Object.values(postsData).map(post => (
            <PostCard
              key={post.id}
              title={post.title}
              createdAt={dayjs(post.createdAt).format('DD.MM.YY')}
              description={post.description}
              mediaUrl={post.mediaUrl}
              avatarUrl={post.author.avatarUrl || ''}
              authorName={formatAuthorName(
                post.author.firstName || '',
                post.author.lastName || '',
              )}
              likesCount={post.likesCount}
            />
          ))
        : !error && !loading && <NotFound text={notFoundMessage} />}
      {error && <NotFound text={errorMessage} />}
    </ScrollView>
  );
};
