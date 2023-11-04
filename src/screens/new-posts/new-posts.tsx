import React from 'react';
import {ScrollView} from 'react-native';
import {usePosts} from 'src/api/posts/gql/querys/__generated__/get-posts.query';
import {PostCard} from 'src/components/UI/post-card/post-card';
import {PostFilterType} from 'src/shared/types/__generated__/gql-types';
import {getNewPostsStyles} from './styles';
import {ColorThemes, useColorTheme} from 'src/hooks/useColorTheme';
import dayjs from 'dayjs';

export const NewPosts = () => {
  const themeVariant: ColorThemes = useColorTheme();
  const styles = getNewPostsStyles(themeVariant);

  const {data} = usePosts({
    variables: {
      input: {
        type: PostFilterType.New,
      },
    },
  });

  const getAuthorName = (firstName: string, lastName: string) => {
    if (firstName && lastName) {
      const partLastName = ' ' + lastName[0] + '.';
      return firstName.concat(partLastName);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={[styles.container, styles.containerBackground]}>
      {data?.posts?.data &&
        Object.values(data.posts.data).map(post => (
          <PostCard
            key={post.id}
            title={post.title}
            createdAt={dayjs(post.createdAt).format('DD.MM.YY')}
            description={post.description}
            mediaUrl={post.mediaUrl}
            avatarUrl={post.author.avatarUrl || ''}
            authorName={getAuthorName(
              post.author.firstName || '',
              post.author.lastName || '',
            )}
            likesCount={post.likesCount}
          />
        ))}
    </ScrollView>
  );
};
