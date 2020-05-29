import React from "react";

import "./Projects.scss";
const Projects = () => (
    <div className="projects-section">
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
                    <p className="card_content">Social Media</p>
                </a>
                <a
                    href="https://relic-ecomstore.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card project"
                >
                    <div className="thumbnail" id="project2"></div>
                    <p className="card_content">E-Commerce</p>
                </a>
            </div>
        </div>
    </div>
);

export default Projects;
