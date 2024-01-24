import axiosClient from './axiosClient';

const getCategories = async () => await axiosClient.get('/categories');

export default {
  getCategories,
};
