import React, { useState } from 'react';
import './Index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginForm from './Loginform'; 
import './Loginform.css';
import './SearchCards.css';
import SearchResultsList from './SearchResultsList';
import { FaSearch } from "react-icons/fa";
import "./SearchCards.css";

const Navbar = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Kurino Electronics</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {isAuthenticated && (
                <span className="nav-link">Welcome, {user?.name}!</span>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const SearchCards = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
         const results = json.filter((user) => {
          return(
              value &&
               user&& 
               user.name 
               && user.name.toLowerCase().includes(value)
               );
         });
         setResults(results);
      });
  };
  
   const handleChange = (value) => {
      setInput(value)
      fetchData(value)
   }
  
    return (
      <div className="wrapper">
        <FaSearch id="icon" />
        <input
          type="text"
          placeholder="Search for electronics"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    );
  };
  

const Homepage = () => {
  const [results, setResults] = useState([]);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="homepage">
      <nav className="sidebar">
        <img src="/Kurino.png" alt="Logo" className="logo" />
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://localhost:5173/pages/Oppo">Oppo</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://localhost:5173/pages/Infinix">Infinix</a>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-primary nav-link"
              onClick={toggleLoginForm}
            >
              Log In
            </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-secondary nav-link">
              Sign Up
            </button>
          </li>
        </ul>
      </nav>

      
      
      <div className="main-content">
        <h1>Kurino Electronics</h1>
        <SearchCards setResults={setResults} /> 
        <SearchResultsList results={results} />
        <div>
          
          <p className="500">
            Welcome to Kurino Electronics, South Sudan's premier online destination for cutting-edge tech! <br />
            🌟 Discover a curated collection of phones, laptops, TVs, and more—all at your fingertips. Whether you're a gadget enthusiast or a casual shopper, we've got you covered. <br />
            Fast shipping, secure payments, and top-notch customer service await you. Dive into the future with Kurino! 🚀📱💻
          </p>
          <h4>Welcome Customer</h4>
        </div>
      </div>

      {showLoginForm && (
        <div>
          <div className="login-overlay" onClick={toggleLoginForm}></div>
          <LoginForm />
        </div>
      )}
    </div>
  );
};

export default Homepage;
