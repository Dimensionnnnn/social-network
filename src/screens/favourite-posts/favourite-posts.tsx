import React from 'react';
import {useFavouritePostsRequest} from 'src/hooks/usePostsRequest';
import {Header} from 'src/components/header/header';
import {PostsList} from 'src/components/posts-list/posts-list';

export const FavouritePosts = () => {
  const {isLoading, isError, favouritePosts, fetchMore} =
    useFavouritePostsRequest();

  return (
    <>
      <Header headerInfo="Favorites" />
      <PostsList
        isLoading={isLoading}
        isError={isError}
        data={favouritePosts}
        fetchMore={fetchMore}
      />
    </>
  );
};
