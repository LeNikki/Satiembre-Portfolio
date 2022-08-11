import React from 'react'
import './App.css';
import Home from "./Components/home.js"
import About from "./Components/about.js"
import Projects from './Components/Projects';
import Footer from "./Components/Footer.js"
function App() {
  const style= {
    width: "70%"
  }
  const[theme, setTheme] = React.useState(true)

  function DarkMode(){
    setTheme((prev)=>!prev)
  }
  //Default is dark-mode
  return (
    <div className={theme? "App" : "App-light"}>

     <Home theme= {theme} toggle={DarkMode}/>
      <hr style={style}></hr>
      <About theme= {theme} toggle={DarkMode}/>
      <p className="my-projects-title">My Projects</p>
      <Projects theme= {theme} toggle={DarkMode}/>
      <Footer/>
     
    </div>
  );
}

export default App;
