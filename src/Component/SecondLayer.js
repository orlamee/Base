import React from "react";
import venia from "../img/venia.png";
function Secondlayer() {
  return (
    <section className="secondlayer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <img src={venia} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="hero"><span style={{color: "#00ABE7"}}>No advance booking,</span><br/>just walk in</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Secondlayer;