import React from "react";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5">Portfolio</h2>
        <div className="row g-4 justify-content-center">
          <div className="col-md-3">
            <div className="card shadow-sm position-relative">
              <img
                src="/Images/Weather.jpg"
                className="card-img-top"
                alt="Weather Software"
              />
              <div className="card-body">
                <h5 className="card-title">Weather Software</h5>
                <p className="card-text">This is a weather software.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm position-relative">
              <a
                href="https://codecrafters.codingwale.in/"
                className="stretched-link"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <img
                src="/Images/CodeCrafters.png"
                className="card-img-top"
                alt="CodeCrafters"
              />
              <div className="card-body">
                <h5 className="card-title">CodeCrafters</h5>
                <p className="card-text">Best developer for web development.</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-sm position-relative">
              <img
                src="/Images/CarVilla.png"
                className="card-img-top"
                alt="CarVilla"
              />
              <div className="card-body">
                <h5 className="card-title">CarVilla</h5>
                <p className="card-text">Best Car Selling Web</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
