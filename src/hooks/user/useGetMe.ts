import {useUserMe} from 'src/api/user/gql/querys/__generated__/user-me.query';
import {useAuth} from '../authentication/useAuth';
import {authenticationError} from 'src/constants/apollo-errors';
import {showToast} from 'src/utils/serverError';
import {authenticationErroeMessage} from 'src/constants/notificationMessages';

export const useGetMeRequest = () => {
  const {data, error} = useUserMe();
  const {logout} = useAuth();

  const user = data?.userMe;

  if (error?.message === authenticationError) {
    showToast({message: authenticationErroeMessage});
    logout();
  }

  return {
    user,
  };
};
