import React from "react";
import Skills from "./Skills";
import CodeIcon from "@mui/icons-material/Code";
import DataObjectIcon from "@mui/icons-material/DataObject";
import DvrIcon from "@mui/icons-material/Dvr";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ImagesearchRollerOutlinedIcon from "@mui/icons-material/ImagesearchRollerOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import "./Skills.css";

const SkillsData = () => {
  return (
    <div className="skills_section">
      <h1>Skills</h1>
      <div className="skills-container">
            <Skills
            icons_before={<CodeIcon />}
            skills_title="Programming Languages"
            Skills_name={[
                { name: "Python", value: 75 },
                { name: "C++", value: 60 },
            ]}
            />
            <Skills
            icons_before={<DataObjectIcon />}
            skills_title="Frontend Development"
            Skills_name={[
                { name: "Python", value: 75 },
                { name: "C++", value: 60 },
            ]}
            />
            <Skills
            icons_before={<DataObjectIcon />}
            skills_title="Backend Development"
            Skills_name={[
                { name: "Python", value: 75 },
                { name: "C++", value: 60 },
            ]}
            />
            <Skills
            icons_before={<TrendingUpIcon />}
            skills_title="Data Science"
            Skills_name={[
                { name: "Python", value: 75 },
                { name: "C++", value: 60 },
            ]}
            />
            <Skills
            icons_before={<DvrIcon />}
            skills_title="Designing"
            Skills_name={[
                { name: "Python", value: 75 },
                { name: "C++", value: 60 },
            ]}
            />

            <Skills
            icons_before={<ImagesearchRollerOutlinedIcon />}
            skills_title="Tools"
            Skills_name={[
                { name: "Python", value: 75 },
                { name: "C++", value: 60 },
            ]}
            />
      </div>
    </div>
  );
};
export default SkillsData;
