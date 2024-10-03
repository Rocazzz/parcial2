import React, { useState } from "react";
import "./Projects.css"; 
import { projectsData } from "../../utils/data"; 

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const handlePrevClick = () => {
    setCurrentProject((prev) =>
      prev === 0 ? projectsData.length - 1 : prev - 1
    );
  };

  const handleNextClick = () => {
    setCurrentProject((prev) =>
      prev === projectsData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="projects-section">
      <h1>Projects</h1>
      <div className="carousel">
        <button className="carousel-button prev" onClick={handlePrevClick}>{"<"}</button>
        <div className="carousel-wrapper">
          <div
            className="carousel-content"
            style={{ transform: `translateX(-${currentProject * 100}%)` }}
          >
            {projectsData.map((project, index) => (
              <div key={index} className="carousel-item">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt={project.title} />
                  <p>{project.title}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-button next" onClick={handleNextClick}>{">"}</button>
      </div>
    </section>
  );
};

export default Projects;