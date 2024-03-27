 // src/components/Login.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginForm from './Loginform'; // Import the new component

const Navbar= () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleLogin = (userData) => {
    // Handle login logic (e.g., call an API, set user state, etc.)
    console.log('User data:', userData);
    // For now, just log the user data
  };

  if (!isAuthenticated) {
    return (
      <div className="center-button">
        {/* Render the LoginForm component */}
        <LoginForm onLogin={handleLogin} />
      </div>
    );
  }

  // Rest of your existing code for authenticated users
  return (
    <div>
      <p>Welcome, {user.name}!</p>
      {/* Add other user-related components or navigation here */}
    </div>
  );
};

export default Navbar;
