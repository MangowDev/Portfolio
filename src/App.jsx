import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ProjectsComponent from "./components/ProjectsComponent";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const links = {
    home: "Home",
    about: "About me",
    projects: "Projects",
    contact: "Contact",
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header links={links} />
              <div
                className={`fade-in ${isVisible ? "fade-in-visible" : ""}`}
                id="content"
              >
                <Main />
                <AboutMe />
                <ProjectsComponent />
                <Footer />
              </div>
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Header links={links} />
              <div className="main-content">
                <Contact />
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
