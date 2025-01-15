import "./Main.css";
import { FaBootstrap, FaJava, FaJs } from "react-icons/fa";
import { FaFlutter, FaGit, FaPhp, FaReact, FaWordpress } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { SiOdoo, SiSpring } from "react-icons/si";

function Main() {
  return (
    <main className="container main-container">
      <div className="row justify-content-center main-row">
        <div className="col-lg-6 col-12 d-flex flex-column align-items-left justify-content-center text-left main-first-col">
          <div className="mangodev-div">
            <div></div>
            <span>MangoDev</span>
          </div>
          <h1>Ángel Robles Carrillo</h1>
          <h2>Full-Stack Developer</h2>
          <p>
            Building elegant and interactive web applications with passion,
            crafted to meet your every need.
          </p>
          <p>
            Passionate about computing since I was a child, eager to continue
            developing in my programming skills and learning what I am capable
            of. I consider myself creative and disciplined, motivated to create
            something new and willing to work as a team.
          </p>
          <p>
            I am driven by the challenge of solving complex problems and turning
            ideas into reality through technology. My goal is to grow both
            professionally and personally by contributing to innovative
            projects, where I can enhance my technical expertise while
            collaborating with others to achieve impactful results. With a
            commitment to continuous learning, I am always exploring the latest
            advancements in the tech industry, ensuring I stay at the forefront
            of innovation.
          </p>
        </div>
        <div className="col-lg-6 col-12 d-flex flex-column align-items-left justify-content-center text-left main-second-col">
          <h2 className="second-col-title">Tools and Technologies</h2>
          <div className="container-fluid">
            <div className="row justify-content-between tools-row">
              <div className="col-lg-3 col-12 d-flex flex-column align-items-center justify-content-center text-center tools-col">
                <FaJava></FaJava>
                <h4>Java</h4>
                <a href="#">
                  <button className="see-more-button">See More</button>
                </a>
              </div>
              <div className="col-lg-3 col-12 d-flex flex-column align-items-center justify-content-center text-center tools-col">
                <FaJs></FaJs>
                <h4>JavaScript</h4>
                <a href="#">
                  <button className="see-more-button">See More</button>
                </a>
              </div>
              <div className="col-lg-3 col-12 d-flex flex-column align-items-center justify-content-center text-center tools-col">
                <FaFlutter></FaFlutter>
                <h4>Flutter</h4>
                <a href="#">
                  <button className="see-more-button">See More</button>
                </a>
              </div>
            </div>
            <div className="row justify-content-between tools-row">
              <div className="col-lg-3 col-12 d-flex flex-column align-items-center justify-content-center text-center tools-col">
                <FaPhp></FaPhp>
                <h4>PHP</h4>
                <a href="#">
                  <button className="see-more-button">See More</button>
                </a>
              </div>
              <div className="col-lg-3 col-12 d-flex flex-column align-items-center justify-content-center text-center tools-col">
                <FaReact></FaReact>
                <h4>React</h4>
                <a href="#">
                  <button className="see-more-button">See More</button>
                </a>
              </div>
              <div className="col-lg-3 col-12 d-flex flex-column align-items-center justify-content-center text-center tools-col">
                <FaBootstrap></FaBootstrap>
                <h4>Bootstrap</h4>
                <a href="#">
                  <button className="see-more-button">See More</button>
                </a>
              </div>
            </div>
            <div className="row justify-content-between tools-row">
              <div className="col-lg-3 col-12 d-flex flex-column align-items-center justify-content-center text-center tools-col">
                <FaWordpress></FaWordpress>
                <h4>Wordpress</h4>
                <a href="#">
                  <button className="see-more-button">See More</button>
                </a>
              </div>
              <div className="col-lg-3 col-12 d-flex flex-column align-items-center justify-content-center text-center tools-col">
                <GrMysql></GrMysql>
                <h4>MySQL</h4>
                <a href="#">
                  <button className="see-more-button">See More</button>
                </a>
              </div>
              <div className="col-lg-3 col-12 d-flex flex-column align-items-center justify-content-center text-center tools-col">
                <SiSpring></SiSpring>
                <h4>Springboot</h4>
                <a href="#">
                  <button className="see-more-button">See More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
