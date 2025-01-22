import logo from "../assets/images/MangoLogo2.png";
import "./Header.css";
import { FaHome, FaUser, FaPen, FaPhone } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (sectionId) => {
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

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
        <div
          className="nav-link-div"
          onClick={() => handleSectionClick("aboutMe")}
        >
          <a>
            <FaUser />
            <span>{props.links.about}</span>
          </a>
        </div>
        <div
          className="nav-link-div"
          onClick={() => handleSectionClick("myProjects")}
        >
          <a>
            <FaPen />
            <span>{props.links.projects}</span>
          </a>
        </div>
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
