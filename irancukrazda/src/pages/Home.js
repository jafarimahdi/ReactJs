import React from "react";
import "../App.scss";
import Cards from "../component/Cards";
import { About } from "../component/About";
import Herosection from "../component/Herosection";
import Our_product from "../component/Our_product";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <Herosection />
            <About />
            {/* <Cards /> */}
            <Our_product />

            <Link to="/product" className="button-more">
                <button>More</button>
            </Link>
        </div>
    );
}
export default Home;
