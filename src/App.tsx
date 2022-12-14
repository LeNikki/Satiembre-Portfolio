import React from 'react'
import './App.css';
import './Components/styles/about.css'
import './Components/styles/footer.css'
import './Components/styles/projects.css'
import './Components/styles/home.css'
import Home from "./Components/home.tsx"
import About from "./Components/about.tsx"
import Projects from './Components/Projects.tsx';
import Footer from "./Components/Footer.tsx"
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
      <Projects theme= {theme} toggle={DarkMode} />
      <Footer/>
     
    </div>
  );
}

export default App;
