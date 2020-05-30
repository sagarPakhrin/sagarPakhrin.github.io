import React from "react";

import "./Projects.scss";
const Projects = () => (
    <div className="projects-section" id="projects">
        <div className="container">
            <h1>Projects</h1>

            <div className="projects">
                <a
                    href="https://github.com/sagarPakhrin/BookSharingApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card project"
                >
                    <div className="thumbnail" id="project1"></div>
                    <h3 className="card_header">Social Media</h3>
                    <p className="card_content">
                        A social media-like application build on Django and
                        React. The project uses django_rest_framework for
                        RESTful APIs for backend service and React for frontend{" "}
                    </p>
                </a>
                <a
                    href="https://relic-ecomstore.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card project"
                >
                    <div className="thumbnail" id="project2"></div>
                    <h3 className="card_header">E-Commerce</h3>
                    <p className="card_content">
    This project is just a frontend ecommerce application built using react and redux. It applies concepts like, HOC, Styled-Components
    </p>
                </a>
            </div>
        </div>
    </div>
);

export default Projects;
