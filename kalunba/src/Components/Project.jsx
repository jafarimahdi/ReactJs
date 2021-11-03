import react, { useEffect } from "react";
import Aos from "aos";
import Cards from "./Cards";
import "aos/dist/aos.css";
import "../assets/css/style.css";

export default function Project() {
    const outDoor = [
        {
            pic: "pictures/kalunba/29.jpg",
            aos: "fade-down",
        },
        {
            pic: "pictures/kalunba/27.jpg",
            aos: "fade-up",
        },
        {
            pic: "pictures/kalunba/8.jpg",
            aos: "fade-down",
        },
        {
            pic: "pictures/kalunba/32.jpg",
            aos: "fade-down",
        },
        {
            pic: "pictures/kalunba/12.jpg",
            aos: "fade-up",
        },
        {
            pic: "pictures/kalunba/36.jpg",
            aos: "fade-up",
        },
        {
            pic: "pictures/kalunba/19.jpg",
            aos: "fade-down",
        },
        {
            pic: "pictures/kalunba/35.jpg",
            aos: "fade-up",
        },
    ];

    const education = [
        {
            title: "#B2- Hungarian Lesson for Adult/Kids",
            caption: "Our Hungarian classes for adult is start form bigener level, and it's focusing more on the work an daily life, for kids our focus on helping them with their school and studding materials ",
            pic: "pictures/kalunba/1.jpg",
            aos: "fade-up",
        },
        {
            title: "#B3- English Lesson for Kids",
            caption: "with the help of our international volunteers, we teach kids general life English and school English, depending in their need and grade ",
            pic: "pictures/kalunba/21.jpg",
            aos: "fade-up",
        },
        // {
        //     title: "#B4- Computer Lessons for Kids & Adult",
        //     caption: "this course will run by our Volunteer and lessons preparing in two level",
        //     pic: "pictures/kalunba/34.jpg",
        //     aos: "fade-down",
        // },
        {
            title: "#B5- My Easy Lessons",
            caption:
                "Kafiya, was one of the students in Kalunba's after-school programme. She also attended Hungarian as a Foreign Language classes at Kalunba. Now she is on her way to a life and a career full of promises. In the interview, she says: 'I am especially grateful to Kalunba. They cared a lot. They did not only help us to learn the language but also to find ourselves in our new surroundings.'",
            pic: "pictures/kalunba/kafia.jpg",
            web: "https://secretstories.hu/interjuk/kafiya-mahdi-rea-milla-interju/?fbclid=IwAR2FhmXrUOwSFNpEKdhm5liMg770IHadtrtW5Sgces-DUb1tlVgXMawB4tY",
            aos: "fade-down",
        },

        {
            title: "#B6-  Building on Person to Person Relationship",
            caption:
                "The job is done well when refugee students are constantly starting ...",
            pic: "pictures/kalunba/22.jpg",
            web: "https://reformatus.hu/english/news/building-person-person-relationship/?fbclid=IwAR2NuEFoI3Ry6PrsUoktgkOhEWG1-dszKAdwlTYLpQzB4VGhJNFcXVpUPPE",
            aos: "fade-up",
        },
        {
            title: "#B7-  Recognition of Kalunba Graduates",
            caption:
                "In recognition of the recent graduates of the Interpretation course, ..",
            pic: "pictures/kalunba/31.jpg",
            web: "http://regi.reformatus.hu/mutat/15628/?fbclid=IwAR3N128THriDQNzmFf-iwpwRk42As_cpsubWIWQbqqJoWLfrQ6slLk2RsWU",
            aos: "fade-down",
        },
        {
            title: "8 grade in Kalunba",
            caption: "study in the official school is always difficult for adult students and not easy to join, Kalunba with help of the partners, made this possibility to having the official classes for 8 grade",
            pic: "pictures/kalunba/25.jpg",
            aos: "fade-down",
        },
        // {
        //     title: "#B9- ",
        //     caption: "write more about this card",
        //     pic: "pictures/kalunba/33.jpg",
        //     aos: "fade-down",
        // },
        
    ];

    const job = [
        {
            title: "#C2-  job searching ",
            caption: "write more about this card",
            pic: "pictures/kalunba/24.jpg",
        },
        {
            title: "#C3- visit factory and work places",
            caption: "write more about this card",
            pic: "pictures/kalunba/5.jpg",
        },
        {
            title: "#C4- chrisms Market",
            caption: "write more about this card",
            pic: "pictures/kalunba/30.jpg",
            web: "http://regi.reformatus.hu/mutat/16912/?fbclid=IwAR3ehoQDdIs3TfwYKsGvA2slIBLQXlr5-8GibpQ_66pX8iNolqK0kG37qfI",
        },
    ];

    useEffect(() => {
        Aos.init({ duration: 1000 });
    });

    return (
        <section className="page-section bg-light" id="project">



            <div className="container">
                <div className="">
                    <div className="text-center my-5" data-aos="fade-down">
                        <h2 className="section-heading text-uppercase">
                            Our Support
                        </h2>
                        <h3 className="section-subheading text-muted">
                            {/* As Community building the connection always was our goal */}
                        </h3>
                    </div>
                </div>

                {/* new card gallery  */}

                <div className="row py-5" id="card-column">
                    <div className="card-columns col-12">
                        {outDoor.map((item) => (
                            <div className="card" data-aos={item.aos}>
                                <img
                                    className="card-img"
                                    src={item.pic}
                                    width="100%"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div> 


                {/* Education program ---------------------- */}
            <div className="container">
                                
                <h4 data-aos="slide-up" className="text-center my-5">
                    Education
                </h4>

                {/* make a new row   */}

                <div className="row " style={{maxWidth:'100vw'}} >
                    <div className="text col-lg-5 p-2">
                        <ul>
                            {education.map((item) => (
                                <li>
                                    <a href="">{item.title}</a>
                                    <br />
                                    <p className="text-muted">{item.caption}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card-columns d-inline-block col-lg-7" style={{columnCount:"2"}}>
                        {education.map((item) => (
                            <div className="card" data-aos={item.aos}>
                                <div
                                    className="card-body"
                                    style={{ padding: "0", margin: "0" }}
                                >
                                    <img
                                        className="card-img-top"
                                        src={item.pic}
                                        alt="Card image cap"
                                        width="100%"
                                    />
                                    <div className="card-text">
                                        <small className="text-muted">
                                            {item.title}
                                        </small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* job searching part   */}

                <h4 data-aos="slide-down" className="text-center py-5">
                    <u>Job & Housing</u>
                </h4>

                {/* make a new row   */}

                <div className="row" style={{maxWidth:'100vw'}} >

                    <div className="card-columns col-lg-7" style={{columnCount:'2'}}>
                        {job.map((item) => (
                            <div
                            className="card rounded-lg"
                                data-aos="fade-up"
                            >
                                <div className="card-body" style={{ padding: "0", margin: "0" }}>
                                    <img
                                        src={item.pic}
                                        className="card-img-top"
                                        alt="..."
                                        width= "100%"
                                    />
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text col-lg-5 p-2">
                        <ul>
                            {job.map((item) => (
                                <li>
                                    <a href="">{item.title}</a>
                                    <br />
                                    <p className="text-muted">{item.caption}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
