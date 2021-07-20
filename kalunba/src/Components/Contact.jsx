import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
// import { init, sendForm } from 'emailjs-com';
// init('user_CaSe2dULRsCYGXJGCKmFu');

// 1-   add yup scheme here for the validation  ----------------------
const schema = yup.object().shape({
    name: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    text: yup.string().required()
});

export default function Contact() {
    /*2-  form and validation  react-hook-form  -------------------------------------*/
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    /* 3-  use the API for the auto email or manage the backend part -------------------------- */

    const onSubmit = (data) => {  
        console.log(data);
    
        emailjs
            .sendForm(
                "service_wtbcyyk",
                "template_lsgz0ug",
                "#contactForm",
                "user_CaSe2dULRsCYGXJGCKmFu"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
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
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                            </div>

                            <div className="form-group">
                                <input
                                    className="form-control"
                                    name="name"
                                    type="text"
                                    placeholder="Your Name *"
                                    {...register("name")}
                                />
                                <p className="help-block text-danger">
                                {errors.name?.message}
                                </p>
                            </div>

                            <div className="form-group ">
                                <input
                                    className="form-control"
                                    name="lastname"
                                    type="text"
                                    placeholder="Last Name"
                                    {...register("lastname")}
                                />
                                <p className="help-block text-danger">
                                    {errors.lastname?.message}
                                </p>
                            </div>

                            <div className="form-group mb-md-0">
                                <input
                                    className="form-control"
                                    name="email"
                                    type="email"
                                    placeholder="Your Email *"
                                    {...register("email")}
                                />
                                <p className="help-block text-danger">
                                    {errors.email?.message}
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                <textarea
                                    className="form-control"
                                    name="text"
                                    placeholder="Your Message *"
                                    {...register("text")}
                                ></textarea>
                                <p className="help-block text-danger">
                                    {errors.text?.message}
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
