import React from 'react';
import { createRoot } from 'react-dom/client'; // Corrected import statement
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';


const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement); // Use createRoot directly
  root.render(
    <Auth0Provider
  domain='dev-dr5jklybipknhscm.us.auth0.com'
  clientId='nDle2JGGtdca52IkOnPw3Q9EUSTaGKo5'
  authorizationParams={{ redirect_uri: window.location.origin }}>
  <App />
</Auth0Provider>
);
}
