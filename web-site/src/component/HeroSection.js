import React from 'react'
import '../App.css';
import {Button} from '.Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="vidoes/video-2.mp4" autoplay muted>
                <h1>ADVENTURE AWAITS</h1>
                <p>what are you waiting for?</p>
                <div className="hero-btns">
                    <Button className="btns" buttonStyle="btn--outline" buttonSize="btn-large" >GET STARTED</Button>
                </div>
            </video>
        </div>
    )
}

export default HeroSection
