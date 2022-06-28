import React from "react";
import './App.css';
import logo from './img/logo.png'
import { Link } from "react-router-dom";
// import Password from './Password';
function SignUp() {
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
            <div className='col-md-6 col-lg-6'>
              <div className='login-wrap'>
                <div className='login-header'> 
                  <h5 className='fw-bolder'>Create your account</h5>
                </div>
                <div className='login-bottom'> 
                  <form className='row'>
                    <div className="mb-3">
                      <label className="form-label">First Name</label>
                      <input type="text" className="form-control py-4" placeholder="Enter first name"/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Surname</label>
                      <input type="text" className="form-control py-4"  placeholder="Enter surname"/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Phone Number</label>
                      <input type="tel" className="form-control py-4" placeholder="Enter phone number"/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email Address</label>
                      <input type="email" className="form-control py-4" placeholder="Enter email address"/>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input id="password" className="form-control py-4" type="password" maxLength="20" placeholder="Create a password"></input>
                    </div>
                    {/* <Password/> */}
                    {/* <div className='text-left mb-4'>
                      <small>Forgot Password?</small>
                    </div> */}
                    <div className="form-check ps-4 my-4">
                      <input className="form-check-input signed" type="checkbox" value="" id="flexCheckDefault"/>
                      <div className="checked">
                        <label className="form-check-label">
                          I agree to the terms and condtions
                        </label>
                      </div>
                    </div>
                    <div className="col-12 mt-5">
                      <button type="button" className="btn btn-primary rounded-pill btn-block py-3">Sign up</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className='my-4 text-center'>
                <small className='small'>Got an account? <span className='secondary-color'><Link to="/login">Sign in</Link></span></small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp;