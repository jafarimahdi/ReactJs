import React from "react";
import "./Our_product.scss";


export default function Our_product() {
    return (
        <div className="product_section">
            <div className="text_area">
                <img src="img-2/2.png" alt="ourProduct" />
                <h1>OUR Product</h1>
            </div>
            <ul className="icons">
                <li>
                    <img src="./img-2/2.svg" className="image" alt="" />
                    <h3>Freshness</h3>
                    <p>
                        All of our product made daily by hand with fresh
                        ingradient.
                    </p>
                </li>
                <li>
                    <img src="./img-2/3.svg" className="image" alt="" />
                    <h3>Gluten Free</h3>
                    <p>
                        all of our product made daily by hand with fresh
                        ingradient.
                    </p>
                </li>
                <li>
                    <img src="./img-2/4.svg" className="image" alt="" />
                    <h3>Tradition</h3>
                    <p>
                        all of our product made daily by hand with fresh
                        ingradient.
                    </p>
                </li>
            </ul>
            
        </div>
    );
}
