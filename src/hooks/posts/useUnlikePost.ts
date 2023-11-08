import {usePostUnlike} from 'src/api/posts/gql/mutations/__generated__/post-unlike.mutation';

export const useUnlikePost = (id: string) => {
  const [postUnlike, {data, loading, error}] = usePostUnlike({
    variables: {
      input: {
        id,
      },
    },
  });

  return {
    postUnlike,
    dataUnlike: data,
    loadingUnlike: loading,
    errorUnlike: error,
  };
};
