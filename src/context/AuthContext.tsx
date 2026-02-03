import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  isLoggedIn: boolean;
  user: User | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  isBootstrapping: boolean;
  authLoading: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  login: async () => {},
  logout: async () => {},
  isBootstrapping: true,
  authLoading: false,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isBootstrapping, setIsBootstrapping] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
    bootstrap();
  }, []);

  const bootstrap = async () => {
    try {
      const value = await AsyncStorage.getItem('isLoggedIn');
      const userData = await AsyncStorage.getItem('user');

      if (value === 'true' && userData) {
        setIsLoggedIn(true);
        setUser(JSON.parse(userData));
      }
    } finally {
      setIsBootstrapping(false);
    }
  };

  const login = async () => {
    if (authLoading) return;

    setAuthLoading(true);

    await new Promise<void>(resolve => {
      setTimeout(() => resolve(), 1000);
    });

    const fakeUser: User = {
      name: 'Divyanshu Tandon',
      email: 'divyanshu@email.com',
    };

    await AsyncStorage.multiSet([
      ['isLoggedIn', 'true'],
      ['user', JSON.stringify(fakeUser)],
    ]);

    setUser(fakeUser);
    setIsLoggedIn(true);
    setAuthLoading(false);
  };

  const logout = async () => {
    await AsyncStorage.multiRemove(['isLoggedIn', 'user']);
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        login,
        logout,
        isBootstrapping,
        authLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
