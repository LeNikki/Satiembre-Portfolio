import React from "react";
import plantify from "./Assets/plantify.PNG";
function Latest() {
  return (
    <div className="latest-cont">
      <h2>The Latest</h2>
      <p style={{ "text-align": "center" }}>
        Plantify E-commerce shop Made with NextJs + MongoDB
      </p>
      <img src={plantify} className="latest-img-1" />
      <span className=".proj-click">
        <a className="proj-link" href="https://plantify-shop.vercel.app/">
          Click to Follow Link
        </a>
      </span>
    </div>
  );
}

export default Latest;
