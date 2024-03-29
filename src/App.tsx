import React from "react";
import "./App.css";
import "./Components/styles/about.css";
import "./Components/styles/footer.css";
import "./Components/styles/projects.css";
import "./Components/styles/home.css";
import "./Components/styles/latest.css";
import Home from "./Components/home.tsx";
import About from "./Components/about.tsx";
import Projects from "./Components/Projects.tsx";
import Footer from "./Components/Footer.tsx";
import Latest from "./Components/latest.tsx";
function App() {
  const [theme, setTheme] = React.useState(true);

  function DarkMode() {
    setTheme((prev) => !prev);
  }
  //Default is dark-mode
  return (
    <div className={theme ? "App" : "App-light"}>
      <Home theme={theme} toggle={DarkMode} />
      <About theme={theme} toggle={DarkMode} />
      <Latest />
      <h2>My projects</h2>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
