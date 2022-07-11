import React from "react";
import logo from "../img/logo.png";
function Footer() {
  return(
    <section className="footer-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 text-center">
            <h2>Let’s get to work</h2>
            <div className="d-grid gap-2 d-md-block mt-4">
              <button className="btn btn-primary me-3 py-3 px-3" type="button">Sign up for free</button>
              <button className="btn btn-outline-dark py-3 px-3 text-white" type="button">Teams - Get started today</button>
            </div>
          </div>
        </div>
        <div className="row copyright">
          <div className="col-md-2 mb-5">
            <img src={logo} alt="" className="img-fluid" width={80} />
          </div>
          <div className="col-md-4 col-6 mb-4">
            <ul className="listed-unstyled footer-copyright">
              <li className="pe-4">For Team</li>
              <li>Explore spaces</li>
            </ul>
          </div>
          <div className="col-md-4 col-6 mb-4">
            <ul className="listed-unstyled footer-copyright">
              <li className="pe-4">New York<br/>+1 332 223 4010</li>
              <li>London (UK)<br/>+44 203 882 4518</li>
            </ul>
          </div>
          <div className="col-md-2 col-6">
            <div className="d-flex flex-row">
              <i class="bi bi-instagram me-4" style={{color: "#D9D9D9"}}></i>
              <i class="bi bi-twitter me-4" style={{color: "#D9D9D9"}}></i>
              <i class="bi bi-facebook" style={{color: "#D9D9D9"}}></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;