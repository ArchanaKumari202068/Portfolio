import React from "react";
import "./Home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Home_img from "../Assets/profile_pic.jpg";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
const Home = ( ) => {

  return (
    <div className= {"container"} id="Home">
      
      <div className="Social_icons_home">
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
      <div className="home_data">
        <div className="home_title">
          <h1>Hi,I'am Archana Kumari</h1>
        </div>
        <div className="home_subtitle">
          
          <span>Computer Science Student</span>
        </div>
        <div className="home_desc">
          <p>
            I am a passionate individual aiming to excel in software
            development,full-stack development. With a hands-on approach, I
            strive to create impactful solutions and bring innovation to the
            digital realm.


            


          </p>


        </div>
        <div className="home_button">
          <button > Contact Me <SendOutlinedIcon/></button>
        </div>
      </div>
      <div className="home_img">
        <img src={Home_img} />
      </div>
    </div>
  );
};

export default Home;
