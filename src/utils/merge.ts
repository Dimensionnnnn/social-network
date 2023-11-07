import uniqBy from 'lodash/uniqBy';

type DataFields = {
  __typename?: string;
  data?: [{__ref: string}];
  pageInfo?: {
    __typename?: string;
    afterCursor?: string;
  };
};

interface Props {
  existing: DataFields;
  incoming: DataFields;
}

export const merge = ({existing, incoming}: Props) => {
  const existingData = existing?.data ?? [];
  const incomingData = incoming?.data ?? [];
  const uniqPosts = uniqBy([...existingData, ...incomingData], '__ref');

  const result = {...incoming, data: uniqPosts};
  return result;
};
