'use client';

import Link from 'next/link';
import { FC } from 'react';

interface Props {
  categoryName: string;
  id: number;
}

const CategoryCard: FC<Props> = ({ id, categoryName }) => {
  return (
    <Link href={`/categories/${id}`}>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{categoryName}</h2>
        </div>
        <figure>
          <img
            src="https://res.akamaized.net/domain/image/fetch/t_web/https://static.domain.com.au/twr/production/uploads/content-watched/818292_Large.jpg"
            alt="Fruits"
          />
        </figure>
      </div>
    </Link>
  );
};

export default CategoryCard;
