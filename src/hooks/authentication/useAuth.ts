import {useContext} from 'react';
import {AuthContext, AuthContextProps} from 'src/context/auth-context';

export const useAuth = (): AuthContextProps => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return authContext;
};
