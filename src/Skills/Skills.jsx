import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Skills.css";
const Skills = (props) => {
  const [showSkills, setShowSkills] = useState(false);

  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };
 
  return (
    <div className="skills_content" id="Skills">
      <div className="skills_header">
        <div className="skills_title">
        <div className="skills_icons_before skils_icons">{props.icons_before}</div>
          <h2>{props.skills_title}</h2>
          <div className="skills-icons_after skils_icons">
              <KeyboardArrowUpIcon className={`key-up ${showSkills?'active':''}`}  onClick={toggleSkills} />
          </div>
        </div>
        <div className="skill_list">
          {showSkills && (
              <div className="skills_data">
                  {props.Skills_name.map((skill) => (
                    <div className="skills_level">
                      <div className="skill_details">
                        <h3>{skill.name}</h3>
                        <p>{skill.value}%</p>
                      </div>
                      <div class="progress">
                        <div class="progress-fill" style={{width:`${skill.value}%`}}></div> 
                      </div>
                      {/* <progress value={skill.value}  max={100}>
                        {skill.value}
                      </progress> */}
                    </div>
                  ))}

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
