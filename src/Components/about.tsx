import React from "react";

function About(props) {
  return (
    <div
      className="About-container"
      style={
        props.theme
          ? { "border-top": "1px solid white" }
          : { "border-top": "1px solid grey" }
      }
    >
      {/* <div className = "About-container" >
       */}
      <div className={props.theme ? "skills" : "skills-light"}>
        <h2>
          <strong>About Me</strong>
        </h2>

        <p>
          As a web developer and graphic designer, I have a keen eye that
          specialize in creating captivating websites that boost your brand's
          online presence. Let's turn your dream website into reality! Whether
          it's an e-commerce platform, corporate site, or a dynamic web
          application, I'm here to bring your vision to life. Reach out via
          email or social media, and let's start building your exceptional
          online presence together. Transform your aspirations into an impactful
          digital asset. Let's collaborate and create a stunning website that
          truly represents your brand!
        </p>
        <p className="quote">
          I do what I love and I love the things that I do.
        </p>
        <h2>
          <strong>Skills</strong>
        </h2>

        <ul className="skills-ul">
          <li> ReactJs/NextJs </li>
          <li>MongoDB</li>
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
          <li>RESTful APIs</li>
          <li>Java</li>
          <li>Python</li>
          <li>C</li>
          <li>C#</li>
          <li>Figma-UI/UX</li>
          <li>Canva</li>
          <li>Photoshop</li>
          <li>Google apps</li>
          <li>Microsoft Office</li>
          <li>WordPress</li>
          <li>PHP</li>
          <li>Typescript</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
