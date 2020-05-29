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
            <button className="download">
                <Download className="downloadIcon"/> Resume
            </button>
        </div>
    </div>
);
export default Banner;
