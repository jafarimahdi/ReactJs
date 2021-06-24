import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    // window.addEventListener('resize',showButton);
    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    IranCukrazda
                </Link>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item ">
                        <Link
                            to="/"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            <i className="fas fa-home" />
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="/about"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/product"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Product
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="/contact"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
            </nav>
        </>
    );
}

export default Navbar;
