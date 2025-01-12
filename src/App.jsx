import "./App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Main from "./components/Main";
import { useEffect, useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Header />
      <div
        className={`fade-in ${isVisible ? "fade-in-visible" : ""}`}
        id="content"
      >
        <Main />
        <AboutMe/>
      </div>
    </>
  );
}

export default App;
