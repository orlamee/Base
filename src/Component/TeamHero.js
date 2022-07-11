import React from "react";
import heroteam from "../img/teamhero.png";

function TeamHero() {
  return(
    <section>
      <div className="" style={{marginTop: "150px"}}>
        <img src={heroteam} alt="" className="bg img-fluid" />
      </div>
      <div className="banner-inner">
				<div className="row subtext justify-content-center" data-aos="slide-down" data-aos-duration="2000">
          <div className="col-md-8 text-center">
            <h2 className='heroteam'>Increase your teams’ productivity</h2>
            {/* <Animation/> */}
            <div className="d-grid gap-2 d-md-block mt-5">
              <button className="btn btn-primary me-3 py-3 px-3" type="button">Try it now</button>
              <button className="btn btn-outline-dark py-3 px-3 text-secondary" type="button">Send me a brochure</button>
            </div>
          </div>
				</div>
        {/* <img src={mobilehero} alt="" className="mobile img-fluid"/> */}
			</div>
    </section>
  )
}

export default TeamHero;