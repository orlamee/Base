import React from "react";
import black from "../img/workline-black.svg";
import invert from "../img/workline-invert.svg";
import card from "../img/card-img.png";
import plus from "../img/plus.svg";
import fundcard from "../img/fundcard.svg";
import humans from "../img/humans.svg";
import GetStarted from "./GetStarted";

function ThirdLayer() {
  return (
    <section className="App-third">
      <div className="desktop second-step">
        <img src={black} alt="" className="img-fluid bg" />
      </div>
      <div className="mobile second-step-mobile">
        <img src={invert} alt="" className="img-fluid bg" />
      </div>
      <div className="container desktop" style={{ marginTop: "-60px" }}>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="hero">
              <span style={{ color: "#00ABE7" }}>Why Base is</span> awesome?
            </h2>
          </div>
          <div className="col-md-12 text-center">
            <h1 className="bg-text">Benefits</h1>
          </div>
        </div>
        <div
          className="row justify-content-center app-card"
          data-aos="slide-right"
          data-aos-duration="2000"
        >
          <div className="col-md-5">
            <div className="card-bg">
              <h2>
                <span style={{ color: "#00ABE7" }}>Cost </span>
                <br />
                <span style={{ color: "#FF64FF" }}>effective</span>
              </h2>
              <h6 className="fs-6 pt-4 pb-4">
                Pay per minute, and for only time used
              </h6>
              <div className="text-center">
                <img src={fundcard} alt="" className="img-fluid" width="" />
              </div>
              <div className="float-end pt-3">
                <img src={plus} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-md-5 mb-3">
            <div className="card-bg secondth skew">
              <h2>
                <span style={{ color: "#00ABE7" }}>500+ </span>
                <br />
                inspiring spaces
              </h2>
              <h6 className="fs-6 pt-4 pb-4">
                There’s always one 5 mins from you
              </h6>
              <div className="text-center">
                <p>
                  <span style={{ color: "#00ABE7" }}>Debozgini, Lekki</span>
                </p>
                <img
                  src={card}
                  alt=""
                  className="img-fluid"
                  style={{ marginLeft: "-30px" }}
                />
              </div>
              <div className="float-end pt-3">
                <img src={plus} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center app-card mb-5"
          style={{ marginTop: "0px" }}
          data-aos="slide-left"
          data-aos-duration="2000"
        >
          <div className="col-md-5">
            <div
              className="card-bg thirdcard"
              style={{ margin: "-95px 0px 65px 0px" }}
            >
              <h2>
                <span style={{ color: "#00ABE7" }}>Instant </span>
                <br />
                check-in
              </h2>
              <h6 className="fs-6 pt-4 pb-4">
                Walk in anywhere without booking
              </h6>
              <div className="d-grid gap-2 d-md-block text-center mb-3">
                {/* <button className="btn btn-primary me-3 py-3 px-3" type="button">Sign up for free</button> */}
                <button className="btn btn-outline-dark-line me-1 py-2 text-line">
                  No long queues
                </button>
                <button className="btn btn-outline-dark-line py-2 text-line">
                  less processing
                </button>
              </div>
              <button className="btn btn-outline-dark-line me-1 py-2 btn-block text-line">
                No documentation and BS!
              </button>
              <div className="float-end pt-3">
                <img
                  src={plus}
                  alt=""
                  className="img-fluid"
                  style={{ marginTop: "103px" }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card-bg secondth" style={{ marginTop: "30px" }}>
              <h2>
                <span style={{ color: "#00ABE7" }}>Meet other </span>
                <br />
                <span style={{ color: "#FF64FF" }}>remote workers</span>
              </h2>
              <h6 className="fs-6 pt-4 pb-4">
                Meet new people, make new friends
              </h6>
              <div className="text-center">
                <img src={humans} alt="" className="img-fluid" width="" />
              </div>
              <div className="float-end pt-3">
                <img src={plus} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="button-space text-center">
          <GetStarted />
        </div>
      </div>
      <div className="container mobile" style={{ marginTop: "-60px" }}>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="hero">
              <span style={{ color: "#00ABE7" }}>Why Base is</span> awesome?
            </h2>
          </div>
          <div className="col-md-10 text-center">
            <h1 className="bg-text">Benefits</h1>
          </div>
        </div>
        <div
          className="row justify-content-center app-card"
          data-aos="slide-right"
          data-aos-duration="2000"
        >
          <div className="col-md-4 mb-5">
            <div className="card-bg">
              <h2>
                <span style={{ color: "#00ABE7" }}>Cost </span>
                <br />
                <span style={{ color: "#FF64FF" }}>effective</span>
              </h2>
              <h6 className="fs-6 pt-4 pb-4">
                Pay per minute, and for only time used
              </h6>
              <div className="text-center">
                <img src={fundcard} alt="" className="img-fluid" width="" />
              </div>
              <div className="float-end pt-3">
                <img src={plus} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card-bg secondth">
              <h2>
                <span style={{ color: "#00ABE7" }}>500+ </span>
                <br />
                inspiring spaces
              </h2>
              <h6 className="fs-6 pt-4 pb-4">
                There’s always one 5 mins from you
              </h6>
              <div className="text-center">
                <p>
                  <span style={{ color: "#00ABE7" }}>Debozgini, Lekki</span>
                </p>
                <img
                  src={card}
                  alt=""
                  className="img-fluid"
                  style={{ marginLeft: "-30px" }}
                />
              </div>
              <div className="float-end pt-3">
                <img src={plus} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center app-card"
          style={{ marginTop: "0px" }}
          data-aos="slide-left"
          data-aos-duration="2000"
        >
          <div className="col-md-4 mb-5">
            <div className="card-bg">
              <h2>
                <span style={{ color: "#00ABE7" }}>Instant </span>
                <br />
                check-in
              </h2>
              <h6 className="fs-6 pt-4 pb-4">
                Walk in anywhere without booking
              </h6>
              <div className="d-grid gap-2 d-md-block text-center mb-3">
                {/* <button className="btn btn-primary me-3 py-3 px-3" type="button">Sign up for free</button> */}
                <button className="btn btn-outline-dark-line me-1 py-2 text-line">
                  No long queues
                </button>
                <button className="btn btn-outline-dark-line py-2 text-line">
                  less processing
                </button>
              </div>
              <button className="btn btn-outline-dark-line me-1 py-2 btn-block text-line">
                No documentation and BS!
              </button>
              <div className="float-end pt-3">
                <img src={plus} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-bg secondth">
              <h2>
                <span style={{ color: "#00ABE7" }}>Meet other </span>
                <br />
                <span style={{ color: "#FF64FF" }}>remote workers</span>
              </h2>
              <h6 className="fs-6 pt-4 pb-4">
                Meet new people, make new friends
              </h6>
              <div className="text-center">
                <img src={humans} alt="" className="img-fluid" width="" />
              </div>
              <div className="float-end pt-3">
                <img src={plus} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="button-space text-center">
          <GetStarted />
        </div>
      </div>
    </section>
  );
}

export default ThirdLayer;
