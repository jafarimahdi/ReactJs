import React from "react";

function Nav() {
   const items = ["services", "portfolio", "about", "team", "contact"];

   return (
      <nav
         className="navbar navbar-expand-lg navbar-dark bg-dark  fixed-top"
         id="mainNav"
      >
         <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
               <img src="assets/img/navbar-logo.svg" alt="" />
            </a>
            <button
               className="navbar-toggler navbar-toggler-right"
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

            <div className="collapse navbar-collapse" id="navbarResponsive">
               <ul className="navbar-nav text-uppercase ml-auto ">
                  {items.map((item) => (
                     <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href={"#" + item}> {item}</a>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </nav>
   );
}

export default Nav;
