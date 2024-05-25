 // src/components/AuthenticationButton.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationButton = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <button
          className="btn btn-primary"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log Out
        </button>
      ) : (
        <button
          className="btn btn-primary"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
      )}
    </>
  );
};

export default AuthenticationButton;
