import React from "react";
import Footer from "../Footer";
import CardItem from "../CardItem";
import "../Cards.css";
import "../../App.css";

export default function Products() {
    return (
        <>
            <h1 className="products">PRODUCTS</h1>

            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="img-component/istanbul.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon jungle"
                            label="istanbul"
                        />
                        <CardItem
                            src="img-component/london.jpg"
                            text="Travel through the Islands of Bali in  a Private Cruise"
                            label="London"
                        />
                        </ul>
                        <ul className="cards__items">
                        <CardItem
                            src="img-component/new-york.jpg"
                            text="Travel through the Islands of Bali in  a Private Cruise"
                            label="New York"
                        />
                        <CardItem
                            src="img-component/paris.jpg"
                            text="Travel through the Islands of Bali in  a Private Cruise"
                            label="PARIS"
                        />
                        <CardItem
                            src="img-component/san-fransisco.jpg"
                            text="Travel through the Islands of Bali in  a Private Cruise"
                            label="San Francisco"
                        />
                    </ul>
                        <ul className="cards__items">
                        <CardItem
                            src="img-component/moscow.jpeg"
                            text="Travel through the Islands of Bali in  a Private Cruise"
                            label="Moscow"
                        />
                        <CardItem
                            src="img-component/berlin.jpeg"
                            text="Travel through the Islands of Bali in  a Private Cruise"
                            label="Berlin"
                        />
                        <CardItem
                            src="img-component/budapest.jpeg"
                            text="Travel through the Islands of Bali in  a Private Cruise"
                            label="Budapest"
                        />
                    </ul>
                </div>
            </div>

            <Footer />
        </>
    );
}
