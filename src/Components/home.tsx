import React from "react";
import Nicole from "./Assets/nicpic.png";
import Sun from "./Assets/sunny.png";
import Moon from "./Assets/moon.png";
import CV from "./Assets/Satiembre_Nicole_CV.pdf";
function Home(props) {
  return (
    <div className="home-cont">
      <nav
        style={
          props.theme
            ? { "border-bottom": "1px solid white", width: "100%" }
            : { "border-bottom": "1px solid grey", width: "100%" }
        }
      >
        <p style={{ width: "100%" }}>
          <img
            width="40px"
            style={{ float: "right", "margin-right": "2rem" }}
            src={props.theme ? Sun : Moon}
            aria-hidden="true"
            id={props.theme ? "theme-icon" : "theme-light"}
            onClick={() => props.toggle()}
          />{" "}
        </p>
      </nav>

      <div
        className="home-body"
        style={
          props.theme
            ? {
                "border-left": "1px solid white",
                "border-right": "1px solid white",
              }
            : {
                "border-left": "1px solid grey",
                "border-right": "1px solid grey",
              }
        }
      >
        <div className="left-container">
          <img src={Nicole} alt="Nicole Satiembre" className="Nicole" />
        </div>
        <div className={props.theme ? "right-container" : "right-light"}>
          <label>
            <p className="Kumusta">Kumusta? I'm</p>
            <h1 className="name">Nicole Satiembre</h1>
            <p>
              BS Computer Engineering | MERN Stack Web Developer | Web Designer
              from Cebu, Philippines
            </p>
          </label>
          <section className="buttons">
            <a className="contact" href="mailto:nicsatiembre@gmail.com">
              Mail me!
            </a>
            <span className="contact" style={{ "align-items": "center" }}>
              <i className="fa fa-download" aria-hidden="true" id="fa-download">
                {" "}
              </i>
              <a
                href={CV}
                download="Satiembre_Nicole_CV"
                id="ClickMe"
                style={{ "text-decoration": "none", color: "white" }}
              >
                {" "}
                Download my CV
              </a>
            </span>
          </section>
          <div
            style={{
              width: "100%",
              display: "flex",
              "justify-content": "center",
            }}
          >
            <ul className="icons">
              <li>
                <a href="https://www.facebook.com/LeNikki01234">
                  {" "}
                  <i
                    className="fa fa-facebook-square"
                    aria-hidden="true"
                    id="iconf"
                  ></i>{" "}
                </a>
              </li>
              <li>
                <a href="https://github.com/LeNikki">
                  {" "}
                  <i
                    className="fa fa-github-alt"
                    aria-hidden="true"
                    id="iconf"
                  ></i>{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nicole-satiembre-04a3b11b1">
                  {" "}
                  <i
                    className="fa fa-linkedin-square"
                    aria-hidden="true"
                    id="iconf"
                  ></i>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
