import {useFavouritePosts} from 'src/api/posts/gql/querys/__generated__/get-favourite-posts.qury';
import {showToast} from 'src/utils/serverError';

export const useFavouritePostsRequest = () => {
  const {data, loading, error, fetchMore} = useFavouritePosts({
    variables: {
      input: {
        afterCursor: null,
      },
    },
    notifyOnNetworkStatusChange: true,
  });

  const favouritePosts = data?.favouritePosts?.data;
  const pageAfterCursor = data?.favouritePosts?.pageInfo?.afterCursor;

  const loadMorePosts = async () => {
    try {
      await fetchMore({
        variables: {
          input: {
            afterCursor: pageAfterCursor,
          },
        },
      });
    } catch (e) {
      showToast();
    }
  };

  return {
    isLoading: loading,
    isError: !!error,
    favouritePosts,
    fetchMore: loadMorePosts,
  };
};
