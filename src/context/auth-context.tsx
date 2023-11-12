import React, {createContext, useState, useEffect} from 'react';
import {
  setItemStorage,
  getItemStorage,
  removeItemStorage,
} from 'src/utils/async-storage';
import {apolloClient} from 'src/api/client';
import {showToast} from 'src/utils/serverError';

export enum USER_INFO {
  USER_TOKEN = 'userToken',
  USER_EMAIL = 'userEmail',
}

interface UserInfo {
  userToken: string | null;
  userEmail: string | null;
}

export interface AuthContextProps {
  userInfo: UserInfo | null;
  authenticate: (token: string, email: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  userInfo: null,
  authenticate: () => {},
  logout: () => {},
});

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const authenticate = (token: string, email: string) => {
    setUserInfo({userToken: token, userEmail: email});
    setItemStorage(USER_INFO.USER_TOKEN, token);
    setItemStorage(USER_INFO.USER_EMAIL, email);
  };

  const logout = () => {
    setUserInfo(null);
    removeItemStorage('userToken');
    apolloClient.cache.reset();
  };

  const setStorageToken = async () => {
    try {
      const userTokenStorage = await getItemStorage(USER_INFO.USER_TOKEN);
      const userEmailStorage = await getItemStorage(USER_INFO.USER_EMAIL);
      setUserInfo({userToken: userTokenStorage, userEmail: userEmailStorage});
    } catch (e) {
      showToast();
    }
  };

  useEffect(() => {
    setStorageToken();
  }, []);

  return (
    <AuthContext.Provider value={{userInfo, authenticate, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
