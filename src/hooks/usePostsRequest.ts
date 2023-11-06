import {usePosts} from 'src/api/posts/gql/querys/__generated__/get-posts.query';
import {PostFilterType} from 'src/shared/types/__generated__/gql-types';

interface PostsProps {
  type: PostFilterType;
}

export const usePostsRequest = ({type}: PostsProps) => {
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
