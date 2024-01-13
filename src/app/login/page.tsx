'use client';

import React, { useEffect } from 'react';
import LoginModal from './_components/LoginModal';
import { useUser } from '../_context/UserContext';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const id = 'login_modal_page';
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    (document?.getElementById(id) as HTMLDialogElement)?.showModal();
  }, []);

  useEffect(() => {
    user && router.push('/');
  }, [user]);

  const onSuccess = () => {
    router.push('/');
  };

  return <LoginModal id={id} onSuccess={() => onSuccess()} />;
};

export default LoginPage;
