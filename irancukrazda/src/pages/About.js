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
            <h1>About</h1>

            <ReactPlayer
                url={["https://youtu.be/0Ru58LXDx6Q"]}
                controls="true"
                style={{ margin: "5%" }}
            />
            <ReactPlayer
                url={["https://youtu.be/B_Qxo-wVaa4"]}
                autoPlay='false'
                controls="true"
                style={{ margin: "5%" }}
            />
        </>
    );
}
