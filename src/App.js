import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Projects from "./Project/Projects";
function App() {
  const [theme,setTheme] = useState('light')
  return (
    <div className="App">
      <Navbar theme={theme} setTheme={setTheme}/>
      <Home/>
      <Projects/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
