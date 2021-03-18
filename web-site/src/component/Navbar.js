import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
const [click, setClick] = useState(false);

const handelClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false)

return (
   <>
      <nav className="navbar">
         <div className="navbar-container">
            <Link to="/" className="navbar-logo">
               <img src="images/logo-hat.png" />
            </Link>
            <div className="menu-icon" onClick={handelClick}>
               <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
              {/* Menu items  */}
            <ul className={click ? "nav-menu active" : "nva-menu"}>
               <li className="nav-item">
                  <Link to="/home" className="nav-links" onClick={closeMobileMenu}> Home </Link>
               </li>
               <li className="nav-item">
                  <Link to="/service" className="nav-links" onClick={closeMobileMenu}> Service </Link>
               </li>
               <li className="nav-item">
                  <Link to="/product" className="nav-links" onClick={closeMobileMenu}> Product </Link>
               </li>
               <li className="nav-item">
                  <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}> Sign Up </Link>
               </li>
            </ul>
         </div>
      </nav>
   </>
);
}

export default Navbar;
