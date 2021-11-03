import react, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style/Mission.css";

export default function Mission() {
    const data = [
        {
            text: " HOPE",
            icon: "fas fa-fist-raised fa-stack-1x fa-inverse",
            caption: "",
            aos: "fade-up",
        },
        {
            text: "OPPORTUNELY",
            icon: "fas fa-hand-holding-heart fa-stack-1x fa-inverse",
            caption: "",
            aos: "fade-up",
        },
        {
            text: "SOLIDARITY",
            icon: "fas fa-praying-hands fa-stack-1x fa-inverse",
            caption: "",
            aos: "fade-up",
        },
    ];

    // --------------------------------------------------
    useEffect(() => {
        Aos.init({ duration: 1000 });
    });

    return (
        <section className="page-section" id="mission">
            <div className="container">
                <div data-aos="fade-down" className="text-center my-5">
                    <h3 className="section-heading text-uppercase">
                        our mission
                    </h3>
                    <p className="section-subheading text-muted"></p>
                </div>

                <div className="row">
                    {data.map((item) => (
                        <div
                            className="col-md-4 text-center"
                            data-aos={item.aos}
                        >
                            <span className="fa-stack fa-4x">
                                <i
                                    className="fa fa-circle fa-stack-2x "
                                    style={{ color: "#BDD2B6" }}
                                />
                                <i className={item.icon} />
                            </span>
                            <h4 className="my-3">{item.text}</h4>
                            <p className="text-muted">{item.caption}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
