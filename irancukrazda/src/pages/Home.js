import React from "react";
import Cards from "../component/Cards";
import { About } from "../component/About";
// import Herosection from "../component/Herosection";
import Our_product from "../component/Our_product";
import { Link } from "react-router-dom";
import "../App.scss";

function Home() {
    return (
        <>
            <video className="video" src="./2.mp4" autoPlay loop muted />

            <div className="home-page">
                {/* <Herosection /> */}
                <div className="hero-text">
                    <h1>Iran Cukrazda</h1>
                    <h5>DESERT SHOP</h5>
                </div>
                <About />
                <div className="pang">

                    <div className="text">
                        <h5>
                            I Can Imagine Hell like this: Italian punctuality,
                            German humour, English Wine and a bite of Persian
                            Sweets
                        </h5>
                        <p>PETER USTINOV</p>
                    </div>
                </div>
                <Our_product />

                <Link to="/product" className="button-more">
                    <button>More</button>
                </Link>
            </div>
        </>
    );
}
export default Home;
