'use client';

import React, { FC } from 'react';
import { useCart } from '../_context/CartContext';
import cartApis from '../_utils/CartApis';
import { useRouter } from 'next/navigation';
import { useAuth } from '../_context/AuthContext';

interface Props {
  productId: number;
}

const AddToCartBtn: FC<Props> = ({ productId }) => {
  const { cart, setCart } = useCart();
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  const onClickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!isLoggedIn) {
      router.push('/login');
      return;
    }

    await cartApis.addToCart({ productId, quantity: 1 });

    const updateCart = () => {
      let isProductInCart = false;
      const updatedCart = cart.map((item) => {
        if (item.product.id === productId) {
          isProductInCart = true;
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      if (!isProductInCart) {
        return [...cart, { productId, quantity: 1 }];
      }

      return updatedCart;
    };

    setCart(updateCart());
  };

  return (
    <button
      className="btn btn-primary btn-circle w-[50px]"
      onClick={onClickHandler}
    >
      +
    </button>
  );
};

export default AddToCartBtn;
