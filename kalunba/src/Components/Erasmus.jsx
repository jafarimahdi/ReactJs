import React from "react";
import ReactPlayer from "react-player";
import "./style/Erasmuse.css"

export default function Erasmus() {
    return (
        <div className="container">
            <div className="header">
                <h1>Project</h1>
                <h3>
                    As Community building the connection always was our goal
                </h3>
            </div>
            <div className="erasmus-content">
                <section>

                </section>
                <ReactPlayer
                    className="youtube-video"
                    url={["https://youtu.be/IeiGzGiKSI0"]}
                    controls="true"
                    style={{ width: "100%" }}
                />
            </div>
        </div>
    );
}
