import React from "react";
import joinbase from "../img/joinbase.png";
import joinbasemobile from "../img/joinbase-mobile.png";

function FifthLayer () {
  return (
    <section className="join-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-2">
            <h2>Join the Base<br/>community for <span style={{color: "#827F7F"}}>remote<br/>workers</span></h2>
            <ul className="listed mt-4">
              <li>Networking & Social events</li>
              <li>Educative Seminars</li>
              <li>Membership perks</li>
            </ul>
          </div>
          <div className="col-md-6">
            <img src={joinbase} alt="" className="img-fluid desktop"/>
            <img src={joinbasemobile} alt="" className="img-fluid mobile"/>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid">
        <div className="row counter">
          <div className="col-md-3 text-center">
            <h3>600k</h3>
            <h6>Checkins</h6>
          </div>
          <div className="col-md-3 text-center">
            <h3>23k</h3>
            <h6>Members</h6>
          </div>
          <div className="col-md-3 text-center">
            <h3>3k</h3>
            <h6>Spaces</h6>
          </div>
          <div className="col-md-3 text-center" style={{marginTop : "27px"}}>
            <button className="btn btn-primary" type="button">Join Base</button>
          </div>
        </div>  
      </div> */}
    </section>
  )
}

export default FifthLayer;