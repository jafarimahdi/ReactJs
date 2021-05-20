import React from "react";
import "../App.scss";
import Herosection from "../component/Herosection";
import Cards from "../component/Cards";
import { About } from "../component/About";

function Home() {
    return (
        <>
            <Herosection />
            <About />
            <Cards />
        </>
    );
}
export default Home;
