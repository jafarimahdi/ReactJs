import React, { Component } from "react";
import Line_break from "./Line_break"
import "./About.scss";

export function About() {
    return (
        <>
        {/* <Line_break/> */}
            <div className="detail">
                <img className="line-image" src="./img-2/2.png" />

                <div className="frei">
                    <img src="./img-2/6.jpg" alt="" />

                    <section>
                        <h1>About Us to know</h1>
                        <p>
                            Iran Cukarzda is a place, where you can find
                            traditional and handmade Persian Sweets with unique
                            test of the ‘Saffron ,Rose Water, Honey,
                            Pistachios’.
                        </p>
                    </section>
                </div>

                <div className="frei-story">

                    <img src="./img-2/27.jpg" alt="" />

                    <section>
                        <h1>Feri Bacsi</h1>
                        <p>
                            Mr. Fereydon was working in his family business in
                            Iran, learning the craft of local pastry-making,
                            after being forced to leave Iran, and Working for 20
                            years in Norway, he is now among those adept
                            artisans who have exported their know-how of a
                            traditional trade to the Hungarian Capital ..
                        </p>
                        <div className="links">
                            <a href="" target="_blank">
                                <i class="fab fa-facebook" />
                            </a>
                            <a href="" target="_blank">
                                <i class="fab fa-youtube" />
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
