import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// 1-   add yup scheme here for the validation  ----------------------

const schema = yup.object().shape({
    Name: yup.string().required(),
    lastName: yup.string().required(),
    Email: yup.string().email().required(),
    Text: yup.string().required(),
});

export default function Contact() {
    /*2-  form and validation  react-hook-form  -------------------------------------*/

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    /* 3-  use the API for the auto email back and manage the backend part -------------------------- */

    // function sendEmail(e) {
    //     e.preventDefault();
    //     emailjs
    //         .sendForm(
    //             "service_wtbcyyk",
    //             "template_lsgz0ug",
    //             e.target,
    //             "user_CaSe2dULRsCYGXJGCKmFu"
    //         )
    //         .then(
    //             (result) => {
    //                 console.log(result.text);
    //             },
    //             (error) => {
    //                 console.log(error.text);
    //             }
    //         );
    // }

    const Submit = (data) => {
        console.log(data);
        // Add data from our FORM to the api or dataBase target
        // sendEmail(data);
        emailjs.sendForm("service_wtbcyyk", "template_lsgz0ug", "data").then(
            function (response) {
                console.log("SUCCESS!", response.status, response.text);
            },
            function (error) {
                console.log("FAILED...", error);
            }
        );
        reset();
    };

    //      -------------------------------------------------------------
    return (
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">
                        Contact Us
                    </h2>
                    <h3 className="section-subheading text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                    </h3>
                </div>

                <form
                    id="contactForm"
                    name="sentMessage"
                    novalidate="novalidate"
                    onSubmit={handleSubmit(Submit)}
                >
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    name="Name"
                                    type="text"
                                    placeholder="Your Name *"
                                    {...register("Name")}
                                />
                                <p className="help-block text-danger">
                                    {errors.Name?.message}
                                </p>
                            </div>

                            <div className="form-group ">
                                <input
                                    className="form-control"
                                    id="text"
                                    name="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                    {...register("lastName")}
                                />
                                <p className="help-block text-danger">
                                    {errors.lastName?.message}
                                </p>
                            </div>

                            <div className="form-group mb-md-0">
                                <input
                                    className="form-control"
                                    name="Email"
                                    type="email"
                                    placeholder="Your Email *"
                                    {...register("Email")}
                                />
                                <p className="help-block text-danger">
                                    {errors.Email?.message}
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="Text"
                                    placeholder="Your Message *"
                                    {...register("Text")}
                                ></textarea>
                                <p className="help-block text-danger">
                                    {errors.Text?.message}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <div id="success"></div>
                        <button
                            className="btn btn-primary btn-xl text-uppercase"
                            id="sendMessageButton"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
