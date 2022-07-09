import React from "react";
import black from "../img/workline-black.svg";
import invert from "../img/workline-invert.svg";
import card from "../img/card-img.svg";
import plus from "../img/plus.svg";
import fundcard from "../img/fundcard.svg";

function ThirdLayer() {
  return (
    <section className="App-third">
      <div className="desktop second-step">
        <img src={black} alt="" className="img-fluid bg" />
      </div>
      <div className="mobile second-step-mobile">
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
              <h6 className="fs-6 pt-4 pb-4">There’s always one 5 mins from you</h6>
              <div className="text-center">
                <p><span style={{color: "#00ABE7"}}>Veniahub, Ikeja</span></p>
                <img src={card} alt="" className="img-fluid" width="283px"/>
              </div>
              <div className="float-end pt-3">
                <img src={plus} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card-bg skew">
              <h2><span style={{color: "#00ABE7"}}>Meet other </span><br/><span style={{color: "#FF64FF"}}>remote workers</span></h2>
              <h6 className="fs-6 pt-4 pb-4">Meet new people,  make new friends</h6>
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
        <div className="row justify-content-center app-card" style={{marginTop: "0px"}}>
          <div className="col-md-4">
            <div className="card-bg" style={{margin: "-65px 0px 65px 0px" }}>
              <h2><span style={{color: "#00ABE7"}}>Instant </span><br/>check-in</h2>
              <h6 className="fs-6 pt-4 pb-4">Walk in anywhere without booking</h6>
              <div className="d-grid gap-2 d-md-block text-center mb-3">
                {/* <button className="btn btn-primary me-3 py-3 px-3" type="button">Sign up for free</button> */}
                <button className="btn btn-outline-dark-line me-1 py-2 text-line">No long queues</button>
                <button className="btn btn-outline-dark-line py-2 text-line">less processing</button>
              </div>
              <button className="btn btn-outline-dark-line me-1 py-2 btn-block text-line">No documentation and BS!</button>
              <div className="float-end pt-3">
                <img src={plus} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-bg">
              <h2><span style={{color: "#00ABE7"}}>Cost </span><br/><span style={{color: "#FF64FF"}}>effective</span></h2>
              <h6 className="fs-6 pt-4 pb-4">Pay per minute, and for only time used</h6>
              <div className="text-center">
                <p><span style={{color: "#00ABE7"}}>Veniahub, Ikeja</span></p>
                <img src={fundcard} alt="" className="img-fluid" width="283px"/>
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