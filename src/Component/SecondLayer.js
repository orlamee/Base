import React from "react";
import one from "../img/01.png";
import two from "../img/02.png";
import three from "../img/03.png";
import four from "../img/01.svg";
import five from "../img/02.svg";
import six from "../img/03.svg";
function Secondlayer() {
  return (
    <section className="secondlayer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 text-center">
            <h2><span style={{color: "#00ABE7"}}>No advance booking,</span><br/>just walk in</h2>
          </div>
        </div>
        <div className="row stepping mb-5">
          <div className="col-md-4 text-center mb-4">
            <img src={one} alt="" className="img-fluid"/>
            <div className="mt-4">
              <div className="liner"><img src={four} alt="" className="img-fluid"/></div>
              <h6 className="my-4">Find a space</h6>
              <p>Click ‘Explore spaces’ or walk<br/>into any workspace with our<br/>logo displayed</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <img src={two} alt="" className="img-fluid"/>
            <div className="mt-4">
              <div className="liner"><img src={five} alt="" className="img-fluid"/></div>
              <h6 className="my-4">Check in</h6>
              <p>Open your phone camera and<br/>scan the QR code at entrance to<br/>check in</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <img src={three} alt="" className="img-fluid"/>
            <div className="mt-4">
              <div><img src={six} alt="" className="img-fluid"/></div>
              <h6 className="my-4">Get to work</h6>
              <p>Get your work done. Don’t forget<br/>to check out when finished</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center ">
          <div className="col-md-6 text-center">
            <a href="https://www.app.trybase.co/register" className="btn btn-primary me-3 py-3 px-5 shadow" type="button">Try for free</a>
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