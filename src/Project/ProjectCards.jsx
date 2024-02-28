import React,{useState} from 'react'
import './Project.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GitHubIcon from '@mui/icons-material/GitHub';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'; 
import Slider from '../Slider/Slider';
const ProjectCards = (props) => {
  const [showSlider,setShowSlider] = useState(false);
  return (
      <div  className="container" id='Project_content'>
        <div className="project_img_container" >
          <div className='view-more-btn'>
            <button onClick={()=>setShowSlider(true)}>View More</button>
          </div>
          <img src={props.Project_img} alt="Project Screenshot"/>
        </div>
        <div className="project_information">
          <h3>{props.title}</h3>
          <p>{props.aboutProject.map((point, index) => (
            <span key={index}>{point}<br/></span>
          ))}</p>
          <p><strong>Technologies Used:</strong> {props.technologiesUsed}</p>
          <div className="project_btn">
              <Link to={props.SourceCode}><button> <p>Source Code</p> <p><GitHubIcon/></p></button></Link>
              <Link to={props.projectLink}><button> <p>View Demo</p> <p><SendOutlinedIcon/> </p>  </button></Link>
          </div>
        </div>
            {
              showSlider?
              <div className="slider_container">
                <p className="close" onClick={()=>{setShowSlider(false)}}><CloseIcon className='close-icon'/></p>
                <div className="slider">
                  <Slider images={props.sliderImgs}/>
                </div>
              </div>
              :null
            }
            </div>
  )
}

export default ProjectCards