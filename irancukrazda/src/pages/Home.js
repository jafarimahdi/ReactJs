import React from "react";
import "../App.scss";
import Cards from "../component/Cards";
import { About } from "../component/About";
import Herosection from "../component/Herosection";
import Our_product from "../component/Our_product";

function Home() {
    return (
        <>
            <Herosection />
            <About />
            {/* <Cards /> */}
            <Our_product />
        </>
    );
}
export default Home;
