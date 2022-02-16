import React from "react";
import icon from "../assets/images/greenlab.png";
const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-light">
			{/* <!-- Container wrapper --> */}
			<div className="container-fluid">
				{/* <!-- Toggle button --> */}
				<button
					className="navbar-toggler"
					type="button"
					data-mdb-toggle="collapse"
					data-mdb-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<i className="fas fa-bars"></i>
				</button>

				{/* <!-- Collapsible wrapper --> */}
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					{/* <!-- Navbar brand --> */}
					<a className="navbar-brand mt-2 mt-lg-0" href="#">
						<img
							src="https://cdn-icons.flaticon.com/png/512/3196/premium/3196633.png?token=exp=1645017866~hmac=0933c02355d7abec6b2d36bd328f245e"
							height="30"
							alt="Logo"
							loading="lazy"
						/>
						<span className="fs-2 fw-bold text-success">Greenlab</span>
					</a>
					{/* <!-- Left links --> */}
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link" href="#">
								Shop
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Gallery
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Social
							</a>
						</li>
					</ul>
					{/* <!-- Left links --> */}
				</div>
				{/* <!-- Collapsible wrapper --> */}

				{/* <!-- Right elements --> */}
				<div className="d-flex align-items-center">
					{/* <!-- Icon --> */}

					<a className="text-reset me-3" href="#">
						<i className="fas fa-shopping-cart"></i>
						<span className="badge rounded-pill badge-notification bg-danger">
							1
						</span>
					</a>
					<a className="text-reset me-3" href="#">
						<i className="fas fa-database"></i>
						<span className="badge rounded-pill badge-notification bg-danger">
							10
						</span>
					</a>
					{/* signout */}
					<a className="text-reset me-3" href="#">
						<i className="fas fa-sign-out-alt"></i>
					</a>
				</div>
				{/* <!-- Right elements --> */}
			</div>
			{/* <!-- Container wrapper --> */}
		</nav>
	);
};

export default NavBar;
