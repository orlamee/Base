import logo from '../img/logo.png';
function Header() {
	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-light">
			<div className="container">
				<a className="navbar-brand" href="/">
					<img src={logo} alt="" className='logo img-fluid' />
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<div className='mx-auto'>
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active me-4" aria-current="page" href="!#">For teams</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="!#">Explore spaces</a>
							</li>
						</ul>
					</div>
					<div className='ml-auto'>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<a className='nav-link me-3' href="!#">Log in</a>
							</li>
							<li className='nav-item'>
						   	<a className='btn btn-primary px-4' href="!#">Try for free</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);	
}
export default Header;