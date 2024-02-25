import React from "react";
import ProjectCards from "./ProjectCards";
import Shopping_site_img1 from "../Assets/Shopping_site_img1.png";
import Shopping_site_img2 from "../Assets/Shopping_site_img2.png";
import Shopping_site_img3 from "../Assets/Shopping_site_img3.png";
import Shopping_site_img4 from "../Assets/Shopping_site_img4.png";
import Shopping_site_img5 from "../Assets/Shopping_site_img5.png";
import Shopping_site_img6 from "../Assets/Shopping_site_img6.png";
import Shopping_site_img7 from "../Assets/Shopping_site_img7.png";
import Shopping_site_img8 from "../Assets/Shopping_site_img8.png";
import Shopping_site_img9 from "../Assets/Shopping_site_img9.png";
import Bytecode_learner_img from "../Assets/Bytecode_learnerns_img1.png";
import Bytecode_learner_img2 from "../Assets/Bytecode_learnerns_img2.png";
import Bytecode_learner_img3 from "../Assets/Bytecode_learnerns_img3.png";
import Bytecode_learner_img4 from "../Assets/Bytecode_learnerns_img4.png";
import Stackoverflow_img1 from "../Assets/Stackoverflow_clone_img1.png";
import Stackoverflow_img2 from "../Assets/Stackoverflow_clone_img2.png";
import Stackoverflow_img3 from "../Assets/Stackoverflow_clone_img3.png";
import Stackoverflow_img4 from "../Assets/Stackoverflow_clone_img4.png";
import Stackoverflow_img5 from "../Assets/Stackoverflow_clone_img4.png";
const Projects = () => {
  return (
    <div className="projects_container_section">
      <h1>My Work</h1>
      <ProjectCards
        aboutProject={[
          "Developed a full-fledged e-commerce website using the MERN stack, providing a seamless and responsive shopping experience.",
          "mplemented dynamic product sorting (price, reviews) and a user- friendly shopping cart.             ",
          "Added JWT authentication for user access. ",
          "Hosted frontend on Vercel and backend on Render for optimal performance. ",
        ]}
        href="https://shopping-site-archana.vercel.app/"
        projectLink="https://shopping-site-archana.vercel.app/"
        technologiesUsed="Html,CSS,Js, React.js, Node.js,Express.js, MongoDB"
        title="Shopping site"
        Project_img={Shopping_site_img3}
        sliderImgs={[
          Shopping_site_img1,
          Shopping_site_img2,
          Shopping_site_img3,
          Shopping_site_img4,
          Shopping_site_img5,
          Shopping_site_img6,
          Shopping_site_img7,
          Shopping_site_img8,
          Shopping_site_img9,
        ]}
      />
      <ProjectCards
        aboutProject={[
          "Developed web UI/UX through Figma and designedprototypes.",
          "Used ReactJS for Frontend.",
          "Worked with existing API’s to access necessary information from the backend. ",
          "Collaborated with teammates and updated application versions using Git and Git.",
        ]}
        href="http://bytecodelearners.cuh.ac.in/"
        projectLink="http://bytecodelearners.cuh.ac.in/"
        technologiesUsed="Html,CSS,Js, React.js, Node.js,Express.js, MongoDB"
        title="Bytecode learner"
        Project_img={Bytecode_learner_img}
        sliderImgs={[
          Bytecode_learner_img,
          Bytecode_learner_img2,
          Bytecode_learner_img3,
          Bytecode_learner_img4,
        ]}
      />
      <ProjectCards
        aboutProject={[
          "Developed a StackOverflow clone using MERN stack  (MongoDB, Express.js, React, Node.js)",
          "Implemented user authentication, question posting, and answer functionalities using React for the frontend and Express.js for the backend.",
          " Utilized MongoDB for database management to store and retrieve user-generated questions and answers.",
          "Integrated responsive design and intuitive UI for seamless user experience in line with the original StackOverflow platform.",
          " Hosted the frontend using Vercel and the backend using Render.",
        ]}
        href="https://archana-stackoverflow.vercel.app/"
        projectLink="https://archana-stackoverflow.vercel.app/"
        technologiesUsed="Html,CSS,Js, React.js, Node.js,Express.js, MongoDB"
        title="Stackoverflow Clone"
        Project_img={Stackoverflow_img2}
        sliderImgs={[
          Stackoverflow_img2,
          Stackoverflow_img1,
          Stackoverflow_img3,
          Stackoverflow_img4,
          Stackoverflow_img5,
        ]}
      />
    </div>
  );
};

export default Projects;
