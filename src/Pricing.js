import React from "react";
import Benefits from "./Component/Benefits";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Price from "./Component/Price";
import PricingHero from "./Component/PricingHero";
import SeventhLayer from "./Component/SeventhLayer";

function Pricing() {
  return (
    <div>
      <Header/>
      <PricingHero/>
      <Price/>
      <Benefits/>
      <SeventhLayer/>
      <Footer/>
    </div>
  )
}

export default Pricing;