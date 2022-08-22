import React from "react";
import heroteam from "../img/teamhero.png";
import mobile from "../img/teamhero-mobile.png";
import WaitList from "./WaitList";

function TeamHero() {
  return(
    <section>
      <div className="" style={{marginTop: "150px"}}>
        <img src={heroteam} alt="" className="bg img-fluid desktop" />
        <img src={mobile} alt="" className="bg img-fluid mobile" />
      </div>
      <div className="banner-inn">
				<div className="row subtext justify-content-center" data-aos="slide-down" data-aos-duration="2000">
          <div className="col-md-10 text-center">
            <h2 className='heroteam'>Increase your teams’ productivity</h2>
            {/* <Animation/> */}
            <WaitList/>
            {/* <div className="d-grid gap-2 d-md-block mt-5">
              <button className="btn btn-primary me-3 py-2 px-5" type="button">Try it now</button>
              <button className="btn btn-outline-dark py-2 px-3 text-secondary" type="button">Send me a brochure</button>
            </div> */}
          </div>
				</div>
			</div>
    </section>
  )
}

export default TeamHero;