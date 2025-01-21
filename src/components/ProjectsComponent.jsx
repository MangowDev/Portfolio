import { useState } from "react";
import "./ProjectsComponent.css";

function ProjectsComponent() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = {
    "Melody Mango": {
      img: "imagen1.jpg",
      text: "An application made with React and Java Springboot to view your Spotify Stats and share them with your friends.",
      caption: "- Melody Mango main page -",
    },
    "Stafko": {
      img: "src/assets/images/login.png",
      text: "Stafko is a simple web application made with React and NestJS that allows users to create, store, and manage projects.",
      description: "A web application made with React and NestJS that allows users to create, store, and manage projects, it features an hexagonal architecture, and Jest testing. This was a project made for the Beebit company, which was requested by them during my time as Intern.",
      caption: "- Stafko Login -",
    },
    "Blackjack Mango": {
      img: "imagen3.jpg",
      text: "A Blackjack web game up to 6 local players made using JavaScript.",
    },
    "Barber mobile app": {
      img: "imagen4.jpg",
      text: "A mobile app developed with Flutter for users and barbers to manage and quote requested haircuts.",
    },
    "Plaxer recreation": {
      img: "imagen5.jpg",
      text: "A recreation of the Wordpress Plaxer theme made with Bootstrap and some JavaScript.",
    },
    "DES Cipher app": {
      img: "imagen6.jpg",
      text: "File encryption application using DES encryption in Java.",
    },
    "Superchat": {
      img: "imagen7.jpg",
      text: "A simple local chat app made with Java and Java Swing.",
    },
    "Library Manager": {
      img: "imagen8.jpg",
      text: "This Java program consists of managing the database of a library using Hibernate.",
    },
  };

  return (
    <div className="container main-projects-container">
      <div className="row justify-content-center text-center align-items-center title-projects-row">
        <h1>Projects</h1>
      </div>

      <div className="row justify-content-center projects-row1">
        {Object.keys(projects)
          .slice(0, 4)
          .map((title) => (
            <div
              key={title}
              className="col-lg-3 col-12 d-flex flex-column align-items-center justify-content-center text-center project-col"
              onClick={() => setSelectedProject(projects[title])}
            >
              <h3>{title}</h3>
              <p>{projects[title].text}</p>
            </div>
          ))}
      </div>

      <div className="container-fluid project-viewer-container">

        {selectedProject ? (
      <div className="row justify-content-between project-viewer-row">
            <div className="col-lg-6 col-12 d-flex flex-col align-items-center justify-content-center text-center project-viewer-col">
              <div className="image-container-viewer">
                <img src={selectedProject.img} alt="Project" />
                <div className="caption">{selectedProject.caption}</div>
              </div>
            </div>
            <div className="col-lg-6 col-12 d-flex flex-col align-items-center justify-content-center text-center project-viewer-col">
              <h3>Stafko</h3>
              <p>{selectedProject.description}</p>
            </div>
          </div>
        ) : (
          <div className="col-12 d-flex flex-column align-items-center justify-content-center text-center project-viewer-col">
            <h1>Click on a project to view details.</h1>
          </div>
        )}
      </div>

      <div className="row justify-content-center projects-row2">
        {Object.keys(projects)
          .slice(4)
          .map((title) => (
            <div
              key={title}
              className="col-lg-3 col-12 d-flex flex-column align-items-center justify-content-center text-center project-col"
              onClick={() => setSelectedProject(projects[title])}
            >
              <h3>{title}</h3>
              <p>{projects[title].text}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProjectsComponent;
