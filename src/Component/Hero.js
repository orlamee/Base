import React from "react";
import hero from "../img/hero.png";
import lines from "../img/works-line.svg";
// import wework from "../img/wework.png";
// import valley from "../img/valley.png";
// import hub from "../img/hub.png";
// import work from "../img/workstation.png";
// import seedspace from "../img/seedspace.png";
import mobilehero from "../img/hero-mobile.png";
import worklines from "../img/worklines.svg";
import WaitList from "./WaitList";

function Hero() {
  return (
    <div className="banner-section">
			<img src={hero} alt="" className='img-fluid bg desktop' />
      {/* <img src={hero} alt="" className='img-fluid bg mobile'/> */}
			<div className="banner-inner">
				<div className="row subtext justify-content-center" data-aos="slide-down" data-aos-duration="2000">
          <div className="col-md-8 text-center">
            <h2 className='hero'><span style={{color: "#00ABE7"}}>Work</span> from the</h2>
            <h2 className='hero'>best <span style={{color: "#00ABE7"}}>workspaces</span></h2>
            {/* <Animation/> */}
            <h2 className='hero'>in your city</h2>
            <h6 className="text-muted pt-4 fs-5">Ditch inconsistent power supply at home, check-in to a</h6>
            <h6 className="text-muted fs-5">workspace near you, pay per minute</h6>
            <WaitList/>
          </div>
				</div>
        <img src={mobilehero} alt="" className="mobile img-fluid"/>
			</div>
      <div className="line-gradient desktop">
        <img src={lines} alt="" className="img-fluid bg" />
      </div>
      <div className="line-gradient mobile">
        <img src={worklines} alt="" className="img-fluid bg" />
      </div>
      <div className="container" data-aos="slide-left" data-aos-duration="2000">
        <div className="row justify-content-center desktop" style={{marginTop: "-120px"}}>
          <div className="col-md-8 text-center">
            <h3 className="account"><span style={{color: "#00ABE7"}}>1 account = </span>500+ workspaces</h3>
          </div>
        </div>
        <div className="row justify-content-center mobile" style={{marginTop: "-45px"}}>
          <div className="col-md-8 text-center">
            <h3 className="account"><span style={{color: "#00ABE7"}}>1 account = </span>500+ workspaces</h3>
          </div>
        </div>
        {/* <div className="row justify-content-center desktop">
          <div className="col-md-11 logo-sect text-center">
            <img className="d-inline me-4 img-fluid" alt="" src={wework}/>
            <img className="d-inline me-4 img-fluid" alt="" src={valley}/>
            <img className="d-inline me-4 img-fluid" alt="" src={seedspace}/>
            <img className="d-inline me-4 img-fluid" alt="" src={work}/>
            <img className="d-inline me-4 img-fluid" alt="" src={hub}/>
          </div>
        </div> */}
        {/* <div className="row justify-content-center logo-sect mobile">
          <div className="col text-center">
            <img className="d-inline me-4 img-fluid" alt="" src={wework}/>
          </div>
          <div className="col text-center">
            <img className="d-inline me-4 img-fluid" alt="" src={valley}/>
          </div>
          <div className="col text-center">
            <img className="d-inline me-4 img-fluid" alt="" src={seedspace}/>
          </div>
          <div className="col text-center">
            <img className="d-inline me-4 img-fluid" alt="" src={work}/>
          </div>
          <div className="col text-center">
            <img className="d-inline me-4 img-fluid" alt="" src={hub}/>
          </div>
        </div> */}
        <div className="row justify-content-center mt-5">
          <div className="col-md-5 mb-3">
            <div className="d-flex flex-row pin">
              <i className="fa fa-map-pin icon-hero me-3" aria-hidden="true"></i>
              <h6>Live in: Lagos, Port Harcourt, Abeokuta, Abuja</h6>
            </div>
          </div>
          <div className="col-md-5">
            <div className="d-flex flex-row pin">
              <i className="fa fa-bullhorn icon-hero me-3" aria-hidden="true"></i>
              <h6>Coming soon: Ibadan, Owerri, Accra, Nairobi</h6>
            </div>
          </div>
        </div>
        <div className="row justify-content-center hero-button">
          {/* <div className="col-md-5 text-center">
            <button className="btn btn-primary me-3 py-3 px-5 shadow" type="button">Try for free</button>
          </div> */}
          <WaitList/>
        </div>
      </div>
		</div>
  )
}

export default Hero;