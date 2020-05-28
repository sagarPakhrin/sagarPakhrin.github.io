import React from "react";
import Header from "../../components/Header/Header.jsx";
import Banner from "../../components/Banner/Banner.jsx";

import "./Home.scss";
const Home = () => {
    return (
        <div className="home">
            <Header />
            <Banner />
        </div>
    );
};

export default Home;
