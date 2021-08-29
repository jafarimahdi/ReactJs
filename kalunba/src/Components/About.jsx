import react, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style/About.css";

export default function About() {
    const data = [
        {
            time: "#D2-  2013 - 2014",
            text: "Our Humble Beginnings",
            picture: "pictures/kalunba/15.jpg",
            description:
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
            text_aos:"fade-down",
            image_aos:"fade-up",
        },
        {
            time: "#D3-  March 2014",
            text: "A Community is Born",
            picture: "pictures/kalunba/17.jpg",
            description:
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
            text_aos:"fade-up",
            image_aos:"fade-down",
        },
        {
            time: "#D4-  December 2015",
            text: "Transition to Full Service",
            description:
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
            text_aos:"fade-up",
            image_aos:"fade-down",
        },
        {
            time: "#D5-  July 2018",
            text: "Phase Two Expansion",
            description:
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
            text_aos:"fade-up",
            image_aos:"fade-down",
        },
    ];
    useEffect(() => {
        Aos.init({ duration: 1000 });
    });

    let count = 0;

    return (
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">
                        #D1- Our Community History and How we are here
                    </h3>
                </div>

                <ul className="timeline">
                    {data.map((item) => (
                        <li
                            className={
                                count % 2 === 0 ? "timeline-inverted" : ""
                            }
                        >
                            <div className="timeline-image" data-aos={item.image_aos}>
                                <img
                                    className="rounded-circle img-fluid"
                                    src={item.picture}
                                    alt=""
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        backgroundSize: "cover",
                                    }}
                                />
                            </div>

                            <div className="timeline-panel" data-aos={item.text_aos}>
                                <div className="timeline-heading">
                                    <h4>{item.time}</h4>
                                    <h4 className="subheading">{item.text}</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            <p style={{ display: "none" }}>{(count += 1)}</p>
                        </li>
                    ))}

                    <li className="timeline-inverted"data-aos="zoom-in">
                        <div className="timeline-image " style={{backgroundColor:"#BDD2B6"}}>
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!{" "}
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
