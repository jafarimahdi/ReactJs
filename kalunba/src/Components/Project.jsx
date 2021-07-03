export default function Project() {
    const outDoor = [
        {
            title: "OutDoor Programing",
            caption: "write more about this card",
            pic: "pictures/kalunba/1.jpg",
        },
        {
            title: "Lines",
            caption: "write more about this card",
            pic: "pictures/kalunba/27.jpg",
        },
        {
            title: "Lines",
            caption: "write more about this card",
            pic: "pictures/kalunba/26.jpg",
        },
        {
            title: "Explore",
            caption: "write more about this card",
            pic: "pictures/kalunba/8.jpg",
        },
        {
            title: "Finish",
            caption: "write more about this card",
            pic: "pictures/kalunba/9.jpg",
        },
        {
            title: "Lines",
            caption: "write more about this card",
            pic: "pictures/kalunba/12.jpg",
        },

        {
            title: "Lines",
            caption: "write more about this card",
            pic: "pictures/kalunba/15.jpg",
        },
        {
            title: "Lines",
            caption: "write more about this card",
            pic: "pictures/kalunba/16.jpg",
        },
        {
            title: "Lines",
            caption: "Branding",
            pic: "pictures/kalunba/17.jpg",
        },
        {
            title: "Lines",
            caption: "write more about this card",
            pic: "pictures/kalunba/18.jpg",
        },
        {
            title: "Lines",
            caption: "write more about this card",
            pic: "pictures/kalunba/19.jpg",
        },
        {
            title: "Lines",
            caption: "write more about this card",
            pic: "pictures/kalunba/20.jpg",
        },
    ];
    const education = [
        {
            title: "Hungarian lesson",
            caption: "write more about this card",
            pic: "pictures/kalunba/23.jpg",
        },
        
        {
            title: "Lines",
            caption: "write more about this card",
            pic: "pictures/kalunba/21.jpg",
        },
        {
            title: "Lines",
            caption: "Branding",
            pic: "pictures/kalunba/22.jpg",
        },
        {
            title: "Lines",
            caption: "write more about this card",
            pic: "pictures/kalunba/14.jpg",
        },
        {
            title: "8 grade in Kalunba",
            caption: "write more about this card",
            pic: "pictures/kalunba/25.jpg",
        },
    ];

    const job = [
        {
            title: "job searching (BKV)",
            caption: "write more about this card",
            pic: "pictures/kalunba/24.jpg",
        },
        {
            title: "visit factory",
            caption: "write more about this card",
            pic: "pictures/kalunba/5.jpg",
        },
        {
            title: "prepping for the chrisms Market",
            caption: "write more about this card",
            pic: "pictures/kalunba/7.jpg",
        },
    ];
    return (
        <section className="page-section bg-light" id="project">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Projects</h2>
                    <h3 className="section-subheading text-muted">
                        Many of our Main project are for refugee kids and to
                        help them to find the comfort zone between home and new
                        society
                    </h3>
                </div>

                {/* first Project of the list  */}
                <div className="card-group ">
                    {outDoor.map((item) => (
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div
                                className="card border border-lg"
                                style={{ maxWidth: "21rem;" }}
                            >
                                <img
                                    src={item.pic}
                                    className="card-img-top"
                                    alt="..."
                                    style={{
                                        width: "100%",
                                        height: "33vh",
                                        objectFit: "cover",
                                        position: "center",
                                    }}
                                />
                                <section className="card-body">
                                    <summery className="card-title">
                                        {item.title}
                                    </summery>

                                    <details>
                                        <p className="card-text">
                                            {item.caption}
                                        </p>
                                        {/* <a href="#" class="btn btn-primary">
                                            Go somewhere
                                        </a> */}
                                    </details>
                                </section>
                            </div>
                        </div>
                    ))}
                </div>
                {/* new line ---------------------- */}
                <h4 className=" m-5">Our Education program</h4>
                <div className="card-group  p-2">
                    {education.map((item) => (
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div
                                className="card rounded "
                                style={{ maxWidth: "21rem;" }}
                            >
                                <img
                                    src={item.pic}
                                    className="card-img-top"
                                    alt="..."
                                    style={{
                                        width: "100%",
                                        height: "33vh",
                                        objectFit: "cover",
                                        position: "center",
                                    }}
                                />
                                <section className="card-body">
                                    <summery className="card-title">
                                        {item.title}
                                    </summery>

                                    <details>
                                        <p className="card-text">
                                            {item.caption}
                                        </p>
                                        <a href="#" class="btn btn-primary">
                                            Go somewhere
                                        </a>
                                        {/* </div> */}
                                    </details>
                                </section>
                            </div>
                        </div>
                    ))}
                </div>
                    {/* job searching part   */}

                    <h4 className=" m-5">Job Market</h4>
                <div className="card-group border border-secondary rounded-lg p-2">
                    {job.map((item) => (
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div
                                className="card rounded-lg "
                                style={{ maxWidth: "21rem;" }}
                            >
                                <img
                                    src={item.pic}
                                    className="card-img-top"
                                    alt="..."
                                    style={{
                                        width: "100%",
                                        height: "33vh",
                                        objectFit: "cover",
                                        position: "center",
                                    }}
                                />
                                <section className="card-body">
                                    <summery className="card-title">
                                        {item.title}
                                    </summery>

                                    <details>
                                        <p className="card-text">
                                            {item.caption}
                                        </p>
                                        <a href="#" class="btn btn-primary">
                                            Go somewhere
                                        </a>
                                        {/* </div> */}
                                    </details>
                                </section>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}
