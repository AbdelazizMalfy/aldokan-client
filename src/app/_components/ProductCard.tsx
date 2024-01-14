'use client';

import Link from 'next/link';
import { Product } from '../categories/[id]/page';
// import Image from 'next/image';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="border rounded-lg p-10">
      <Link
        // className="bg-white rounded-lg p-6 cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-2xl m-3 border border-2 border-solid border-gray-300"
        href={`/products/${product.id}`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="mb-5"
          width={'200px'}
          height={'200px'}
        />
        <div className="w-100 grid grid-cols-2 gap-14">
          <div>
            <div>
              <strong>{product.price} €</strong>
            </div>
            <div>{product.name}</div>
            <div>{product.weightPerUnit && product.weightPerUnit}</div>
          </div>
          <button
            className="btn btn-primary btn-circle w-[50px]"
            onClick={(e) => {
              e.preventDefault();
              console.log('added to card');
            }}
          >
            +
          </button>
        </div>
      </Link>
    </div>
  );
}
