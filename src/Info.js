import React from "react";
import  ReactDOM  from "react-dom";
import image from "../src/omar.png";
import './index.css';

export default function Info() {
    return (
        <header className="main-container">
            <img src={image} className="main-img"/>
            <h2>Omar Alsrouji</h2>
            <h4>Frontend Developer</h4>
            <div className="social-buttons">
                <button><a className="button-one"  href="https://github.com/OmarAlsrouji"><i class="ri-github-fill"></i><span>Github</span></a></button>
                <button><a className="button-two" href="https://www.linkedin.com/in/omar-mounther-ba7a29253/"><i class="ri-linkedin-box-fill"></i><span>LinkedIn</span></a></button>
            </div>
        </header>
    )
}