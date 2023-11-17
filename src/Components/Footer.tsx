import React from "react";

function Footer() {
  const style = {
    color: "black",
  };

  return (
    <div className="Footer-container">
      <div>
        <h3>
          <strong style={style}>Let's connect on social media!</strong>
        </h3>

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
        <h4 style={style}>Copyright @ 2022 Nicole Satiembre</h4>
        <h4 style={style}>
          This webpage is designed and coded by Nicole Satiembre
        </h4>
      </div>
    </div>
  );
}

export default Footer;
