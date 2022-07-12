import React from "react";
import visibility from "../img/visibility.png";
import value from "../img/normal.png";
import pool from "../img/pool.png";
import easy from "../img/easy.png";
import max from "../img/max.png";
import scale from "../img/scale.png";
function Cores() {
  return (
    <section className="core-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6 mt-5 mb-3 mobile-center" data-aos="slide-right" data-aos-duration="2000">
            <h2 className="mb-5">Give your team<br/><span style={{color: "#00ABE7"}}>freedom to work from</span><br/>anywhere</h2>
            <button className="btn btn-primary py-2 px-4" type="button">Try Base for teams</button>
          </div>
          <div className="col-md-6" data-aos="slide-left" data-aos-duration="2000">
            <div className="row price-mobile">
              <div className="col-md-6">
                <div className="core-bg mb-1">
                  <img src={visibility} alt="" className="img-fluid" width={40} />
                  <h6 className="mt-4 mb-4">Flexibility</h6>
                  <p>Don’t be tied down by leases.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="core-bg">
                  <img src={value} alt="" className="img-fluid" width={40} />
                  <h6 className="mt-4 mb-4">The new normal</h6>
                  <p>80% of staff prefer remote work.</p>
                </div>
              </div>
            </div>
            <div className="row mt-4 price-mobile">
              <div className="col-md-6">
                <div className="core-bg mb-1">
                  <img src={pool} alt="" className="img-fluid" width={40} />
                  <h6 className="mt-4 mb-4">Expand your talent pool</h6>
                  <p>Not limited by city. 90% of candidates filter their search by remote jobs</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="core-bg">
                  <img src={max} alt="" className="img-fluid" width={40} />
                  <h6 className="mt-4 mb-4">Max productivity</h6>
                  <p>No more excuses: Poor power supply? uncomfortable at home? No problem</p>
                </div>
              </div>
            </div>
            <div className="row mt-4 price-mobile">
              <div className="col-md-6">
                <div className="core-bg mb-1">
                  <img src={scale} alt="" className="img-fluid" width={40} />
                  <h6 className="mt-4 mb-4">Scalable</h6>
                  <p>Start small and add capacity as your team grows. Suitable for fast growing teams</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="core-bg">
                  <img src={easy} alt="" className="img-fluid" width={40} />
                  <h6 className="mt-4 mb-4">Easy Transition</h6>
                  <p>Easily transition your traditional company to the future of work post-pandemic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cores;