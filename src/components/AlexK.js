import React from "react";
import alexK from "./alexK.css";
import coffeeGuy from "./photoAlex/coffeeGuy.png";

export default function AlexK() {
  return (
    <div className="parentDiv">
      <div id="hoizontal">
        <div id="upper">
          <h2 id="upperText">
            Take away<br></br> sustainable
          </h2>
        </div>
        <div id="middle">
          <h3 id="middleText">
            Bring your cup<br></br> and pay 0,30 less
          </h3>
        </div>
        <div id="lower">
          <h5 id="lowerText">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
          </h5>
        </div>
      </div>
      <div className="parentImage">
        <img src={coffeeGuy} alt="man offering cofee" />
      </div>
    </div>
  );
}
