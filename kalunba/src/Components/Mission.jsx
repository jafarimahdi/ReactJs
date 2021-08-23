import react, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style/Mission.css";

export default function Mission() {
    const data = [
        {
            text: " #2- Equality",
            icon: "fas fa-fist-raised fa-stack-1x fa-inverse",
            caption:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            aos: "fade-up",
        },
        {
            text: "#3- Opportunity",
            icon: "fas fa-hand-holding-heart fa-stack-1x fa-inverse",
            caption:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            aos: "fade-up",
        },
        {
            text: "#4- Community",
            icon: "fas fa-praying-hands fa-stack-1x fa-inverse",
            caption:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            aos: "fade-up",
        },
    ];

    // --------------------------------------------------
    useEffect(() => {
        Aos.init({ duration: 1500 });
    });

    return (
        <section className="page-section" id="mission" >

        <div className="container">
            <div data-aos="fade-down" className="text-center my-5">
                <h3 className="section-heading text-uppercase">our mission</h3>
                <p className="section-subheading text-muted">
                    #1- Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                </p>
            </div>

            <div className="row">
                {data.map((item) => (
                    <div className="col-md-4 text-center" data-aos={item.aos}>
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary" />
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
