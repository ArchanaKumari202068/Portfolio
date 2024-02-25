import React from "react";
import "./Navbar.css";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className={`Navbar ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact me</li>
      </ul>

      <div className="day-night_toggel">
        {theme === "light" ? (
          <LightModeOutlinedIcon className="day_icons" />
        ) : (
          <DarkModeOutlinedIcon className="night_icons" />
        )}

        {theme === "light" ? (
          <ToggleOffOutlinedIcon
          onClick={() => {
            toggle_mode('light');
          }}
          className="ToggleOffIcon"
          />
          ) : (
          <ToggleOnOutlinedIcon className="ToggleOnIcon "  onClick={() => {
            toggle_mode('dark');
          }}/>
        )}
      </div>
    </div>
  );
};

export default Navbar;
