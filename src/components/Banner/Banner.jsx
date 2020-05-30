import React from "react";
import { ReactComponent as Download } from "../../assets/downloadInverse.svg";
import "./Banner.scss";

const Banner = () => (
    <div className="banner-section">
        <div className="banner">
            <h1>
                Sagar Lama, <br />
                Fullstack developer based in Nepal
            </h1>
            <p className="subtext">
                Currently looking for a position of position of software
                engineer
            </p>
            <a href="https://drive.google.com/file/d/1Ag82INlmS5yg6tvm7qt8lX0Z7XjJkQ4x/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="download">
                <Download className="downloadIcon"/> Resume
            </a>
        </div>
    </div>
);
export default Banner;
