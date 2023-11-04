import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import Config from 'react-native-config';
import {setContext} from '@apollo/client/link/context';
import {getItemStorage} from 'src/utils/async-storage';
import {TOKEN} from 'src/context/auth-context';

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
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
