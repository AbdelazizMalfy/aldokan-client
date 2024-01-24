import axiosClient from './axiosClient';

interface getProductsByCategoryPayload {
  id: number;
}

const getProductsByCategory = async (payload: getProductsByCategoryPayload) =>
  await axiosClient.get(
    `${process.env.NEXT_PUBLIC_API}/api/products/category/${encodeURIComponent(
      payload.id,
    )}`,
  );

export default {
  getProductsByCategory,
};
