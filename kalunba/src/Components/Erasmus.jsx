import React from "react";
import ReactPlayer from "react-player";
import "./style/Erasmuse.css";

export default function Erasmus() {
    return (
        <div className="container">
            <div className="text-center mb-5">
                <h1>Project</h1>
                <h6 className="text-muted">
                    As Community building the connection always was our Criterion
                </h6>
            </div>

            <div className="row m-4">

                <div className="col col-12 col-lg-5 m-2">
                    <h3 className="text-center"><u>UNITY IN COMMUNITY</u></h3>
                    <p className="text-muted">
                    is a project conducted by four NGOs in Central Europe. Mareena from Bratislava, Slovakia; Be International from Brno, Czech Republic; Global 2000 from Vienna, Austria; and Kalunba from Budapest, Hungary. The project started in September 2019 and lasts until September 2021. The partners from Czech Republic, Hungary and Slovakia are involved in community projects with migrants in different areas (skill-sharing, intercultural dialogue, peer to peer learning). The partner from Austria is an environmental organisation running education programmes for community projects.
                    </p>

                    <div className="text-center download-file">
                        <p className=""><u>Download our Handbook</u></p>
                        <a href="english-Handbook.pdf" target="_blank" className="m-1">
                            <button><i class="fa fa-download" aria-hidden="true"> English</i></button> 
                        </a>

                        <a href="hu-Handbook.pdf" target="_blank" className="m-1">
                            <button><i class="fa fa-download" aria-hidden="true"> Hungarian</i></button>
                        </a>

                    </div>
                </div>

                <ReactPlayer
                    className="col col-12 col-lg-6 m-2"
                    url={["https://youtu.be/IeiGzGiKSI0"]}
                    controls="true"
                    style={{ width: "100%" }}
                />
            </div>
        </div>
    );
}
