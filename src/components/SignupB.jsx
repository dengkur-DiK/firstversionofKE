// SignupButton.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignup = () => {
    loginWithRedirect({
      screen_hint: 'signup' 
    });
  };

  return (
    <button onClick={handleSignup} className="btn btn-primary">
      Sign Up
    </button>
  );
};

export default SignupButton;
