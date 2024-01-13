'use client';

import GoogleLoginButton from '@/app/_components/GoogleLoginButton';
import { useAuth } from '@/app/_context/AuthContext';
import axios from 'axios';
import React, { FC, useRef, useState } from 'react';

interface Props {
  id: string;
  onSuccess?: () => void;
}

interface ModelRef {
  current: HTMLDialogElement | null;
}

const LoginModal: FC<Props> = ({ id, onSuccess }) => {
  const modalRef: ModelRef = useRef<HTMLDialogElement>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLoggedIn } = useAuth();

  const googleLogin = async () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API}/api/auth/google`;
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
      if (onSuccess) {
        onSuccess();
      }
      closeModal();

      //TODO: redirect to home page and show success message
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  return (
    <dialog id={id} className="modal" ref={modalRef}>
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
            <button onClick={(e) => handleLogin(e)} className="btn btn-primary">
              Login
            </button>
          </div>
        </form>

        <div>
          <GoogleLoginButton onClick={() => googleLogin()} />
        </div>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default LoginModal;
