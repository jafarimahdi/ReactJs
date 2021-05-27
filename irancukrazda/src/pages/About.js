import React from "react";
import Line_break from "../component/Line_break";
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
            <Line_break/>
        </>
    );
}
