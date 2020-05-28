import React from "react";
import { ReactComponent as Github } from "../../assets/githubInverse.svg";
import { ReactComponent as Twitter } from "../../assets/twitterInverse.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedinInverse.svg";

import "./Social.scss";

const Social = () => (
    <div className="social">
        <ul className="nav">
            <li className="nav-item">
                <a
                    href="https://github.com/sagarPakhrin"
                    className="nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Github className="social-item" />
                    <span className="social-info">Github</span>
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="https://twitter.com/sagarlama562"
                    className="nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Twitter className="social-item" />
                    <span className="social-info">Twitter</span>
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="https://www.linkedin.com/in/sagarlama"
                    className="nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Linkedin className="social-item" />
                    <span className="social-info">Linkedin</span>
                </a>
            </li>
        </ul>
    </div>
);

export default Social;
