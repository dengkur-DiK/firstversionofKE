import React, { useState } from 'react';
import axios from 'axios';
import { Auth0Provider } from '@auth0/auth0-react';

const AuthComponent = () => {
  const [error, setError] = useState(null);

  const authenticateUser = async (email, password) => {
    try {
      const response = await axios.post('https://dev-dr5jklybipknhscm.us.auth0.com/oauth/token', {
        grant_type: 'password',
        username: email,
        password: password,
        client_id: 'nDle2JGGtdca52IkOnPw3Q9EUSTaGKo5',
        client_secret: 'Ozx-69-W7tnIed1EGD5sOcOfWuMiPThxTdcWZhiLLwYaq-5OXL8DtF-rNmySlnJt',
        audience: 'http://Dengkur-DiK/',
      });
      
      const accessToken = response.data.access_token;
      console.log('Authenticated successfully:', accessToken);
      
      // Redirect to the desired URI after successful authentication
      window.location.href = 'http://localhost:5173/pages/Airpods';

      return accessToken;
    } catch (error) {
      console.error('Authentication failed:', error);
      setError("Authentication failed. Please try again.");
      throw error;
    }
  };

  // Example usage within the component
  const handleLogin = async () => {
    const email = 'user@example.com';
    const password = 'password123';
    try {
      // Call the authentication function
      await authenticateUser(email, password);
    } catch (error) {
      // Authentication failed, handle the error
      setError("Authentication failed. Please try again.");
    }
  };

  return (
    <div>
      {/* Display error message if there's any */}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      
      {/* Your JSX content here */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default AuthComponent;
