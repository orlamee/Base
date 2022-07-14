import React from "react";
import explore from "../img/explore.png";
import mobile from "../img/explore-mobile.png";

function ExploreHero() {
  return(
    <section>
      <div className="" style={{marginTop: "150px"}}>
        <img src={explore} alt="" className="bg img-fluid desktop" />
        <img src={mobile} alt="" className="bg img-fluid mobile" />
      </div>
      <div className="banner-inn">
				<div className="row subtext justify-content-center" data-aos="slide-down" data-aos-duration="2000">
          <div className="col-md-8 text-center">
            <h2 className='heroteam'>Explore Spaces</h2>
            {/* <Animation/> */}
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

export default ExploreHero;