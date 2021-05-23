import React from "react";
import "../App.scss";
import Cards from "../component/Cards";
import { About } from "../component/About";
import Herosection from "../component/Herosection";

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
