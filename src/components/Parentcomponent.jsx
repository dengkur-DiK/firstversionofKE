 // ParentComponent.jsx
import React from 'react';
import Navbar from './Navbar';
import LoginForm from './Loginform';

const ParentComponent = () => {
  const handleLogin = (credentials) => {
    // Implement login logic here, such as making an API request
    console.log('Logging in with credentials:', credentials);
  };

  return (
    <div>
      <Navbar />
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default ParentComponent;
