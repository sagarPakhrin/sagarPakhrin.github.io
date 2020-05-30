import React from "react";
import { Link } from "react-router-dom";

import "./Brand.scss";

const Brand = () => (
    <div className="brand">
        <Link to="/">
            <h2>
                <span className="first_name">Sagar </span>
                <span className="last_name">Lama</span>
            </h2>
        </Link>
    </div>
);

export default Brand;
