import React from "react";
import workspace from "../img/spaces.svg";

function SixLayer() {
  return (
    <section className="workspaces-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-10 text-center">
            <h2>Make more money<br/>from your <span style={{color: "#00ABE7"}}>workspaces</span></h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src={workspace} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 mt-5">
            <ul className="listed-colored mb-4">
              <li>Increase footfall from young professionals and creatives</li>
              <li>List for FREE, set your own prices & availability</li>
              <li>Make money from your dormant spaces</li>
              <li>Just provide power, Wifi & comfort</li>
              <li>Enjoy perks of being a space owner</li>
            </ul>
            <button className="btn btn-primary py-2 px-4" type="button">List my space</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SixLayer;