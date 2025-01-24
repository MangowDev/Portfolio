import { useState } from "react";
import "./ProjectsComponent.css";
import { FaGithub } from "react-icons/fa";
import BarberApp from "../assets/images/BarberApp.jpg";
import BlackjackMango from "../assets/images/BlackjackMango.png";
import FTP from "../assets/images/FTP.jpg";
import Library from "../assets/images/Library.png";
import MelodyMango from "../assets/images/MelodyMango.png";
import Plaxer from "../assets/images/Plaxer.png";
import Stafko from "../assets/images/Stafko.png";
import Superchat from "../assets/images/Superchat.jpg";

function ProjectsComponent() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = {
    "Melody Mango": {
      img: MelodyMango,
      title: "Melody Mango",
      text: "An application made with React and Java Springboot to view your Spotify Stats and share them with your friends.",
      description:
       "An application developed with React and Java Spring Boot to explore your Spotify statistics and share them with friends. Created as my final project for Multiplatform Application Development, this app combines two of my greatest passions: music and programming. The app allows users to view their Spotify stats, explore stats from other users, add them as friends, and analyze detailed information about songs and artists.",
      caption: "- Melody Mango Main Page -",
      url: "https://github.com/MangowDev/MelodyMango",
    },
    "Stafko": {
      img: Stafko,
      title: "Stafko",
      text: "Stafko is a simple web application made with React and NestJS that allows users to create, store, and manage projects.",
      description:
        "A web application built with React and NestJS that enables users to create, store, and manage projects. It incorporates a hexagonal architecture and includes Jest for testing. This project was developed for Beebit during my internship, based on their requirements. The application offers functionality similar to GitHub, allowing users to act as project collaborators, upload new versions, or take ownership as project creators, with the ability to modify the project's name, description, and collaborators. Additionally, it features a timer integrated with the Clockify API.",
      caption: "- Stafko Login -",
      url: "https://github.com/MangowDev/Stafko",
    },
    "Blackjack Mango": {
      img: BlackjackMango,
      title: "Blackjack Mango",
      text: "A Blackjack web game up to 6 local players made using JavaScript.",
      description:
        "A Blackjack web game for up to 6 local players, developed using JavaScript. Featuring a fully functional AI, the game allows players to compete against the AI while following traditional Blackjack rules. Whether playing solo or with others locally, this game delivers an engaging and authentic Blackjack experience.",
      caption: "- Blackjack Mango Game -",
      url: "https://github.com/MangowDev/Blackjack-Mango",
    },
    "Barber mobile app": {
      img: BarberApp,
      title: "Barber Mobile App",
      text: "A mobile app developed with Flutter for managers and barbers to manage and quote requested haircuts.",
      description:
     "A mobile app developed with Flutter for barbers and managers to manage and schedule requested haircuts. The app includes a calendar that displays the barber shop's available slots, allowing barbers to view and select their working hours. Managers have the ability to modify the shop’s opening hours and set holiday closures. Additionally, the app features a WhatsApp integration for direct communication. All data is stored and managed using Firebase.",
     caption: "- Barber mobile app concept photo (To replace) -",
      url: "https://github.com/victryx/peluqueria",
    },
    "Plaxer recreation": {
      img: Plaxer,
      title: "Plaxer Recreation",
      text: "A recreation of the Wordpress Plaxer theme made with Bootstrap and some JavaScript.",
      description:
      "A recreation of the WordPress Plaxer theme, built using Bootstrap and JavaScript. This project was designed to enhance my design skills, expand my capabilities, and practice implementing Bootstrap effectively.",
     caption: "- Plaxer home page -",
      url: "https://github.com/MangowDev/PlaxerRecreation",
    },
    "File Sync Storage App": {
      img: FTP,
      title: "FTP Folder Sync App",
      text: "FTP Folder sync application made using Java.",
      description:
      "FTP Folder sync application made using Java. This app allows you to create two folders that can be synced via FTP, providing a simple solution for creating backups.",
     caption: "- FTP App concept photo (To replace) -",
      url: "https://github.com/MangowDev/GestionFTP",
    },
    "Superchat": {
      img: Superchat,
      title: "Superchat",
      text: "A simple local chat app made with Java and Java Swing.",
      description:
      "A simple local chat application built with Java and Java Swing. This app enables a global chat across multiple instances using TCP, allowing seamless communication between users.",
     caption: "- Chat concept photo (To replace) -",
      url: "https://github.com/MangowDev/Superchat",
    },
    "Library Manager": {
      img: Library,
      title: "Library Manager",
      text: "This Java program consists of managing the database of a library using Hibernate.",
      description:
      "This Java program consists of managing the database of a library using Hibernate. The SpringBoot-React CRUD Library project is a frontend application developed with Next.js and SpringBoot that enables efficient library management. It provides CRUD (Create, Read, Update, Delete) functionalities for books, users, categories, and loans. Loans require the association of a book and a user, ensuring comprehensive control over the library's lending system.",
     caption: "- Library manager book list -",
      url: "https://github.com/MangowDev/BibliotecaSpringBoot",
    },
  };

  return (
    <div className="container main-projects-container" id="myProjects">
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
            <div className="col-lg-6 col-12 d-flex flex-column align-items-center justify-content-center text-center project-viewer-col">
              <div className="image-container-viewer">
                <img src={selectedProject.img} alt="Project" />
                <div className="caption">{selectedProject.caption}</div>
              </div>
            </div>
            <div className="col-lg-6 col-12 d-flex flex-column align-items-center justify-content-center text-center project-viewer-col2">
              <h2>{selectedProject.title}</h2>
              <div className="about-separation-bar"></div>
              <p>{selectedProject.description}</p>
              <button className="see-more-button">
              <a href={selectedProject.url}>
                <FaGithub /> Visit the repository
              </a>
              </button>
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
