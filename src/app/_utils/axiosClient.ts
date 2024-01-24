import axios from 'axios';

const apiUrl = `${process.env.NEXT_PUBLIC_API}/api`;

const axiosClient = axios.create({
  baseURL: apiUrl,
});

axiosClient.interceptors.request.use((config) => {
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export default axiosClient;
