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
          <div className="row justify-content-center social-contact-row">
            <div className="col-lg-6 col-12 d-flex flex-column align-items-left justify-content-left text-left social-contact-col">
              <a href="https://x.com/Angelniwe33">
                <FaTwitter /> Twitter
              </a>
              <a href="https://www.instagram.com/angeel_rc3/">
                <FaInstagram /> Instagram
              </a>
            </div>
            <div className="col-lg-6 col-12 d-flex flex-column align-items-right justify-content-right text-left social-contact-col">
              <a href="https://github.com/MangowDev">
                <FaGithub /> Github
              </a>
              <a href="https://www.linkedin.com/in/ángel-robles-76784a313">
                <FaLinkedin /> Linkedin
              </a>
            </div>
          </div>
          <div className="row justify-content-center social-contact-row">
            <div className="col-12 d-flex flex-column align-items-left justify-content-left text-left social-contact-col">
              <span>If you prefer to contact me via Email, you can contact me at: <b>mangodev03@gmail.com</b></span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12 d-flex flex-column align-items-left justify-content-left text-left contact-col">
          <form>
            <input type="text" placeholder="Name:"></input>
            <br></br>
            <input type="email" placeholder="Email:"></input>
            <br></br>
            <input type="text" placeholder="Website:"></input>
            <br></br>
            <textarea placeholder="Message:"></textarea>
            <input type="submit" value={"Submit"}></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
