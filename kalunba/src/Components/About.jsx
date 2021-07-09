export default function About() {
    const data = [
        {
            time: "#D2-  2013 - 2014",
            text: "Our Humble Beginnings",
            picture:"pictures/kalunba/15.jpg",
            description:
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
        },
        {
            time: "#D3-  March 2014",
            text: "A Community is Born",
            picture:"pictures/kalunba/17.jpg",
            description:
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
        },
        {
            time: "#D4-  December 2015",
            text: "Transition to Full Service",
            description:
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
        },
        {
            time: "#D5-  July 2018",
            text: "Phase Two Expansion",
            description:
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
        },
    ];
    let count = 0;

    return (
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">
                      #D1-   Our Community History and How we are here
                    </h3>
                </div>


                <ul className="timeline">
                    {data.map((item) => (

                        <li
                            className={
                                count % 2 === 0 ? "timeline-inverted" : ""
                            }
                        >
                            <div className="timeline-image">
                                <img
                                    className="rounded-circle img-fluid"
                                    src={item.picture}
                                    alt=""
                                    style={{ width:'100%', height:'100%', backgroundSize:'cover' }}
                                />
                            </div>


                            <div className="timeline-panel">
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



                    <li className="timeline-inverted">
                        <div className="timeline-image ">
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
