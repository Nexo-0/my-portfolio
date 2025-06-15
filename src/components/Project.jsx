import React from "react";
import projectData from "../assets/projects.json";

function Project() {
  return (
    <section id="portfolio" className="portfolio-section bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5">Projects</h2>
        <div className="row g-4 justify-content-center">
          {projectData.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card shadow-sm h-100 position-relative">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">
                    {project.description} <br />
                    {project.note && (
                      <span className="text-muted small">{project.note}</span>
                    )}
                  </p>

                  {project.live ? (
                    <a
                      href={project.live}
                      className="btn btn-outline-primary me-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <button className="btn btn-outline-secondary me-2" disabled>
                      Demo Unavailable
                    </button>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      className="btn btn-outline-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
