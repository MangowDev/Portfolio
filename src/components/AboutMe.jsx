import "./AboutMe.css";
import PersonalPhoto from "../assets/images/PersonalPhoto.webp";
import ComputerPhoto from "../assets/images/computer.webp";

function AboutMe() {
  return (
    <div className="container main-about-container" id="aboutMe">
      <div className="row justify-content-center text-center align-items-center title-about-row">
        <h1>About Me</h1>
      </div>
      <div className="row justify-content-center about-row">
        <div className="col-lg-6 col-12 d-flex flex-column align-items-center justify-content-center text-center about-col">
          <div className="image-container">
            <img src={PersonalPhoto} alt="user-img" />
            <div className="caption">- Personal graduation photo -</div>
          </div>
        </div>
        <div className="col-lg-6 col-12 d-flex flex-column align-items-left justify-content-center text-left about-col">
          <h2>Formation</h2>
          <div className="about-separation-bar"></div>
          <h4>Qualifications</h4>
          <span>- Multiplatform Application Developer</span>
          <span>- Web Application Developer</span>
          <span>- Technician in Microsystems and Networks</span>
          <div className="about-separation-bar" id="separationBarLanguages"></div>
          <h4>Languages</h4>
          <span>- Spanish (Native)</span>
          <span>- English (Level B2 | Cambridge Certificate)</span>
        </div>
      </div>
      <div className="row justify-content-center about-row">
        <div className="col-lg-6 col-12 d-flex flex-column align-items-end justify-content-center text-end about-col">
          <h2>Experience</h2>
          <div className="about-separation-bar"></div>
          <h4>Intern at Guadalinfo Padul - 2021 (Web Development)</h4>
          <p>
            I get a lot of knowledge about the use of HTML and CSS, certificated
            from Google.
          </p>
          <div className="about-separation-bar"></div>
          <h4>Intern at Beebit - 2024 (Full-Stack Developer)</h4>
          <p>
            Learned the use of React, NestJS, Cypress and Directus, I learn
            about hexagonal architecture as well, building a project in the
            process. (STAFKO)
          </p>
        </div>
        <div className="col-lg-6 col-12 d-flex flex-column align-items-center justify-content-center text-center about-col">
          <div className="image-container-2">
            <img src={ComputerPhoto} alt="computer-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
