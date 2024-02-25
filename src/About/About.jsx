import React from "react";
import profile_pic from "../Assets/profile_pic.jpg"
import './About.css'
// import bg_img2 from '../Assets/bg_img2.svg'
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
const About = () => {
  return (
    <>
     <h2 className="heading_About">About me</h2>
    <div className="About">
    <div className="portfolio-image-container">
    <div className="About_img">
        <img src ={profile_pic}/>
        {/* <img src ={bg_img2} className="bg_img2"/> */}

      </div>

    </div>

     
     
      <div className="About_data">
        <div className="About_desc">
          <p>
            Greetings! I'm Archana Kumari, a passionate fourth-year B.Tech CSE
            student at Central University of Haryana, delving into the exciting
            realms of technology.
            <br></br>
             With a love for both creativity and
            problem-solving, I'm on a mission to design and develop captivating
            digital solutions. My journey through programming has equipped me
            with a versatile skill set spanning Python, C++, HTML, CSS, and
            JavaScript.
            <br></br>
             I find joy in bringing ideas to life, whether it's
            through crafting sleek user interfaces with React.js or building
            robust back-end systems using Node.js and Express.js. Exploring the
            depths of data with MongoDB has further fueled my curiosity and
            drive.
          </p>
        </div>
        <div className="About_button">
          <button >Download Resume  <SystemUpdateAltIcon/> </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
