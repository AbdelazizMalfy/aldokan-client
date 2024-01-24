import axiosClient from './axiosClient';

interface AuthLoginPayload {
  email: string;
  password: string;
}

const login = async (payload: AuthLoginPayload) =>
  await axiosClient.post(
    `${process.env.NEXT_PUBLIC_API}/api/auth/login`,
    payload,
  );

export default {
  login,
};
