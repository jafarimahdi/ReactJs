import React, { Component } from "react";
import "./About.scss";

export function About() {
    return (
        <>
            <div className="line-break">
                <img className="line-image" src="./img-2/2-sv.png" alt="" />
                <h1>About Us</h1>
            </div>

            <div className="frei">
                <img src="./img-2/6.jpg" alt="" />

                <p>Iran Cukarzda is a place, where you can find traditional and handmade Persian Sweets with unique test of the ‘Saffron ,Rose Water, Honey, Pistachios’.</p>
            </div>
            <div className="frei-story">
                <img src="./img-2/15.jpg" alt="" />
                <p>
                Mr. Fereydon was working in his family business in Iran, learning the craft of local pastry-making, after being forced to leave Iran, and Working for 20 years in Norway, he is now among those adept artisans who have exported their know-how of a traditional trade to the Hungarian Capital .. 
                </p>
            </div>
        </>
    );
}
