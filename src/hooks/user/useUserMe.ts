import {useUserMe} from 'src/api/user/gql/querys/__generated__/user-me.query';
import {useAuth} from '../authentication/useAuth';

export const useUserMeRequest = () => {
  const {data, error} = useUserMe();
  const {logout} = useAuth();

  const user = data?.userMe;

  if (error) {
    logout();
  }

  return {
    user,
  };
};
