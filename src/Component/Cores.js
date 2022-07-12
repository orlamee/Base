import React from "react";
import visibility from "../img/visibility.png";
function Cores() {
  return (
    <section className="core-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <h2 className="mb-5">Give your team<br/><span style={{color: "#00ABE7"}}>freedom to work from</span><br/>anywhere</h2>
            <button className="btn btn-primary py-2 px-4" type="button">Try Base for teams</button>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <div className="core-bg mb-1">
                  <img src={visibility} alt="" className="img-fluid" width={40} />
                  <h6 className="mt-4 mb-4">Flexibility</h6>
                  <p>Don’t be tied down by leases.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="core-bg">
                  <img src={visibility} alt="" className="img-fluid" width={40} />
                  <h6 className="mt-4 mb-4">Flexibility</h6>
                  <p>Don’t be tied down by leases.</p>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="core-bg mb-1">
                  <img src={visibility} alt="" className="img-fluid" width={40} />
                  <h6 className="mt-4 mb-4">Flexibility</h6>
                  <p>Don’t be tied down by leases.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="core-bg">
                  <img src={visibility} alt="" className="img-fluid" width={40} />
                  <h6 className="mt-4 mb-4">Flexibility</h6>
                  <p>Don’t be tied down by leases.</p>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="core-bg mb-1">
                  <img src={visibility} alt="" className="img-fluid" width={40} />
                  <h6 className="mt-4 mb-4">Flexibility</h6>
                  <p>Don’t be tied down by leases.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="core-bg">
                  <img src={visibility} alt="" className="img-fluid" width={40} />
                  <h6 className="mt-4 mb-4">Flexibility</h6>
                  <p>Don’t be tied down by leases.</p>
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