import React from "react";
import  GoogleMapReact  from  'google-maps-react';
import Maps from '../component/Maps';
import Line_break from '../component/Line_break'
import "../App.scss";


export default function Contact() {
    return (
        <>
            <div
                className="contact"
                style={{ backgroundImage: "url(img-2/26.jpg)" }}
            >
            </div>
            <Line_break />
            {/* <Maps/> */}
                <h1>Find Us</h1>
            
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1pKbwApvfK-8WvofDaLsSaPKPnkl-f1fK" width="80%" height="500"></iframe>
        </>
    );
}
