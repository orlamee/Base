import React from "react";

function Price () {
  return (
    <section>
      <section className="price-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 text-center" data-aos="slide-down" data-aos-duration="2000">
              <h2 className="mb-3">Price plans</h2>
              <h6>Enjoy which option is right for you</h6>
            </div>
          </div>
          <div className="row price-table justify-content-center price-mobile">
            <div className="col-md-4 mb-3">
              <div className="price-header">
                <h6>Pay As You Go</h6>
                <p>Varies by workspace</p>
              </div>
              <div className="price-body">
                <div className="d-flex flex-row mb-2">
                  <i className="bi bi-check-circle-fill text-white pe-2"></i>
                  <h4>Access all Base Workspaces</h4>
                </div>
                <div className="d-flex flex-row mb-2">
                  <i className="bi bi-check-circle-fill text-white pe-2"></i>
                  <h4>Charged for each check-in</h4>
                </div>
                <div className="d-flex flex-row mb-2">
                  <i className="bi bi-check-circle-fill text-white pe-2"></i>
                  <h4>Pay for length of stay (variable per min rate) after check-out</h4>
                </div>
                <div className="d-flex flex-row mb-2">
                  <i className="bi bi-check-circle-fill text-white pe-2"></i>
                  <h4>Best for flexibility</h4>
                </div>
                <div className="d-flex flex-row mb-5">
                  <i className="bi bi-check-circle-fill text-white pe-2"></i>
                  <h4>No contracts, cancel any time</h4>
                </div>
                {/* <div className="d-flex flex-row mb-5">
                  <i className="bi bi-check-circle-fill text-white pe-2"></i>
                  <h4>Charged for each check-ins</h4>
                </div> */}
                <button className="btn btn-primary text-center btn-block py-2 px-3 small-btn" type="button">Try P.A.Y.G <i className="bi bi-arrow-right text-white"></i></button>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="price-header">
                <h6>Standard Plan</h6>
                <p>₦35k p/person p/month</p>
              </div>
              <div className="price-body">
                <div className="d-flex flex-row mb-2">
                  <i className="bi bi-check-circle-fill text-white pe-2"></i>
                  <h4>Access all Base Workspaces</h4>
                </div>
                <div className="d-flex flex-row mb-2">
                  <i className="bi bi-check-circle-fill text-white pe-2"></i>
                  <h4>Unlimited check-ins</h4>
                </div>
                <div className="d-flex flex-row mb-2">
                  <i className="bi bi-check-circle-fill text-white pe-2"></i>
                  <h4>Pay monthly and never have to pay at a workspace</h4>
                </div>
                <div className="d-flex flex-row mb-2">
                  <i className="bi bi-check-circle-fill text-white pe-2"></i>
                  <h4>Best for savings</h4>
                </div>
                <div className="d-flex flex-row mb-5">
                  <i className="bi bi-check-circle-fill text-white pe-2"></i>
                  <h4>No contracts, cancel any time</h4>
                </div>
                {/* <div className="d-flex flex-row mb-5">
                  <i className="bi bi-check-circle-fill text-white pe-2"></i>
                  <h4>No contracts, cancel any time</h4>
                </div> */}
                <button className="btn btn-primary text-center btn-block py-2 px-3 bg-purple small-btn" type="button">Try standard <i className="bi bi-arrow-right text-white"></i></button>
              </div>
            </div>
            {/* <div className="col-md-3">
              <div className="price-header">
                <h6>Platinum</h6>
                <p>10k p/month</p>
              </div>
              <div className="price-body">
                <div className="d-flex flex-row mb-2">
                  <i className="bi bi-check-circle-fill text-white pe-2"></i>
                  <h4>No contracts, cancel any time</h4>
                </div>
                <div className="d-flex flex-row mb-2">
                  <i className="bi bi-check-circle-fill text-white pe-2"></i>
                  <h4>No contracts, cancel any time</h4>
                </div>
                <div className="d-flex flex-row mb-2">
                  <i className="bi bi-check-circle-fill text-white pe-2"></i>
                  <h4>No contracts, cancel any time</h4>
                </div>
                <div className="d-flex flex-row mb-2">
                  <i className="bi bi-check-circle-fill text-white pe-2"></i>
                  <h4>No contracts, cancel any time</h4>
                </div>
                <div className="d-flex flex-row mb-2">
                  <i className="bi bi-check-circle-fill text-white pe-2"></i>
                  <h4>No contracts, cancel any time</h4>
                </div>
                <div className="d-flex flex-row mb-5">
                  <i className="bi bi-check-circle-fill text-white pe-2"></i>
                  <h4>No contracts, cancel any time</h4>
                </div>
                <button className="btn btn-primary text-center btn-block bg-gray py-2 px-3 small-btn" type="button">Try silver for your team <i className="bi bi-arrow-right text-white"></i></button>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <div className="container-fluid">
        <div className="row white-space"></div>
      </div>
    </section>
  )
}

export default Price;