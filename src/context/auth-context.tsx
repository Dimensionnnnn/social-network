import React, {createContext, useState, useEffect} from 'react';
import {
  setItemStorage,
  getItemStorage,
  removeItemStorage,
} from 'src/utils/async-storage';
import {apolloClient} from 'src/api/client';

export interface AuthContextProps {
  userToken: string | null;
  authenticate: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  userToken: null,
  authenticate: () => {},
  logout: () => {},
});

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [userToken, setUserToken] = useState<string | null>(null);

  const authenticate = (token: string) => {
    setUserToken(token);
    setItemStorage('userToken', token);
  };

  const logout = () => {
    setUserToken(null);
    removeItemStorage('userToken');
    apolloClient.cache.reset();
  };

  const setStorageToken = async () => {
    try {
      const userTokenStorage = await getItemStorage('userToken');
      setUserToken(userTokenStorage);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setStorageToken();
  }, []);

  return (
    <AuthContext.Provider value={{userToken, authenticate, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
