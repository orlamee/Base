import React from "react";
import team from "../img/team.png";

function FourthLayer() {
  return (
    <section className="team-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-2">
            <div>
              <h2>Give your team <br/><span style={{color: "#00ABE7"}}>freedom to work</span> from<br/>anywhere</h2>
              <h6 className="mb-5 mt-3">Free your company from expensive leases. Start small and add capacity as your team grows.</h6>
              <button className="btn btn-primary me-3 py-3 px-5 shadow" type="button">Try for free</button>
            </div>
          </div>
          <div className="col-md-6">
            <img src={team} alt="" className="img-fluid"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FourthLayer;