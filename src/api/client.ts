import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import Config from 'react-native-config';
import {setContext} from '@apollo/client/link/context';
import {getItemStorage} from 'src/utils/async-storage';
import {TOKEN} from 'src/context/auth-context';
import uniqBy from 'lodash/uniqBy';

const httpLink = createHttpLink({
  uri: Config.API_URL,
});

const authLink = setContext(async (_, {headers}) => {
  const userTokenStorage = await getItemStorage(TOKEN.USER_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: userTokenStorage ? `Bearer ${userTokenStorage}` : '',
    },
  };
});

export const apolloClient = new ApolloClient({
  connectToDevTools: true,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          posts: {
            keyArgs: [
              'data',
              ['id'],
              'pageInfo',
              ['afterCursor'],
              'input',
              ['type'],
            ],
            merge(existing, incoming) {
              const existingData = existing?.data ?? [];
              const incomingData = incoming?.data ?? [];
              const uniqPosts = uniqBy(
                [...existingData, ...incomingData],
                '__ref',
              );

              const result = {...incoming, data: uniqPosts};
              return result;
            },
          },
        },
      },
    },
  }),
});
