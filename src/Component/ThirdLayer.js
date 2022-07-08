import React from "react";
import black from "../img/workline-black.svg";
import invert from "../img/workline-invert.svg";
import card from "../img/card-img.png";
import plus from "../img/plus.svg";

function ThirdLayer() {
  return (
    <section className="App-third">
      <div className="desktop second-step">
        <img src={black} alt="" className="img-fluid bg" />
      </div>
      <div className="mobile">
        <img src={invert} alt="" className="img-fluid bg" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="hero"><span style={{color: "#00ABE7"}}>Why Base is</span> awesome?</h2>
          </div>
          <div className="col-md-10 text-center">
            <h1 className="bg-text">Benefits</h1>
          </div>
        </div>
        <div className="row justify-content-center app-card">
          <div className="col-md-4">
            <div className="card-bg">
              <h2><span style={{color: "#00ABE7"}}>500+ </span><br/>spaces</h2>
              <h6 className="fs-6 pt-4">There’s always one 5 mins from you</h6>
              <div className="text-center">
                <p><span style={{color: "#00ABE7"}}>Veniahub, Ikeja</span></p>
                <img src={card} alt="" className="img-fluid" style={{marginLeft: "-31px"}} width="283px"/>
              </div>
              <div className="float-end pt-3">
                <img src={plus} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-bg" style={{marginTop: "70px"}}>
              <h2><span style={{color: "#00ABE7"}}>Meet other </span><br/><span style={{color: "#FF64FF"}}>remote workers</span></h2>
              <h6 className="fs-6 pt-4">Meet new people,  make new friends</h6>
              <div className="text-center">
                <p><span style={{color: "#00ABE7"}}>Veniahub, Ikeja</span></p>
                <img src={card} alt="" className="img-fluid" style={{marginLeft: "-31px"}} width="283px"/>
              </div>
              <div className="float-end pt-3">
                <img src={plus} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default ThirdLayer;