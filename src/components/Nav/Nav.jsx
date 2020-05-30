import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./Nav.scss";

const Nav = () => (
    <div className="nav">
        <ul>
            <li>
                <Link to="/#about" smooth>
                    About
                </Link>
            </li>
            <li>
                <Link to="/#skills" smooth>Skills</Link>
            </li>
            <li>
                <Link to="/#projects" smooth>Projects</Link>
            </li>
            <li>
                <Link to="/#contact" smooth>Contacts</Link>
            </li>
        </ul>
    </div>
);

export default Nav;
