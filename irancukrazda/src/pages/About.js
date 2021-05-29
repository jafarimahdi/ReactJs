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
            >
                <h1>About</h1>
            </div>
            <Line_break />

            <ReactPlayer url={["https://youtu.be/M5QY2_8704o"]}
            playing='true' controls='true'  style={{margin:'5%'}}
            />
            <ReactPlayer url={["https://youtu.be/M5QY2_8704o"]} />
        </>
    );
}
