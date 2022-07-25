import React from "react";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import SeventhLayer from "./Component/SeventhLayer";
import SixthLayer from "./Component/SixthLayer";
import SpaceOwnersHero from "./Component/SpaceOwnersHero";

function SpaceOwners() {
  return (
    <div>
      <Header/>
      <SpaceOwnersHero/>
      <SixthLayer/>
      <SeventhLayer/>
      <Footer/>
    </div>
  )
}

export default SpaceOwners;