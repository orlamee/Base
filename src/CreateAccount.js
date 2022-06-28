import React from "react";
import './App.css';
import logo from './img/logo.png'
import { Link } from "react-router-dom";

function CreateAccount() {
  return (
    <>
      <section className='login-section'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6 text-center mb-5'>
              <Link className='navbar-brand' to="/">
                <img src={logo} alt="" className='logo img-fluid' />
              </Link>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-md-6 col-lg-5'>
              <div className='login-wrap'>
                <div className='login-header'> 
                  <h5 className='fw-bolder'>Sign up as</h5>
                </div>
                <div className='login-bottom px-5'>
                  <form>
                    <div className="form-check custom-check mb-5">
                      <input className="form-check-input custom" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <div className="radio-container">
                        <label className="form-check-label radio-heading">
                          An individual
                        </label>
                        <p>I want to work from a base</p>
                      </div>
                    </div>
                    <div className="form-check custom-check mb-5">
                      <input className="form-check-input custom" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                      <div className="radio-container">
                        <label className="form-check-label radio-heading">
                          Team Manager
                        </label>
                        <p>Manage team members from a central account</p>
                      </div>
                    </div>
                    <div className="col-12 mt-5">
                      <button type="button" className="btn btn-primary rounded-pill btn-block py-3"><Link to="/signup">Sign up</Link></button>
                    </div>
                  </form>
                </div>
              </div>
              <div className='my-4 text-center'>
                <small className='small'>Got an account? <span className='secondary-color'><Link to="/login-as">Sign in</Link></span></small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CreateAccount;