import React from "react";
import Brand from "../Brand/Brand.jsx";
import Nav from "../Nav/Nav.jsx";

import "./Header.scss";
const Header = () => {
    return (
        <div className="header">
            <Brand />
            <Nav />
        </div>
    );
};
export default Header;
