import logo from "../assets/images/MangoLogo2.png";
import "./Header.css";
import { FaHome, FaUser, FaPen, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <img className="logo-header-img" src={logo} alt="user-logo"></img>
      <nav>
        <Link to="/">
          <div className="nav-link-div">
            <FaHome />
            <span>{props.links.home}</span>
          </div>
        </Link>
        <a href="#aboutMe">
          <div className="nav-link-div">
            <FaUser />
            <span>{props.links.about}</span>
          </div>
        </a>
        <a href="#myProjects">
          <div className="nav-link-div">
            <FaPen />
            <span>{props.links.projects}</span>
          </div>
        </a>
        <Link to="/contact">
          <div className="nav-link-div">
            <FaPhone />
            <span>{props.links.contact}</span>
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
