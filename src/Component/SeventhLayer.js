import React from "react";
import logos from "../img/logos.png"; 

function SeventhLayer() {
  return (
    <section className="logo-house">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-2" style={{marginTop: "60px"}}>
            <h2>The best <span style={{color: "#00ABE7"}}>cafes, hotels<br/>& workspaces</span> partner<br/>with us</h2>
          </div>
          <div className="col-md-6">
            <img src={logos} alt="" className="img-fluid"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeventhLayer;