import uniqBy from 'lodash/uniqBy';
import {FavouritePosts} from 'src/api/posts/gql/querys/__generated__/get-favourite-posts.qury';
import {Posts} from 'src/api/posts/gql/querys/__generated__/get-posts.query';

type CustomFavourite = FavouritePosts['favouritePosts'];
type CustomPosts = Posts['posts'];

interface Props {
  existing: CustomFavourite | CustomPosts;
  incoming: CustomFavourite | CustomPosts;
}

export const merge = ({existing, incoming}: Props) => {
  const existingData = existing?.data ?? [];
  const incomingData = incoming?.data ?? [];
  const uniqPosts = uniqBy([...existingData, ...incomingData], '__ref');

  const result = {...incoming, data: uniqPosts};
  return result;
};
