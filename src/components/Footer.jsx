import React from "react";

const Footer = () => {
	return (
		// <!-- Footer -->
		<footer className="py-2 text-center text-lg-start bg-light text-muted">
			{/* <!-- Section: Links  --> */}
			<section className="">
				<div className="container text-center text-md-start mt-5">
					{/* <!-- Grid row --> */}
					<div className="row mt-3">
						{/* <!-- Grid column --> */}
						<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
							{/* <!-- Content --> */}
							<h6 className="text-uppercase fw-bold mb-4">Greenlab</h6>

							<p>
								An online plant store in Singapore aimed at bringing hand-picked
								healthy plants, beautiful pots and handy gardening tools for
								everyone.
							</p>
						</div>
						{/* <!-- Grid column --> */}

						{/* <!-- Grid column --> */}
						<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
							{/* <!-- Links --> */}
							<h6 className="text-uppercase fw-bold mb-4">Shop</h6>
							<p>
								<a href="#!" className="text-reset">
									Plants
								</a>
							</p>
							<p>
								<a href="#!" className="text-reset">
									Gardening Essential
								</a>
							</p>
							<p>
								<a href="#!" className="text-reset">
									Services
								</a>
							</p>
						</div>
						{/* <!-- Grid column --> */}

						{/* <!-- Grid column --> */}
						<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
							{/* <!-- Links --> */}
							<h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
							<p>
								<a href="#!" className="text-reset">
									Contact Us
								</a>
							</p>
							<p>
								<a href="#!" className="text-reset">
									FAQ
								</a>
							</p>
							<p>
								<a href="#!" className="text-reset">
									Gallery
								</a>
							</p>
						</div>
						{/* <!-- Grid column --> */}

						{/* <!-- Grid column --> */}
						<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
							{/* <!-- Links --> */}
							<h6 className="text-uppercase fw-bold mb-4">Contact</h6>
							<p>
								<i className="fas fa-home me-3"></i> Lot 1178, Jalan Sri Aman,{" "}
								<br />
								KG Sri Jaya, Sungai Telor <br />
								81900 Kota Tinggi,
								<br />
								Johor, Malaysia
							</p>
							<p>
								<i className="fas fa-envelope me-3"></i>
								salesyixiang@gmail.com
							</p>
							<p>
								<i className="fas fa-phone me-3"></i> +60 12-755 1511
							</p>
						</div>
						{/* <!-- Grid column --> */}
					</div>
					{/* <!-- Grid row --> */}
				</div>
			</section>
			{/* <!-- Section: Links  --> */}

			{/* <!-- Copyright --> */}
			<div
				className="text-center p-2"
				style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
			>
				© 2022 Copyright. Website created by
				<a className="text-reset fw-bold" href="https://github.com/siangyin">
					SiangYin
				</a>
			</div>
			{/* <!-- Copyright --> */}
		</footer>
		// <!-- Footer -->
	);
};

export default Footer;
