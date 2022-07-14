import React from "react";
import ExploreHero from "./Component/ExploreHero";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Location from "./Component/Location";
import SeventhLayer from "./Component/SeventhLayer";

function ExploreSpace() {
  return (
    <div>
      <Header/>
      <ExploreHero/>
      <Location/>
      <SeventhLayer/>
      <Footer/>
    </div>
  )
}

export default ExploreSpace;