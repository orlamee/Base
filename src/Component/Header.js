import React from 'react';
import logo from '../img/logo.svg';
import { Link } from "react-router-dom";
function Header() {
	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-light">
			<div className='container'>
				<Link className='navbar-brand' to="/">
					<img src={logo} alt="" className='logo img-fluid' />
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<div className='mx-auto'>
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/for-team">For teams</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="!#">Explore spaces</a>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/pricing">Pricing</Link>
							</li>
						</ul>
					</div>
					<div className='ml-auto'>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<Link to="/login-as" className='nav-link me-3'>Log in</Link>
							</li>
							<li className='nav-item'>
						   	<a className='btn btn-primary px-4' href="/">Try for free</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
export default Header;