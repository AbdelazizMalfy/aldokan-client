'use client';

import ProductCard from '@/app/_components/ProductCard';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Params {
  params: {
    id: number;
  };
}

export interface Product {
  id: number;
  name: string;
  descriptiom: string;
  price: number;
  unitType: number;
  weightPerUnit?: string;
  image: string;
}

const CategoryProducts = ({ params }: Params) => {
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${
            process.env.NEXT_PUBLIC_API
          }/api/products/category/${encodeURIComponent(params.id)}`,
        );
        setCategoryProducts(response.data);
      } catch (error) {
        console.error('An error occurred: ', error);
        setError('An error occurred while fetching the products.');
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-around">
      {categoryProducts.map((product: Product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default CategoryProducts;
