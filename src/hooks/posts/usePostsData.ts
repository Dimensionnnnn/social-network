import {useFavouritePosts} from 'src/api/posts/gql/querys/__generated__/get-favourite-posts.qury';
import {usePosts} from 'src/api/posts/gql/querys/__generated__/get-posts.query';
import {PostFilterType} from 'src/shared/types/__generated__/gql-types';
import {showToast} from 'src/utils/serverError';

interface PostsProps {
  type: PostFilterType;
}

export const usePostsData = ({type}: PostsProps) => {
  const {loading, error, data, fetchMore} = usePosts({
    variables: {
      input: {
        type,
        afterCursor: null,
      },
    },
    notifyOnNetworkStatusChange: true,
  });

  const posts = data?.posts?.data;
  const pageAfterCursor = data?.posts?.pageInfo?.afterCursor;

  const loadMorePosts = async () => {
    try {
      await fetchMore({
        variables: {
          input: {
            type,
            afterCursor: pageAfterCursor,
          },
        },
      });
    } catch (e) {
      showToast();
      console.log(e);
    }
  };

  return {
    isLoading: loading,
    isError: !!error,
    posts,
    fetchMore: loadMorePosts,
  };
};

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
      console.log(e);
    }
  };

  return {
    isLoading: loading,
    isError: !!error,
    favouritePosts,
    fetchMore: loadMorePosts,
  };
};
