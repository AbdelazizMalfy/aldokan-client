'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

interface Category {
  id: number;
  name: string;
}

const CategoriesList = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/api/categories`,
        );
        setCategories(response.data);
      } catch (e) {
        console.error(e);
        setError('Failed to fetch categories');
      }
    };

    fetchCategories();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <p>Categories</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category: Category) => (
          <CategoryCard
            key={category.id}
            categoryName={category.name}
            id={category.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
