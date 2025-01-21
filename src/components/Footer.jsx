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
          <a href="#"><FaTwitter/></a>
          <div className="vertical-separator"></div>
          <a href="#"><FaInstagram/></a>
          <div className="vertical-separator"></div>
          <a href="#"><FaGithub/></a>
          <div className="vertical-separator"></div>
          <a href="#"><FaLinkedin/></a>
          <div className="up-button" onClick={scrollToTop}>
            <FaArrowUp/>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
