import React from "react";
import linear from "../img/gradient.png";
import linearmobile from "../img/mobile-gradient.png";
import Hero from "./Hero";
function Gradient() {
  return(
    <section>
      <div className="App-banner">
        <img src={linear} alt="" className="bg desktop" style={{marginTop: "0px"}}/>
        <img src={linearmobile} alt="" className="bg mobile"/>
      </div>
      <Hero/>
    </section>
  )
}

export default Gradient;