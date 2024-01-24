import React, { useEffect } from 'react';
import Cart from './Cart';
import { useCart } from '../_context/CartContext';
import { useAuth } from '../_context/AuthContext';

const ShoppingCartIcon = () => {
  const { cart } = useCart();
  const [totalQantity, setTotalQantity] = React.useState<number>(0);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      setTotalQantity(
        cart?.reduce((acc, item) => {
          return acc + item.quantity;
        }, 0),
      );
    } else {
      setTotalQantity(0);
    }
  }, [cart, isLoggedIn]);

  return (
    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">
              {totalQantity}
            </span>
          </div>
        </div>

        <div
          tabIndex={0}
          className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartIcon;
