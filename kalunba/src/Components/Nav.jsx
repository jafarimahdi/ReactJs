import React from "react";

export default function Nav() {
    const items = ["mission", "project", "about", "community", "contact"];

    return (
        <div id="page-top">
            <nav
                className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top"
                id="mainNav"
            >
                <div className="container" id="navContainer">

                    <a
                        className="navbar-brand js-scroll-trigger"
                        href="#page-top"
                    >
                        <img
                            src="pictures/kalunba/logo-rbg.png"
                            alt="kalunba logo"
                        />
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        Menu
                        <i className="fa fa-bars ml-1"></i>
                    </button>


                    <div
                        className="collapse navbar-collapse"
                        id="navbarResponsive"
                    >
                        <ul className="navbar-nav text-uppercase ml-auto ">
                            {items.map((item) => (
                                <li className="nav-item">
                                    <a
                                        className="nav-link js-scroll-trigger"
                                        href={"#" + item}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                
                </div>

            </nav>
        </div>
    );
}
