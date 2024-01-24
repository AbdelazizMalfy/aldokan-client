import React, { ReactNode } from 'react';
import { UserProvider } from './UserContext';
import { AuthProvider } from './AuthContext';
import { CartProvider } from './CartContext';

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <CartProvider>{children}</CartProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
