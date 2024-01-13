import React from 'react';
import styles from './GoogleLoginButton.module.css';

interface Props {
  onClick: () => Promise<void>;
}

const GoogleLoginButton = (props: Props) => {
  return (
    <button className={styles.googleLoginButton} onClick={props.onClick}>
      <img
        className={styles.googleLogo}
        src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
        alt="Google logo"
      />
      Continue with Google
    </button>
  );
};

export default GoogleLoginButton;
