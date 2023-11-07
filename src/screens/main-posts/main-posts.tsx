import React from 'react';
import {usePostsRequest} from 'src/hooks/usePostsRequest';
import {PostFilterType} from 'src/shared/types/__generated__/gql-types';
import {RouteProp} from '@react-navigation/native';
import {PostsList} from 'src/components/posts-list/posts-list';

type MainPostsRouteProp = RouteProp<
  {MainPosts: {type: PostFilterType}},
  'MainPosts'
>;

export const MainPosts = ({route}: {route?: MainPostsRouteProp}) => {
  const {type} = route!.params;
  const {isLoading, isError, posts, fetchMore} = usePostsData({
    type,
  });

  return (
    <PostsList
      isLoading={isLoading}
      isError={isError}
      data={posts}
      fetchMore={fetchMore}
    />
  );
};
