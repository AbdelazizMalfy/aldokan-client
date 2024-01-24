'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '../_context/AuthContext';
import { useUser } from '@/app/_context/UserContext';
import LoginBtn from '../login/_components/LoginBtn';
import Image from 'next/image';
import ShoppingCartIcon from './ShoppingCartIcon';

const NavBar = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const { user, setUser } = useUser();

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <div className="navbar px-8 bg-secondary text-primary text-xl shadow-md">
      <div className="flex-1 btn-circle btn-ghost">
        <Link href={'/'} className="text-xl">
          <Image width="140" height="140" src="/logo-custom.png" alt="logo" />
        </Link>

        <div className="flex-1" />

        <ShoppingCartIcon />

        {!isLoggedIn ? (
          <LoginBtn />
        ) : (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {/* TODO: add user avatar component to return default avatar if not found */}
                {user?.avatar ? (
                  <img alt="Avatar" src={user.avatar} />
                ) : (
                  <img
                    alt="Avatar"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={() => logout()}>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
