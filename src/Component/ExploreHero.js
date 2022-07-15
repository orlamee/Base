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
          <div className="col-md-8 text-center" style={{marginTop: "30px"}}>
            <h2 className='heroteam'>Explore Spaces</h2>
          </div>
				</div>
			</div>
    </section>
  )
}

export default ExploreHero;