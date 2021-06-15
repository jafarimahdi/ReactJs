import React from "react";
import Carditem from "./Carditem";
import "./Cards.scss";

function Cards() {
    return (
        <div className="cards">
            <ul className="cards__items">

                <Carditem
                    src="img-2/7.jpg"
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!"
                    label="Long Bameyeh"
                    path="/product"
                />
                <Carditem
                    src="img-2/30.jpg"
                    text="persian cookie with Pectase and some saffaron and more rose water and a lot of things inside of it"
                    label="pestei"
                    path="/product"
                />
                <Carditem
                    src="img-2/9.jpg"
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!"
                    label="Bameyeh"
                    path="/product"
                />
                <Carditem
                    src="img-2/12.jpg"
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!"
                    label="Karehi"
                    path="/product"
                />
                <Carditem
                    src="img-2/10.jpg"
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!"
                    label="Papyon"
                    path="/product"
                />
                <Carditem
                    src="img-2/11.jpg"
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!"
                    label="shokolati"
                    path="/product"
                />
                <Carditem
                    src="img-2/13.jpg"
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!"
                    label="Tea & karei"
                />
                <Carditem
                    src="img-2/14.jpg"
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!"
                    label="Narges"
                    path="/product"
                />
                <Carditem
                    src="img-2/17.jpg"
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!"
                    label="Zafaroni"
                    path="/product"
                />
                <Carditem
                    src="img-2/19.jpg"
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!"
                    label="Zaban Cream"
                    path="/product"
                />
                <Carditem
                    src="img-2/20.jpg"
                    // src="videos/video-1.mp4"
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!"
                    label="Danmarki"
                    path="/product"
                />
                <Carditem
                    src="img-2/22.jpg"
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!"
                    label="Danmarki"
                    path="/product"
                />
                <Carditem
                    src="img-2/23.jpg"
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!"
                    label="Layei"
                    path="/product"
                />
                <Carditem
                    src="img-2/24.jpg"
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!"
                    label="Baghlava"
                />
                <Carditem
                    src="img-2/25.jpg"
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!"
                    label="Baghlava sontati"
                />
                <Carditem
                    src="img-2/5.jpg"
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!"
                    label="ZABAN"
                    // path="/product"
                />

                <Carditem
                    src="img-2/28.jpeg"
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!"
                    label="Asali"
                    path="/product"
                />
            </ul>
        </div>
    );
}

export default Cards;
