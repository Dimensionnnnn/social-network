import {usePostLike} from 'src/api/posts/gql/mutations/__generated__/post-like.mutation';

export const useLikePost = (id: string) => {
  const [postLike, {data, loading, error}] = usePostLike({
    variables: {
      input: {
        id,
      },
    },
  });

  return {
    postLike,
    dataLike: data,
    loadingLike: loading,
    errorLike: error,
  };
};
