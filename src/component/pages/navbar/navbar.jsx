import "./navbar.css";
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";


function Navbar() {
  const pages = ["home", "about", "game", "hola"];

  return (
    <div className="navbar">
        <div>
        <img src="/vite.svg" alt="" />
      </div>
      <div>

      {pages.map((pagePath) => (
          <Link to={pagePath}>
            <button>{pagePath}</button>
          </Link>
        ))}
      </div>
    
      
    </div>
  );
}

export default Navbar;
