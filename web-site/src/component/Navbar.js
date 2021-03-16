import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
      <>
        <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className="navbar-logo">
                <image src="images/logo-hat.png"/>
                <h1>hello </h1>
              </Link>
            </div>
        </nav>
      </>
  );
}

export default Navbar;
