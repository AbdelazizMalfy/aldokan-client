import React from 'react';
import Link from 'next/link';
import { useCart } from '../_context/CartContext';
function Cart() {
  const { cart } = useCart();

  if (!cart || cart.length === 0) {
    return null;
  }

  return (
    <div className="card-body">
      <ul className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <img
              src={item?.product?.image}
              alt=""
              className="object-cover w-16 h-16 rounded"
            />
            <div>
              <span className="font-bold text-lg">{item?.product?.name}</span>
              <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                <div>
                  <dt className="inline">Qantity: </dt>
                  <dd className="inline">{item?.quantity}</dd>
                </div>

                <div>
                  <dt className="inline">Price: </dt>
                  <dd className="inline text-info">{item?.product?.price} €</dd>
                </div>
              </dl>
            </div>
          </div>
        ))}
      </ul>
      <div className="card-actions">
        <Link href="/cart" className="btn btn-primary btn-block">
          View cart
        </Link>
      </div>
    </div>
  );
}

export default Cart;
