import React from 'react';
import {ScrollView} from 'react-native';
import {PostFilterType} from 'src/shared/types/__generated__/gql-types';
import {PostCard} from 'src/components/UI/post-card/post-card';
import {usePosts} from 'src/api/posts/gql/querys/__generated__/get-posts.query';
import {ColorThemes, useColorTheme} from 'src/hooks/useColorTheme';
import {getTopPostsStyles} from './styles';
import {formatAuthorName} from 'src/helpers/formatAuthorName';
import {Spinner} from 'src/components/UI/spinner/spinner';
import {NotFound} from 'src/components/UI/not-found/not-found';
import dayjs from 'dayjs';

export const TopPosts = () => {
  const themeVariant: ColorThemes = useColorTheme();
  const styles = getTopPostsStyles(themeVariant);

  const {loading, error, data} = usePosts({
    variables: {
      input: {
        type: PostFilterType.Top,
      },
    },
  });

  const errorMessage = 'Something went wrong, sorry :(';

  return (
    <ScrollView
      contentContainerStyle={[styles.container, styles.containerBackground]}>
      {loading && (
        <Spinner color={styles.spinnerColor} stroke={styles.spinnerStroke} />
      )}
      {data?.posts?.data &&
        Object.values(data.posts.data).map(post => (
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
        ))}
      {error && <NotFound text={errorMessage} />}
    </ScrollView>
  );
};
