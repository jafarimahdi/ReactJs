import React from "react";
import Line_break from "../component/Line_break";
import ReactPlayer from "react-player";
import "../App.scss";

export default function About() {
    return (
        <>
            <div
                className="about"
                style={{ backgroundImage: "url(img-2/16.jpg)" }}
            ></div>
            <Line_break />

            <div className="about-page">
                <h1 className="hero-text">Our Shops</h1>

                <div className="firstshop">
                    <ReactPlayer
                        className="youtube-video"
                        url={["https://youtu.be/0Ru58LXDx6Q"]}
                        controls="true"
                        style={{ width: "50%" }}
                    />
                </div>
                <div className="secondshp">
                    <ReactPlayer
                        className="youtube-video"
                        url={["https://youtu.be/B_Qxo-wVaa4"]}
                        autoPlay="false"
                        controls="true"
                        // style={{ margin: "5%" }}
                    />
                </div>
            </div>
        </>
    );
}
