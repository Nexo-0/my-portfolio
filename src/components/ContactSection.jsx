import React from "react";
import { FaGithub } from 'react-icons/fa';
function Contact() {

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container text-center">
        <h2>Questions or Comments</h2>
        <p>
          Send me a message or ask me a question using this form. I will do my
          best to get back to you soon!
        </p>
        <a
          href="https://wa.me/9373805186"
          className="btn btn-whatsapp my-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Message us on WhatsApp
        </a>
        <br></br>
        <div className="contact-details">
          <p>Kunal Petare</p>
          <p>Phone: 9373805186</p>
          <p>
            Email:{" "}
            <a href="mailto:contact@kunalpetare.in">contact@kunalpetare.in</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:kunalpetare123@gmail.com">
              kunalpetare123@gmail.com
            </a>
          </p>
          <a
            href="https://github.com/Nexo-0"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FaGithub /> GitHub: @Nexo-0
          </a>

          <p>Hours: 10 AM – 2 AM</p>
        </div>
      </div>
    </section>
  );

    return (
        <section id="contact" className="contact-section py-5">
            <div className="container text-center">
                <h2>Questions or Comments</h2>
                <p>Send me a message or ask me a question using this form. I will do my best to get back to you soon!</p>
                <a href="https://wa.me/9373805186" className="btn btn-whatsapp my-3" target="_blank" rel="noopener noreferrer">
                    Message us on WhatsApp
                </a>
                <br></br>
                <div className="contact-details">
                    <p>Kunal Petare</p>
                    <p>Phone: 9373805186</p>
                    <p>Email: <a href="mailto:contact@kunalpetare.in">contact@kunalpetare.in</a></p>
                    <p>Email: <a href="mailto:kunalpetare123@gmail.com">kunalpetare123@gmail.com</a></p>
                    <p>GitHub <a href="https://github.com/Nexo-0"></a>Nexo-0</p>
                    <p>Hours: 10 AM – 2 AM</p>
                </div>
            </div>
        </section>
    );

}

export default Contact;
