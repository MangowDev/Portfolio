import logo from "../assets/images/MangoLogo2.png";
import "./Header.css";
import { FaHome, FaUser, FaPen, FaPhone } from "react-icons/fa";

function Header() {
  return (
    <header>
      <img className="logo-header-img" src={logo} alt="user-logo"></img>
      <nav>
        <a href="#">
          <div className="nav-link-div">
            <FaHome />
            <span>Home</span>
          </div>
        </a>
        <a href="#">
          <div className="nav-link-div">
            <FaUser />
            <span>About me</span>
          </div>
        </a>
        <a href="#">
          <div className="nav-link-div">
            <FaPen />
            <span>Projects</span>
          </div>
        </a>
        <a href="#">
          <div className="nav-link-div">
            <FaPhone />
            <span>Contact</span>
          </div>
        </a>
      </nav>
    </header>
  );
}

export default Header;
