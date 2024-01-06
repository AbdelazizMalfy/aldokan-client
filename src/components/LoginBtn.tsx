'use client';

import axios from 'axios';
import React, { useState, useRef } from 'react'; // Import useRef
import { useAuth } from '../context/authContext';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import { GoogleLogin } from '@react-oauth/google';
// import { GoogleLogin } from '@react-oauth/google';

interface ModelRef {
  current: HTMLDialogElement | null;
}

const LoginBtn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const modalRef: ModelRef = useRef<HTMLDialogElement>(null);
  const { setIsLoggedIn } = useAuth();

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
      console.log('Login successful:', response);
      localStorage.setItem('accessToken', response.data.access_token);
      localStorage.setItem('refreshToken', response.data.refresh_token);
      setIsLoggedIn(true);
      setEmail('');
      setPassword('');
      closeModal();
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  // const handlLoginWithGoogle = async () => {
  //   window.location.href = `${process.env.NEXT_PUBLIC_API}/api/auth/google`;
  // try {
  //   const response = await axios.post(
  //     `${process.env.NEXT_PUBLIC_API}/api/auth/google`,
  //   );
  //   console.log('Login successful:', response);
  // } catch (error) {
  //   console.error('An error occurred during login:', error);
  // }
  // };

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
          {/* <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_CLIENT_ID as string}
          >
            <div className="my-5">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log('response =>', credentialResponse);
                  // const details = jwt_decode(credentialResponse.credential);
                  // console.log(details);
                }}
                theme="outline"
                onError={() => {
                  console.log('Login Failed');
                }}
                // login_uri={`${process.env.NEXT_PUBLIC_API}/api/auth/google`}
                // redirect_uri={`${process.env.NEXT_PUBLIC_API}/api/auth/google/callback`}
              />
            </div>
          </GoogleOAuthProvider> */}
          {/* <button className="google-btn" onClick={() => handlLoginWithGoogle()}>
            <div className="google-icon-wrapper">GOOGLE</div>
            <p className="btn-text">
              <b>Sign in with Google</b>
            </p>
          </button> */}
        </div>
      </dialog>
    </>
  );
};

export default LoginBtn;
