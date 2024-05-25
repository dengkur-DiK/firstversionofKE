import React, { useState } from 'react';


const Navbar = () => {
  const { isAuthenticated, user } = useAuth0();
  const [showLoginForm, setShowLoginForm] = useState(false); // State to control login form visibility

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/"></a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {isAuthenticated && (
                <span className="nav-link">Welcome, {user.name}!</span>
              )}
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {!isAuthenticated && (
                <button
                  className="btn btn-primary mr-2"
                  onClick={toggleLoginForm} // Toggle login form visibility on button click
                >
                  Log In
                </button>
              )}
            </li>
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
      {showLoginForm && (
        <div>
          <div className="login-overlay" onClick={toggleLoginForm}></div>
          <LoginForm />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

