import React from "react";
import Footer from '../Footer';
import "../../App.css";

export default function Services() {
    return (
        <>
            <div>
                <h1 className="services">SERVICES</h1>
            </div>
            <div className="our-service">
                <h2>Save Your Time and Money</h2>
                <p>Comfort and the Best prices for your business and clients</p>
                <ul className="text">
                    <li>
                        <h3>Enormous selection of travel services</h3>
                        <p>
                            Select all the travel services you need in one
                            system: 1.4+ million hotels worldwide, air tickets
                            and transfers, as well as car rentals.
                        </p>
                    </li>
                    <li>
                        <h3>Incredibly low prices</h3>
                        <p>
                            Book any travel services worldwide at discounted B2B
                            rates.
                        </p>
                    </li>
                    <li>
                        <h3>A choice of operating models</h3>
                        <p>
                            Choose the one you prefer for working with us: with
                            net prices or under a commission model.
                        </p>
                    </li>
                    <li>
                        <h3>Support 24/7</h3>
                        <p>
                            Ask anytime: our multi-lingual support service is
                            available around the clock.
                        </p>
                    </li>
                    <li>
                        <h3>Rich functionality</h3>
                        <p>
                            Take full advantage of the technological and
                            intuitive interface.
                        </p>
                    </li>
                    <li>
                        <h3>High-quality back-office</h3>
                        <p>
                            Get information on orders, vouchers and reports
                            online.
                        </p>
                    </li>
                    <li>
                        <h3>Exclusive manual precheck of bookings</h3>
                        <p>
                            Book with confidence: we additionally check all the
                            order details with the hotel
                        </p>
                    </li>
                    <li>
                        <h3>Attractive loyalty program</h3>
                        <p>
                            Save up points and use them to pay for bookings. 1
                            loyalty point = 1 unit in the local currency.
                        </p>
                    </li>
                </ul>
            </div>
            <Footer/>
        </>
    );
}
