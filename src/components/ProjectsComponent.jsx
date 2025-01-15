import "./ProjectsComponent.css";

function ProjectsComponent() {
  return (
    <div className="container main-projects-container">
      <div className="row justify-content-center text-center align-items-center title-projects-row">
        <h1>Projects</h1>
      </div>
      <div className="row justify-content-center projects-row1">
        <div className="col-lg-3 col-12 d-flex flex-column align-items-center justify-content-center text-center project-col">
          <h3>Melody Mango</h3>
          <p>
            An application made with React and Java Springboot to view your
            Spotify Stats and share them with your friends.
          </p>
        </div>
        <div className="col-lg-3 col-12 d-flex flex-column align-items-center justify-content-center text-center project-col">
          <h3>Stafko</h3>
          <p>
            Stafko is a simple web application made with React and NestJS that
            allows users to create, store, and manage projects.
          </p>
        </div>
        <div className="col-lg-3 col-12 d-flex flex-column align-items-center justify-content-center text-center project-col">
          <h3>Blackjack Mango</h3>
          <p>
            A Blackjack web game up to 6 local players made using javascript.
          </p>
        </div>
        <div className="col-lg-3 col-12 d-flex flex-column align-items-center justify-content-center text-center project-col">
          <h3>Barber mobile app</h3>
          <p>
            A mobile app developed with Flutter for users and barbers to manage
            and quote requested haircuts, created as a group project.
          </p>
        </div>
      </div>
      <div className="row justify-content-center project-viewer-row">
        <div className="col-12 d-flex flex-column align-items-center justify-content-center text-center project-viewer-col">
          <h1>Here, the project selected will be displayed.</h1>
        </div>
      </div>
      <div className="row justify-content-center projects-row2">
        <div className="col-lg-3 col-12 d-flex flex-column align-items-center justify-content-center text-center project-col">
          <h3>Plaxer recreation</h3>
          <p>
            A recreation of the Wordpress Plaxer theme made with Bootstrap and
            some Javascript.
          </p>
        </div>
        <div className="col-lg-3 col-12 d-flex flex-column align-items-center justify-content-center text-center project-col">
          <h3>DES Cipher app</h3>
          <p>File encryption application using DES encryption in Java.</p>
        </div>
        <div className="col-lg-3 col-12 d-flex flex-column align-items-center justify-content-center text-center project-col">
          <h3>Superchat</h3>
          <p>A simple local chat app made with Java and Java Swing.</p>
        </div>
        <div className="col-lg-3 col-12 d-flex flex-column align-items-center justify-content-center text-center project-col">
          <h3>Library Manager</h3>
          <p>
            This Java program consists of managing the database of a library
            using Hibernate.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsComponent;
