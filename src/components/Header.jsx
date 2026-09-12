import logo from "../assets/images/MangoLogo2.png";
import "./Header.css";
import { FaHome, FaUser, FaPen, FaPhone, FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

function Header(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Automatically close on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSectionClick = (sectionId) => {
    setIsOpen(false);
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

  const navLinks = (isMobile = false) => (
    <>
      <Link to="/" onClick={() => isMobile && setIsOpen(false)}>
        <div className={`nav-link-div ${isMobile ? "mobile-nav-link" : ""}`}>
          <FaHome />
          <span>{props.links.home}</span>
        </div>
      </Link>
      <div
        className={`nav-link-div ${isMobile ? "mobile-nav-link" : ""}`}
        onClick={() => handleSectionClick("aboutMe")}
      >
        <a>
          <FaUser />
          <span>{props.links.about}</span>
        </a>
      </div>
      <div
        className={`nav-link-div ${isMobile ? "mobile-nav-link" : ""}`}
        onClick={() => handleSectionClick("myProjects")}
      >
        <a>
          <FaPen />
          <span>{props.links.projects}</span>
        </a>
      </div>
      <Link to="/contact" onClick={() => isMobile && setIsOpen(false)}>
        <div className={`nav-link-div ${isMobile ? "mobile-nav-link" : ""}`}>
          <FaPhone />
          <span>{props.links.contact}</span>
        </div>
      </Link>
    </>
  );

  return (
    <header className="main-header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img className="logo-nav-img" src={logo} alt="user-logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">{navLinks(false)}</nav>

        {/* Mobile Hamburger Button */}
        <button
          className={`burger-btn ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          type="button"
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
      </div>

      {/* Render Mobile Drawer and Backdrop via Portal */}
      {typeof document !== "undefined" &&
        createPortal(
          <>
            <div
              className={`mobile-backdrop ${isOpen ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <div className={`mobile-nav-drawer ${isOpen ? "open" : ""}`}>
              <div className="drawer-header">
                <span className="drawer-title">Navegación</span>
                <button
                  className="drawer-close-btn"
                  onClick={() => setIsOpen(false)}
                  aria-label="Cerrar menú"
                  type="button"
                >
                  <FaTimes />
                </button>
              </div>
              <nav className="mobile-nav">{navLinks(true)}</nav>
            </div>
          </>,
          document.body,
        )}
    </header>
  );
}

Header.propTypes = {
  links: PropTypes.shape({
    home: PropTypes.string,
    about: PropTypes.string,
    projects: PropTypes.string,
    contact: PropTypes.string,
  }).isRequired,
};

export default Header;
