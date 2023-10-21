import { useRouter } from 'next/router';
import { useAuthContext } from '../../contexts/AuthContextFile/AuthContext';
import Spinner from '../Spinner/Spinner';
import React, { useState, useEffect } from 'react';

export const ProtectRoute = ({ children }: any) => {
  const router = useRouter();
  const { user } = useAuthContext();

  if (typeof window !== 'undefined') {
    const isLoggedIn = user.phone ? true : false;

    if (isLoggedIn && window.location.pathname === '/login') {
      router.push('/profile');
    } else if (!isLoggedIn && window.location.pathname.startsWith('/profile')) {
      router.push('/login');
    }
  }

  return children;
};
