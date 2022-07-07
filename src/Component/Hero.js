import React from "react";
import hero from "../img/hero.png";
import lines from "../img/works-line.png";
import wework from "../img/wework.png";
import valley from "../img/valley.png";
import hub from "../img/hub.png";
import work from "../img/workstation.png";
import seedspace from "../img/seedspace.png";
// import Animation from "./Animation";

function Hero() {
  return (
    <div className="banner-section">
			<img src={hero} alt="" className='img-fluid bg'/>
			<div className="banner-inner">
				<div className="row subtext justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className='hero'><span style={{color: "#00ABE7"}}>Work</span> from the</h2>
            <h2 className='hero'>best <span style={{color: "#00ABE7"}}>workspace</span></h2>
            {/* <Animation/> */}
            <h2 className='hero'>in your city</h2>
            <h6 className="text-muted pt-4 fs-5">Ditch inconsistent power supply at home, check-in to a workspace near you, pay per minute</h6>
            <div className="d-grid gap-2 d-md-block mt-5">
              <button className="btn btn-primary me-3 py-3 px-3" type="button">Sign up for free</button>
              <button className="btn btn-outline-dark py-3 px-3 text-secondary" type="button">Teams - Get started today</button>
            </div>
          </div>
				</div>
			</div>
      <div className="line-gradient">
        <img src={lines} alt="" className="img-fluid bg" />
      </div>
      <div className="container ">
        <div className="row justify-content-center" style={{marginTop: "-45px"}}>
          <div className="col-md-8 text-center">
            <h3 className="hero"><span style={{color: "#00ABE7"}}>1 account = </span>500+ workspaces</h3>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10 logo-sect text-center">
            <img className="d-inline me-3" alt="" src={wework}/>
            <img className="d-inline me-3" alt="" src={valley}/>
            <img className="d-inline me-3" alt="" src={seedspace}/>
            <img className="d-inline me-3" alt="" src={work}/>
            <img className="d-inline me-3" alt="" src={hub}/>
            {/* <div className="d-inline p-2 bg-dark text-white">d-inline</div> */}
          </div>
        </div>
      </div>
		</div>
  )
}

export default Hero;