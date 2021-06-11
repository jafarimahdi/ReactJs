import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.scss";

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the newsletter to receive our best 
                    deals and new product!
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe any time
                </p>

                <form action="" className="input-areas">
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="footer-input"
                    />
                    <Button buttonStyle="btn--outline">Subscribe</Button>
                </form>
            </section>

            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/">Contact</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Destinations</Link>
                        <Link to="/">Sponsorships</Link>
                    </div>
                </div>

                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Video</h2>
                        <Link to="/">Submit Video</Link>
                        <Link to="/">Ambassadors</Link>
                        <Link to="/">Agency</Link>
                        <Link to="/">Influencer</Link>
                    </div>

                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Youtube</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>

            <div className="social-media-wrap">

                <a className="social-logo" href="https://jafarimahdi.github.io/" target="_blank">
                    Made With
                    <i class="fab fa-gratipay"/>
                    In Apr 2021 By MJ.
                </a>


                <div className="social-icons">
                    <Link
                        className="social-icon-link facebook"
                        to="/"
                        target="_blank"
                        aria-label="facebook"
                    >
                        <i className="fab fa-facebook-f" />
                    </Link>

                    <Link
                        className="social-icon-link instagram"
                        to="/"
                        target="_blank"
                        aria-label="Instagram"
                    >
                        <i className="fab fa-instagram" />
                    </Link>
                    <Link
                        className="social-icon-link youtube"
                        to="/"
                        target="_blank"
                        aria-label="youtube"
                    >
                        <i className="fab fa-youtube" />
                    </Link>
                    <Link
                        className="social-icon-link twitter"
                        to="/"
                        target="_blank"
                        aria-label="twitter"
                    >
                        <i className="fab fa-twitter" />
                    </Link>
                    <Link
                        className="social-icon-link linkedin"
                        to="/"
                        target="_blank"
                        aria-label="linkedin"
                    >
                        <i className="fab fa-linkedin" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
