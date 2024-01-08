'use client';

import axios from 'axios';
import React, { useState, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import GoogleLoginButton from './GoogleLoginButton';
interface ModelRef {
  current: HTMLDialogElement | null;
}

const LoginBtn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const modalRef: ModelRef = useRef<HTMLDialogElement>(null);
  const { setIsLoggedIn } = useAuth();

  const googleLogin = async () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API}/api/auth/google`;
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/api/auth/login`,
        { email, password },
      );
      localStorage.setItem('accessToken', response.data.access_token);
      localStorage.setItem('refreshToken', response.data.refresh_token);
      setIsLoggedIn(true);
      setEmail('');
      setPassword('');
      closeModal();
      //TODO: redirect to home page and show success message
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  const handleOutsideClick = (event: React.MouseEvent) => {
    if (event.target === modalRef.current) {
      closeModal();
    }
  };

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => modalRef.current?.showModal()}
      >
        Login
      </button>
      <dialog
        id="my_modal_1"
        className="modal"
        ref={modalRef}
        onClick={handleOutsideClick}
      >
        <div className="modal-box">
          <form onSubmit={handleLogin}>
            {/* Title for your form */}
            <h3 className="font-bold text-lg">Login to Your Account</h3>

            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="input input-bordered"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>

          <div>
            <GoogleLoginButton onClick={() => googleLogin()} />
          </div>
        </div>
      </dialog>
    </>
  );
};

export default LoginBtn;
