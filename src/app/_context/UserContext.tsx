'use client';

import axios from 'axios';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

interface User {
  id: number;
  firstName: string;
  email: string;
  lastName: string;
  address?: string;
  phone?: string;
  created: Date;
  updated: Date;
  role: 'admin' | 'user';
  avatar?: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const defaultUser: User | null = null;

const UserContext = createContext<UserContextType>({
  user: defaultUser,
  setUser: () => {},
});

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    //TODO: add util function to get accessTokens
    const token = localStorage.getItem('accessToken');

    if (!token) {
      return;
    }

    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/api/users/current`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setUser(response.data);
    };

    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
