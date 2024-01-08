'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const SaveTokensPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const accessToken = searchParams.get('accessToken') as string;
    const refreshToken = searchParams.get('refreshToken') as string;

    if (!accessToken) {
      //TODO: add error handling
      console.log('No access token found');
    }

    if (!refreshToken) {
      //TODO: add error handling
      console.log('No refresh token found');
    }

    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('accessToken', accessToken);
  }, [searchParams]);

  router.push('/');
};

export default SaveTokensPage;
