'use client';

import Link from 'next/link';
import { Product } from '../app/categories/[id]/page';
// import Image from 'next/image';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Link
      // className="bg-white rounded-lg p-6 cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-2xl m-3 border border-2 border-solid border-gray-300"
      href={`/products/${product.id}`}
    >
      <img
        src={
          'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg'
        }
        alt={product.name}
        className="mb-5"
        width={'135'}
        height={'135'}
      />
      <div>
        <strong>{product.price} €</strong>
      </div>
      <div>{product.name}</div>
      <div>{product.weightPerUnit && product.weightPerUnit}</div>
    </Link>
  );
}
