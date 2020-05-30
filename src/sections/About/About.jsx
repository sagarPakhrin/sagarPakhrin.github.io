import React from "react";
import Card from "../../components/Card/Card.jsx";

import "./About.scss";
const About = () => (
    <div className="about-section" id="about">
        <div className="about-container">
            <div className="section services">
                <Card>
                    <div className="card_header">Frontend</div>
                    <p className="card_content">
                        I develop websites with react js
                    </p>
                </Card>
                <Card>
                    <div className="card_header">Backend</div>
                    <p className="card_content">
                        Develop backned services and RESTful APIs with Django
                        and django_rest_framework
                    </p>
                </Card>
                <Card>
                    <div className="card_header">Web Scraping</div>
                    <p className="card_content">
                        Extract data from websites using python libratries like
                        BeautifulSoup and Scrapy
                    </p>
                </Card>
            </div>
            <div className="section about">
                <h4>About me</h4>
                <h1>Hey, I'm Sagar Lama</h1>
                <p>
                    I'm a CS student at Sunway Int'l Business School. I'm also a
                    certified fullstack developer.
                    I've completed my internship at Subisu Cabel Net as a Devops
                    Intern and am looking for a position of Software Engineer
                </p>
                <p>
                    I'm a passionate developer who loves to solve problems and
                    think outside the box.
                </p>
                <span className="lets_chat">Let's Chat</span>
            </div>
        </div>
    </div>
);

export default About;
