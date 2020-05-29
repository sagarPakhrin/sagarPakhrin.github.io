import React from "react";
import { ReactComponent as Github } from "../../assets/githubInverse.svg";
import { ReactComponent as Twitter } from "../../assets/twitter_temp.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedinInverse.svg";

import "./Social.scss";

const Social = () => (
    <div className="social">
        <a
            href="https://github.com/sagarPakhrin"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Github className="social-icon" />
            <span className="social-info">Github</span>
        </a>
        <a
            href="https://twitter.com/sagarlama562"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Twitter className="social-icon twitter" />
            <span className="social-info">Twitter</span>
        </a>
        <a
            href="https://www.linkedin.com/in/sagarlama"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Linkedin className="social-icon" />
            <span className="social-info">Linkedin</span>
        </a>
    </div>
);

export default Social;
