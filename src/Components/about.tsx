import React from "react"
import CV from "./Assets/Satiembre_Nicole.pdf"

function About(props){
   return ( <div className = "About-container">
        <div className ={props.theme? "about-me" : "about-light"}>
                <h2><strong>About Me</strong></h2>

                <span className ="email">
                <i className ="fa fa-envelope"  aria-hidden="true" id="fa-envelope"></i>
                <a href="mailto:nicsatiembre@gmail.com" className="email_add">nicsatiembre@gmail.com</a>
                </span>

                <p>Need help for your website? You're exactly in the right place.
                    I'm looking forward to help businesses build their online presence
                    by creating a cutting-edge website that will really boost
                    their brand image. Got a dream website in mind? 
                    Let's bring your ideas into life!
                    Send me a message right away so that we can start building your dream site!</p>
                <p className="quote">I do what I love and I love the things that I do.</p>
            </div>

            <div className={props.theme? "skills" : "skills-light"}>
                <h2><strong>Skills</strong></h2>
                <span className="resume-cv">
                    <i className="fa fa-download" aria-hidden="true" id="fa-download"></i>
                    <a href={CV} download="Satiembre_Nicole_CV" id="ClickMe">Click here to download my CV</a>
                </span>
                
                <ul>
                    <li>C# and C</li>
                    <li>HTML 5</li>
                    <li>CSS, Framework: Bootstrap</li>
                    <li>Javascript and Typescript, Frameworks: React JS, jQuery</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>Figma- Basic Wireframing and UI/UX design</li>
                    <li>Canva</li>
                    <li>Google apps</li>
                    <li>WordPress</li>
                    <li>MySQL Workbench and Java</li>
                    <li>Willingness to learn</li>
                </ul>
            </div>
    </div>)
}

export default About
