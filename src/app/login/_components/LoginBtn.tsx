import React from 'react';
import LoginModal from './LoginModal';

const LoginBtn = () => {
  const id = 'login_modal_btn';

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          (document?.getElementById(id) as HTMLDialogElement)?.showModal();
        }}
      >
        Login
      </button>
      <LoginModal id={id} />
    </>
  );
};

export default LoginBtn;
