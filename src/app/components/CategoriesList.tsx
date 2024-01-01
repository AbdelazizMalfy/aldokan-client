import axios from 'axios';
import React from 'react';
import CategoryCard from './CategoryCard';

interface Category {
  id: number;
  name: string;
}

const CategoriesList = async () => {
  let categories: Category[] = [];

  try {
    const response = await axios.get(`${process.env.API}/api/categories`);
    categories = response.data;
  } catch (e) {
    console.error(e);
  }

  return (
    <div>
      <p>Categories</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category: Category) => {
          return (
            <CategoryCard
              key={category.id}
              categoryName={category.name}
              id={category.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesList;
