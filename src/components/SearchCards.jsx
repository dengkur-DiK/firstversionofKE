import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchCards.css";

export const SearchCards = ({setResults}) => {
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
