import {useMyPosts} from 'src/api/posts/gql/querys/__generated__/get-my-posts.query';
import {showToast} from 'src/utils/serverError';

export const useMyPostsData = () => {
  const {data, loading, error, fetchMore} = useMyPosts({
    variables: {
      input: {
        afterCursor: null,
      },
    },
    notifyOnNetworkStatusChange: true,
  });

  const myPosts = data?.myPosts?.data;
  const pageAfterCursor = data?.myPosts?.pageInfo?.afterCursor;

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
      console.log(e);
    }
  };

  return {
    isLoading: loading,
    isError: !!error,
    myPosts,
    fetchMore: loadMorePosts,
  };
};
