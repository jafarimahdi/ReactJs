import React from "react";
import "../App.css";
import {Button} from "./Button";
import "./HeroSection.css";

function HeroSection() {
    return (
        <div className="hero-container" style={{ backgroundImage: "linear-gradient(20deg, rgba(0,0,0,.8), transparent), url(img-2/1.jpg)"}}>
            <h1>Iran Cukrazda</h1>
            <p>DESERT SHOP</p>
        </div>
    );
}

export default HeroSection;
