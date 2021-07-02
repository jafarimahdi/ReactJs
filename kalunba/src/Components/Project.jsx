export default function Project() {
    const portLinks = [
        {
            title: "Threads",
            caption: "Illustration",
            pic: "pictures/kalunba/1.jpg",
        },
        {
            title: "Explore",
            caption: "Graphic Design",
            pic: "pictures/kalunba/8.jpg",
        },
        {
            title: "Finish",
            caption: "Identity",
            pic: "pictures/kalunba/9.jpg",
        },
        {
            title: "Southwest",
            caption: "Website Design",
            pic: "pictures/kalunba/7.jpg",
        },
        {
            title: "Windows",
            caption: "Photography",
            pic: "pictures/kalunba/5.jpg",
        },
        {
            title: "Lines",
            caption: "Branding",
            pic: "pictures/kalunba/12.jpg",
        },
        {
            title: "Lines",
            caption: "Branding",
            pic: "pictures/kalunba/14.jpg",
        },
        {
            title: "Lines",
            caption: "Branding",
            pic: "pictures/kalunba/15.jpg",
        },
        {
            title: "Lines",
            caption: "Branding",
            pic: "pictures/kalunba/16.jpg",
        },
        {
            title: "Lines",
            caption: "Branding",
            pic: "pictures/kalunba/17.jpg",
        },
        {
            title: "Lines",
            caption: "Branding",
            pic: "pictures/kalunba/18.jpg",
        },
        {
            title: "Lines",
            caption: "Branding",
            pic: "pictures/kalunba/19.jpg",
        },
        {
            title: "Lines",
            caption: "Branding",
            pic: "pictures/kalunba/20.jpg",
        },
        {
            title: "Lines",
            caption: "Branding",
            pic: "pictures/kalunba/21.jpg",
        },
        {
            title: "Lines",
            caption: "Branding",
            pic: "pictures/kalunba/22.jpg",
        },
        {
            title: "Lines",
            caption: "Branding",
            pic: "pictures/kalunba/23.jpg",
        },
        {
            title: "Lines",
            caption: "Branding",
            pic: "pictures/kalunba/24.jpg",
        },
        {
            title: "Lines",
            caption: "Branding",
            pic: "pictures/kalunba/25.jpg",
        },
        {
            title: "Lines",
            caption: "Branding",
            pic: "pictures/kalunba/26.jpg",
        },
        {
            title: "Lines",
            caption: "Branding",
            pic: "pictures/kalunba/27.jpg",
        },
    ];

    return (
        <section className="page-section bg-light" id="project">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Project</h2>
                    <h3 className="section-subheading text-muted">
                        Many of our Main project are for refugee kids and to
                        help them to find the comfort zone between home and new
                        society
                    </h3>
                </div>

                {/* <div className="row"> */}
                <div className="card-deck">
                    {portLinks.map((item) => (
                        <div className="col-lg-4 col-sm-6 mb-4">
                            {/* <div className="card-columns"> */}
                            <div
                                className="card"
                                style={{ maxWidth: "21rem;" }}
                            >
                                {/* <div className="portfolio-item">

                                 <a
                                    className="portfolio-link"
                                    data-toggle="modal"
                                    href="#portfolioModal1"
                                >
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-plus fa-3x" />
                                        </div>
                                    </div>

                                    <img
                                        className="card-image-top img-fluid"
                                        src={item.pic}
                                        alt=""
                                    />
                                </a>

                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">
                                        {" "}
                                        {item.title}{" "}
                                    </div>
                                    <div className="portfolio-caption-subheading text-muted">
                                        {" "}
                                        {item.caption}{" "}
                                    </div>
                                </div>

                            </div>
                        </div> */}

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
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.caption}</p>
                                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
