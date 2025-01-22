import "./Contact.css";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <div className="container main-contact-container">
      <div className="row justify-content-center contact-row">
        <div className="col-lg-6 col-12 d-flex flex-column align-items-left justify-content-left text-left contact-col">
          <h1>Contact me.</h1>
          <p>
            "I’m currently open to new opportunities and actively listening to
            work offers. Feel free to reach out—I’d love to connect and explore
            how I can contribute to your team!"
          </p>
          <div className="row justify-content-between social-contact-row">
            <div className="col-lg-6 col-12 d-flex flex-column align-items-left justify-content-left text-left social-contact-col">
              <a href="#">
                <FaTwitter /> Twitter
              </a>
              <a href="#">
                <FaInstagram /> Instagram
              </a>
            </div>
            <div className="col-lg-6 col-12 d-flex flex-column align-items-right justify-content-right text-left social-contact-col">
              <a href="#">
                <FaGithub /> Github
              </a>
              <a href="#">
                <FaLinkedin /> Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
