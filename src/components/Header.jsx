import logo from "../assets/images/MangoLogo2.png";
import "./Header.css";
import { FaHome, FaUser, FaPen, FaPhone } from "react-icons/fa";

function Header(props) {
  return (
    <header>
      <img className="logo-header-img" src={logo} alt="user-logo"></img>
      <nav>
        <a href="#">
          <div className="nav-link-div">
            <FaHome />
            <span>{props.links.home}</span>
          </div>
        </a>
        <a href="#">
          <div className="nav-link-div">
            <FaUser />
            <span>{props.links.about}</span>
          </div>
        </a>
        <a href="#">
          <div className="nav-link-div">
            <FaPen />
            <span>{props.links.projects}</span>
          </div>
        </a>
        <a href="#">
          <div className="nav-link-div">
            <FaPhone />
            <span>{props.links.contact}</span>
          </div>
        </a>
      </nav>
    </header>
  );
}

export default Header;
