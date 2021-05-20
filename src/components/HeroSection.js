import React from 'react'
import Button from './Button'
import "./HeroSection.css"
import "../App.css"
import video from "../assets/videos/video-1.mp4"
function HeroSection() {
    return (
        <div className="hero-container">
            <video autoplay="autoplay" loop muted >
			<source src={video} type="video/mp4"/>
			
			</video>
            <h1>Adventures Await</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyles="btn--outline" buttonSizes="btn--large">Get Started</Button>
                <Button className="btns" buttonStyles="btn--primary" buttonSizes="btn--large">Watch Trailer <i className="fas fa-play"/></Button>
              
            </div>
            

        </div>
    )
}

export default HeroSection
