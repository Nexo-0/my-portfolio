import React from "react";

function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src="/Images/Kunal.jpg"
              className="img-fluid rounded-circle"
              alt="Kunal Petare"
            />
          </div>
          <div className="col-md-8">
            <h2>My Background</h2>
            <ul>
              <li>Aspiring developer, coder, and UI/UX designer.</li>
              <li>
                Currently pursuing a Diploma in Computer Engineering at DY Patil
                Polytechnic University, Ambi Talegaon Dabhade.
              </li>
              <li>Skilled in HTML, CSS, Bootstrap, JavaScript, and Python.</li>
              <li>Learning React JS, Tailwind CSS, and Material UI.</li>
              <li>
                Future plans include working with Linux and security, moving
                towards ethical hacking.
              </li>
              <li>
                Started coding in 7th grade with a goal to be the best developer
                in the market.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
