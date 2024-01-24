'use client';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
import cartApis from '../_utils/CartApis';

interface CartContextType {
  cart: any[];
  setCart: Dispatch<SetStateAction<any[]>>;
}

const defaultCartValue: CartContextType = {
  cart: [],
  setCart: () => {},
};

const CartContext = createContext<CartContextType>(defaultCartValue);

interface Props {
  children: ReactNode;
}

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      return;
    }
    const getCartItems = async () => {
      const response = await cartApis.getCart();
      setCart(response.data.products);
    };

    getCartItems();
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
