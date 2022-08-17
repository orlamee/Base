import React from "react";
import member from "../img/member.png";

function TeamFooter() {
  return (
    <section>
      <section className="teamfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>The best companies<br/>are going <span style={{color: "#00ABE7"}}>remote with<br/>Base</span></h2>
              <a href="https://www.app.trybase.co/register" className="btn btn-primary py-2 px-4 mt-5" type="button">Try Base for teams</a>
            </div>
            <div className="col-md-6" data-aos="slide-left" data-aos-duration="2000">
              <img src={member} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid">
        <div className="row white-space"></div>
      </div>
    </section>
  )
}

export default TeamFooter;