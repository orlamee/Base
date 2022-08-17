import React from "react";
import Cores from "./Component/Cores";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Price from "./Component/Price";
import TeamFooter from "./Component/TeamFooter";
import TeamHero from "./Component/TeamHero";

function ForTeam() {
  return(
    <div className="App">
      <Header/>
      <TeamHero/>
      <Cores/>
      <Price/>
      <TeamFooter/>
      <Footer/>
    </div>
  )
}

export default ForTeam;