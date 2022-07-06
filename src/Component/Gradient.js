import React from "react";
import linear from "../img/gradient.png";
import Hero from "./Hero";
function Gradient() {
  return(
    <section>
      <div className="App-banner">
        <img src={linear} alt="" className="bg"/>
      </div>
      <Hero/>
    </section>
  )
}

export default Gradient;