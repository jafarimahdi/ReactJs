import React from "react";
import ReactPlayer from "react-player";
import "./style/Erasmuse.css";

export default function Erasmus() {
    return (
        <div className="container">
            <div className="text-center mb-5">
                <h1>Project</h1>
                <h5>
                    As Community building the connection always was our Wish
                </h5>
            </div>

            <div className="row">
                <section className="col">
                    <h1 className="text-center">Unity in Community</h1>
                    <p>
                        add a bit about the project in this part and intrude the
                        work been done
                    </p>

                    <div className="text-center download-file">
                        <p>Download our Handbook</p>
                        <a href="english-Handbook.pdf" target="_blank">
                            <button>English</button>
                        </a>
                        <a href="hu-Handbook.pdf" target="_blank">
                            <button>Hungarian</button>
                        </a>
                    </div>
                </section>
                <ReactPlayer
                    className="col youtube-video"
                    url={["https://youtu.be/IeiGzGiKSI0"]}
                    controls="true"
                    style={{ width: "100%" }}
                />
            </div>
        </div>
    );
}
