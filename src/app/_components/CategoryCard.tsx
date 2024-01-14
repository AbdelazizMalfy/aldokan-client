'use client';

import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';

interface Props {
  id: number;
  name: string;
  image: string;
}

const CategoryCard: FC<Props> = ({ id, name, image }) => {
  return (
    <Link href={`/categories/${id}`}>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
        </div>
        <figure>
          <img
            style={{ width: '300px', height: '200px' }}
            src={image}
            alt="Fruits"
          />
        </figure>
      </div>
    </Link>
  );
};

export default CategoryCard;
