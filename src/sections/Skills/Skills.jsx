import React from "react";
import { ReactComponent as Django } from "../../assets/django.svg";
import { ReactComponent as ReactLogo } from "../../assets/react.svg";
import { ReactComponent as JS } from "../../assets/js.svg";
import { ReactComponent as Python } from "../../assets/python.svg";
import { ReactComponent as Docker } from "../../assets/docker.svg";
import { ReactComponent as Vim } from "../../assets/vim.svg";

import "./Skills.scss";
const Skills = () => (
    <div className="skills-container">
        <div className="skills">
            <h1>Skills Set</h1>
            <div className="icons">
                <Python className="icon" />
                <JS className="icon" />
                <Django className="icon" />
                <ReactLogo className="icon" />
                <Docker className="icon" />
                <Vim className="icon" />
            </div>
        </div>
    </div>
);

export default Skills;
