import React from "react";
import Cards from "../component/Cards";
import "../App.scss";
import Line_break from "../component/Line_break";
import Our_product from "../component/Our_product";

export default function Products() {
    return (
        <>
            <div
                className="products"
                style={{ backgroundImage: "url(img-2/26.jpg)" }}
            >
                <h1>Product</h1>
            </div>
                <Line_break/>
                <Our_product/>
                <Cards />
        </>
    );
}
