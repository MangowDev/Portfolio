import { FaArrowUp, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import logo from "../assets/images/MangoLogo2.png";
import "./Footer.css";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
        <p>© MangoDev - 2025 | <b>mangodev03@gmail.com</b></p>
        <img className="logo-header-img" src={logo} alt="user-logo"></img>
        <div className="d-flex flex-row align-items-center justify-content-center text-center social-media-div">
          <a href="https://x.com/Angelniwe33"><FaTwitter/></a>
          <div className="vertical-separator"></div>
          <a href="https://www.instagram.com/angeel_rc3/"><FaInstagram/></a>
          <div className="vertical-separator"></div>
          <a href="https://github.com/MangowDev"><FaGithub/></a>
          <div className="vertical-separator"></div>
          <a href="www.linkedin.com/in/ángel-robles-76784a313"><FaLinkedin/></a>
          <div className="up-button" onClick={scrollToTop}>
            <FaArrowUp/>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
