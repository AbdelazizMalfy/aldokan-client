import axiosClient from './axiosClient';

interface AddToCartPayload {
  productId: number;
  quantity: number;
}

const addToCart = (payload: AddToCartPayload) =>
  axiosClient.post('/cart/add', payload);

const getCart = async () => await axiosClient.get(`/cart`);

export default {
  addToCart,
  getCart,
};
