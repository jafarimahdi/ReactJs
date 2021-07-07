export default function Project() {
    const outDoor = [
        {
            title: "OutDoor Program",
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
            title: "Refugee children and their psychological problems",
            caption: "Our colleague Ákos Urbán took part in a roundtable discussion at the Verzió Film Festival.",
            pic: "pictures/kalunba/23.jpg",
            web:"https://www.verzio.org/hu/node/3314?fbclid=IwAR2_bK5eujybKrVFu9ouUaBFNKvZ3oDKxpRBtM9P0SE8hrEDE2GT0YI5N3w",
        },
        
        {
            title: "Easy Lessons",
            caption: "Kafiya, was one of the students in Kalunba's after-school programme. She also attended Hungarian as a Foreign Language classes at Kalunba. Now she is on her way to a life and a career full of promises. In the interview, she says: 'I am especially grateful to Kalunba. They cared a lot. They did not only help us to learn the language but also to find ourselves in our new surroundings.'",
            pic: "pictures/kalunba/kafia.jpg",
            web:"https://secretstories.hu/interjuk/kafiya-mahdi-rea-milla-interju/?fbclid=IwAR2FhmXrUOwSFNpEKdhm5liMg770IHadtrtW5Sgces-DUb1tlVgXMawB4tY",
        },
        
        {
            title: "Building on Person to Person Relationship",
            caption: "The job is done well when refugee students are constantly starting ...",
            pic: "pictures/kalunba/22.jpg",
            web:"https://reformatus.hu/english/news/building-person-person-relationship/?fbclid=IwAR2NuEFoI3Ry6PrsUoktgkOhEWG1-dszKAdwlTYLpQzB4VGhJNFcXVpUPPE",
        },
        {
            title: "Recognition of Kalunba Graduates",
            caption: "In recognition of the recent graduates of the Interpretation course, ..",
            pic: "pictures/kalunba/31.jpg",
            web:"http://regi.reformatus.hu/mutat/15628/?fbclid=IwAR3N128THriDQNzmFf-iwpwRk42As_cpsubWIWQbqqJoWLfrQ6slLk2RsWU",
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
        {
            title: "Hungarian Lesson",
            caption: "write more about this card",
            pic: "pictures/kalunba/21.jpg",
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
            title: "chrisms Market",
            caption: "write more about this card",
            pic: "pictures/kalunba/30.jpg",
            web:"http://regi.reformatus.hu/mutat/16912/?fbclid=IwAR3ehoQDdIs3TfwYKsGvA2slIBLQXlr5-8GibpQ_66pX8iNolqK0kG37qfI",
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
                <h4 className="text-center p-5">Our Education program</h4>
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
                                        <p className="card-text text-muted">
                                            {item.caption}
                                        </p>
                                        <a href={item.web}  target="_blank" class="btn btn-primary">
                                            More
                                        </a>
                                        {/* </div> */}
                                    </details>
                                </section>
                            </div>
                        </div>
                    ))}
                </div>
                    {/* job searching part   */}

                    <h4 className="text-center p-5">Job Market</h4>
                <div className="card-group  rounded-lg p-2">
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
                                        <a href={item.web}  target="_blank" class="btn btn-primary">
                                            More
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
