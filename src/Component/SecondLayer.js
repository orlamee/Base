import React from "react";
import venia from "../img/venia.png";
import WaitList from "./WaitList";
// import black from "../img/workline-black.svg";
// import invert from "../img/workline-invert.svg";
function Secondlayer() {
  return (
    <section className="secondlayer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3" data-aos="slide-right" data-aos-duration="2000">
            <img src={venia} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6" data-aos="slide-left" data-aos-duration="2000">
            <h2 className="hero"><span style={{color: "#00ABE7"}}>No advance booking,</span><br/>just walk in</h2>
            <div className="title-content">
              <div className="mb-5">
                <h6>Find a space</h6>
                <p className="mt-1">Click ‘Explore spaces’ or walk into any workspace with our logo displayed</p>
              </div>
              <div className="mb-5">
                <h6>Check in</h6>
                <p className="mt-1">Open your phone camera and scan the QR code at entrance to check in</p>
              </div>
              <div className="">
                <h6>Get to work</h6>
                <p className="mt-1">Get your work done. Don’t forget to check out when finished</p>
              </div>
              <div className="float-start">
                <WaitList/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="desktop">
        <img src={black} alt="" className="img-fluid bg" />
      </div>
      <div className="mobile">
        <img src={invert} alt="" className="img-fluid bg" />
      </div> */}
    </section>
  )
}

export default Secondlayer;