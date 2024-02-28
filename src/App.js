import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Projects from "./Project/Projects";
import SkillsData from "./Skills/Skills_data"
function App() {
  const [theme,setTheme] = useState('light')
  return (
    <div className="App">
      <Navbar theme={theme} setTheme={setTheme}/>
      <Home  theme={theme} setTheme={setTheme}/>
      <SkillsData/>
      {/* <Skills />  all data is inside SkillsData component so, we need that. Here <Skills> is just small coponent which show only one skill*/} 
      <Projects/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
