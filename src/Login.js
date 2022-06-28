import './App.css';
import logo from './img/logo.png'
import Password from './Password';
import React from 'react';
import { Link } from "react-router-dom";
function Login() {
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
                  <h5 className='fw-bolder'>Log in to your account</h5>
                </div>
                <div className='login-bottom'> 
                  <form className='row'>
                    <div className="mb-3">
                      <label className="form-label">Email Address</label>
                      <input type="email" className="form-control py-4" id="formGroupExampleInput" placeholder="Enter email address"/>
                    </div>
                    <Password/>
                    <div className='text-left mb-4'>
                      <small>Forgot Password?</small>
                    </div>
                    <div className="col-12">
                      <button type="button" className="btn btn-primary rounded-pill btn-block py-3">Log in</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className='my-4 text-center'>
                <small className='small'>I'm new to Base <span className='secondary-color'><Link to="/create">Create account</Link></span></small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
