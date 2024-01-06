'use client';

import Link from 'next/link';

export default function CategoryCard(props: {
  categoryName: string;
  id: number;
}) {
  return (
    <Link
      className="bg-white rounded-lg p-6 cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-2xl m-3 border border-2 border-solid border-gray-300"
      href={`/categories/${props.id}`}
    >
      <div className="flex flex-col items-center">
        <div className="bg-orange-500 rounded-full p-4 text-2xl font-bold text-white mb-4">
          {props.categoryName[0].toUpperCase()}
        </div>
        <div className="text-lg font-semibold">{props.categoryName}</div>
      </div>
    </Link>
  );
}
