import React from "react";

const Main = () => {
	return (
		<div>
			{/* <!--Carousel Wrapper--> */}
			<div
				id="carousel-example-1z"
				className="carousel slide carousel-fade pt-4"
				data-ride="carousel"
			>
				{/* <!--Indicators--> */}
				<ol className="carousel-indicators">
					<li
						data-target="#carousel-example-1z"
						data-slide-to="0"
						className="active"
					></li>
					<li data-target="#carousel-example-1z" data-slide-to="1"></li>
					<li data-target="#carousel-example-1z" data-slide-to="2"></li>
				</ol>
				{/* <!--/.Indicators--> */}

				{/* <!--Slides--> */}
				<div className="carousel-inner" role="listbox">
					{/* <!--First slide--> */}
					<div className="carousel-item active">
						<div
							className="view"
							style={{
								backgroundImage:
									"url('https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%282%29.jpg'); background-repeat: no-repeat; background-size: cover",
							}}
						>
							{/* <!-- Mask & flexbox options--> */}
							<div className="mask rgba-black-strong d-flex justify-content-center align-items-center">
								{/* <!-- Content --> */}
								<div className="text-center white-text mx-5 wow fadeIn">
									<h1 className="mb-4">
										<strong>Learn Bootstrap 4 with MDB</strong>
									</h1>

									<p>
										<strong>Best & free guide of responsive web design</strong>
									</p>

									<p className="mb-4 d-none d-md-block">
										<strong>
											The most comprehensive tutorial for the Bootstrap 4. Loved
											by over 500 000 users. Video and written versions
											available. Create your own, stunning website.
										</strong>
									</p>

									<a
										target="_blank"
										href="https://mdbootstrap.com/education/bootstrap/"
										className="btn btn-outline-white btn-lg"
									>
										Start free tutorial
										<i className="fas fa-graduation-cap ml-2"></i>
									</a>
								</div>
								{/* <!-- Content --> */}
							</div>
							{/* <!-- Mask & flexbox options--> */}
						</div>
					</div>
					{/* <!--/First slide--> */}

					{/* <!--Second slide--> */}
					<div className="carousel-item">
						<div
							className="view"
							style={{
								backgroundImage:
									"url('https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%283%29.jpg'); background-repeat: no-repeat; background-size: cover",
							}}
						>
							{/* <!-- Mask & flexbox options--> */}
							<div className="mask rgba-black-strong d-flex justify-content-center align-items-center">
								{/* <!-- Content --> */}
								<div className="text-center white-text mx-5 wow fadeIn">
									<h1 className="mb-4">
										<strong>Learn Bootstrap 4 with MDB</strong>
									</h1>

									<p>
										<strong>Best & free guide of responsive web design</strong>
									</p>

									<p className="mb-4 d-none d-md-block">
										<strong>
											The most comprehensive tutorial for the Bootstrap 4. Loved
											by over 500 000 users. Video and written versions
											available. Create your own, stunning website.
										</strong>
									</p>

									<a
										target="_blank"
										href="https://mdbootstrap.com/education/bootstrap/"
										className="btn btn-outline-white btn-lg"
									>
										Start free tutorial
										<i className="fas fa-graduation-cap ml-2"></i>
									</a>
								</div>
								{/* <!-- Content --> */}
							</div>
							{/* <!-- Mask & flexbox options--> */}
						</div>
					</div>
					{/* <!--/Second slide--> */}

					{/* <!--Third slide--> */}
					<div className="carousel-item">
						<div
							className="view"
							style={{
								backgroundImage:
									"url('https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%285%29.jpg'); background-repeat: no-repeat; background-size: cover",
							}}
						>
							{/* <!-- Mask & flexbox options--> */}
							<div className="mask rgba-black-strong d-flex justify-content-center align-items-center">
								{/* <!-- Content --> */}
								<div className="text-center white-text mx-5 wow fadeIn">
									<h1 className="mb-4">
										<strong>Learn Bootstrap 4 with MDB</strong>
									</h1>

									<p>
										<strong>Best & free guide of responsive web design</strong>
									</p>

									<p className="mb-4 d-none d-md-block">
										<strong>
											The most comprehensive tutorial for the Bootstrap 4. Loved
											by over 500 000 users. Video and written versions
											available. Create your own, stunning website.
										</strong>
									</p>

									<a
										target="_blank"
										href="https://mdbootstrap.com/education/bootstrap/"
										className="btn btn-outline-white btn-lg"
									>
										Start free tutorial
										<i className="fas fa-graduation-cap ml-2"></i>
									</a>
								</div>
								{/* <!-- Content --> */}
							</div>
							{/* <!-- Mask & flexbox options--> */}
						</div>
					</div>
					{/* <!--/Third slide--> */}
				</div>
				{/* <!--/.Slides--> */}

				{/* <!--Controls--> */}
				<a
					className="carousel-control-prev"
					href="#carousel-example-1z"
					role="button"
					data-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carousel-example-1z"
					role="button"
					data-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">Next</span>
				</a>
				{/* <!--/.Controls--> */}
			</div>
			{/* <!--/.Carousel Wrapper--> */}

			{/* <!--Main layout--> */}
			<main>
				<div className="container">
					{/* <!--Navbar--> */}
					<nav className="navbar navbar-expand-lg navbar-dark mdb-color lighten-3 mt-3 mb-5">
						{/* <!-- Navbar brand --> */}
						<span className="navbar-brand">Categories:</span>

						{/* <!-- Collapse button --> */}
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#basicExampleNav"
							aria-controls="basicExampleNav"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>

						{/* <!-- Collapsible content --> */}
						<div className="collapse navbar-collapse" id="basicExampleNav">
							{/* <!-- Links --> */}
							<ul className="navbar-nav mr-auto">
								<li className="nav-item active">
									<a className="nav-link" href="#">
										All
										<span className="sr-only">(current)</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Shirts
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Sport wears
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Outwears
									</a>
								</li>
							</ul>
							{/* <!-- Links --> */}

							<form className="form-inline">
								<div className="md-form my-0">
									<input
										className="form-control mr-sm-2"
										type="text"
										placeholder="Search"
										aria-label="Search"
									/>
								</div>
							</form>
						</div>
						{/* <!-- Collapsible content --> */}
					</nav>
					{/* <!--/.Navbar--> */}

					{/* <!--Section: Products v.3--> */}
					<section className="text-center mb-4">
						{/* <!--Grid row--> */}
						<div className="row wow fadeIn">
							{/* <!--Grid column--> */}
							<div className="col-lg-3 col-md-6 mb-4">
								{/* <!--Card--> */}
								<div className="card">
									{/* <!--Card image--> */}
									<div className="view overlay">
										<img
											src="https://m.media-amazon.com/images/I/51zGE7W2l3L.jpg"
											className="card-img-top"
											alt=""
										/>
										<a>
											<div className="mask rgba-white-slight"></div>
										</a>
									</div>
									{/* <!--Card image--> */}

									{/* <!--Card content--> */}
									<div className="card-body text-center">
										{/* <!--Category & Title--> */}
										<a href="" className="grey-text">
											<h5>Shirt</h5>
										</a>
										<h5>
											<strong>
												<a href="" className="dark-grey-text">
													Denim shirt
													<span className="badge badge-pill danger-color">
														NEW
													</span>
												</a>
											</strong>
										</h5>

										<h4 className="font-weight-bold blue-text">
											<strong>120$</strong>
										</h4>
									</div>
									{/* <!--Card content--> */}
								</div>
								{/* <!--Card--> */}
							</div>
							{/* <!--Grid column--> */}

							{/* <!--Grid column--> */}
							<div className="col-lg-3 col-md-6 mb-4">
								{/* <!--Card--> */}
								<div className="card">
									{/* <!--Card image--> */}
									<div className="view overlay">
										<img
											src="https://m.media-amazon.com/images/I/51zGE7W2l3L.jpg"
											className="card-img-top"
											alt=""
										/>
										<a>
											<div className="mask rgba-white-slight"></div>
										</a>
									</div>
									{/* <!--Card image--> */}

									{/* <!--Card content--> */}
									<div className="card-body text-center">
										{/* <!--Category & Title--> */}
										<a href="" className="grey-text">
											<h5>Sport wear</h5>
										</a>
										<h5>
											<strong>
												<a href="" className="dark-grey-text">
													Sweatshirt
												</a>
											</strong>
										</h5>

										<h4 className="font-weight-bold blue-text">
											<strong>139$</strong>
										</h4>
									</div>
									{/* <!--Card content--> */}
								</div>
								{/* <!--Card--> */}
							</div>
							{/* <!--Grid column--> */}

							{/* <!--Grid column--> */}
							<div className="col-lg-3 col-md-6 mb-4">
								{/* <!--Card--> */}
								<div className="card">
									{/* <!--Card image--> */}
									<div className="view overlay">
										<img
											src="https://m.media-amazon.com/images/I/51zGE7W2l3L.jpg"
											className="card-img-top"
											alt=""
										/>
										<a>
											<div className="mask rgba-white-slight"></div>
										</a>
									</div>
									{/* <!--Card image--> */}

									{/* <!--Card content--> */}
									<div className="card-body text-center">
										{/* <!--Category & Title--> */}
										<a href="" className="grey-text">
											<h5>Sport wear</h5>
										</a>
										<h5>
											<strong>
												<a href="" className="dark-grey-text">
													Grey blouse
													<span className="badge badge-pill primary-color">
														bestseller
													</span>
												</a>
											</strong>
										</h5>

										<h4 className="font-weight-bold blue-text">
											<strong>99$</strong>
										</h4>
									</div>
									{/* <!--Card content--> */}
								</div>
								{/* <!--Card--> */}
							</div>
							{/* <!--Grid column--> */}

							{/* <!--Fourth column--> */}
							<div className="col-lg-3 col-md-6 mb-4">
								{/* <!--Card--> */}
								<div className="card">
									{/* <!--Card image--> */}
									<div className="view overlay">
										<img
											src="https://m.media-amazon.com/images/I/51zGE7W2l3L.jpg"
											className="card-img-top"
											alt=""
										/>
										<a>
											<div className="mask rgba-white-slight"></div>
										</a>
									</div>
									{/* <!--Card image--> */}

									{/* <!--Card content--> */}
									<div className="card-body text-center">
										{/* <!--Category & Title--> */}
										<a href="" className="grey-text">
											<h5>Outwear</h5>
										</a>
										<h5>
											<strong>
												<a href="" className="dark-grey-text">
													Black jacket
												</a>
											</strong>
										</h5>

										<h4 className="font-weight-bold blue-text">
											<strong>219$</strong>
										</h4>
									</div>
									{/* <!--Card content--> */}
								</div>
								{/* <!--Card--> */}
							</div>
							{/* <!--Fourth column--> */}
						</div>
						{/* <!--Grid row--> */}

						{/* <!--Grid row--> */}
						<div className="row wow fadeIn">
							{/* <!--Grid column--> */}
							<div className="col-lg-3 col-md-6 mb-4">
								{/* <!--Card--> */}
								<div className="card">
									{/* <!--Card image--> */}
									<div className="view overlay">
										<img
											src="https://m.media-amazon.com/images/I/51zGE7W2l3L.jpg"
											className="card-img-top"
											alt=""
										/>
										<a>
											<div className="mask rgba-white-slight"></div>
										</a>
									</div>
									{/* <!--Card image--> */}

									{/* <!--Card content--> */}
									<div className="card-body text-center">
										{/* <!--Category & Title--> */}
										<a href="" className="grey-text">
											<h5>Shirt</h5>
										</a>
										<h5>
											<strong>
												<a href="" className="dark-grey-text">
													Denim shirt
													<span className="badge badge-pill danger-color">
														NEW
													</span>
												</a>
											</strong>
										</h5>

										<h4 className="font-weight-bold blue-text">
											<strong>120$</strong>
										</h4>
									</div>
									{/* <!--Card content--> */}
								</div>
								{/* <!--Card--> */}
							</div>
							{/* <!--Grid column--> */}

							{/* <!--Grid column--> */}
							<div className="col-lg-3 col-md-6 mb-4">
								{/* <!--Card--> */}
								<div className="card">
									{/* <!--Card image--> */}
									<div className="view overlay">
										<img
											src="https://m.media-amazon.com/images/I/51zGE7W2l3L.jpg"
											className="card-img-top"
											alt=""
										/>
										<a>
											<div className="mask rgba-white-slight"></div>
										</a>
									</div>
									{/* <!--Card image--> */}

									{/* <!--Card content--> */}
									<div className="card-body text-center">
										{/* <!--Category & Title--> */}
										<a href="" className="grey-text">
											<h5>Sport wear</h5>
										</a>
										<h5>
											<strong>
												<a href="" className="dark-grey-text">
													Sweatshirt
												</a>
											</strong>
										</h5>

										<h4 className="font-weight-bold blue-text">
											<strong>139$</strong>
										</h4>
									</div>
									{/* <!--Card content--> */}
								</div>
								{/* <!--Card--> */}
							</div>
							{/* <!--Grid column--> */}

							{/* <!--Grid column--> */}
							<div className="col-lg-3 col-md-6 mb-4">
								{/* <!--Card--> */}
								<div className="card">
									{/* <!--Card image--> */}
									<div className="view overlay">
										<img
											src="https://m.media-amazon.com/images/I/51zGE7W2l3L.jpg"
											className="card-img-top"
											alt=""
										/>
										<a>
											<div className="mask rgba-white-slight"></div>
										</a>
									</div>
									{/* <!--Card image--> */}

									{/* <!--Card content--> */}
									<div className="card-body text-center">
										{/* <!--Category & Title--> */}
										<a href="" className="grey-text">
											<h5>Sport wear</h5>
										</a>
										<h5>
											<strong>
												<a href="" className="dark-grey-text">
													Grey blouse
													<span className="badge badge-pill primary-color">
														bestseller
													</span>
												</a>
											</strong>
										</h5>

										<h4 className="font-weight-bold blue-text">
											<strong>99$</strong>
										</h4>
									</div>
									{/* <!--Card content--> */}
								</div>
								{/* <!--Card--> */}
							</div>
							{/* <!--Grid column--> */}

							{/* <!--Fourth column--> */}
							<div className="col-lg-3 col-md-6 mb-4">
								{/* <!--Card--> */}
								<div className="card">
									{/* <!--Card image--> */}
									<div className="view overlay">
										<img
											src="https://m.media-amazon.com/images/I/51zGE7W2l3L.jpg"
											className="card-img-top"
											alt=""
										/>
										<a>
											<div className="mask rgba-white-slight"></div>
										</a>
									</div>
									{/* <!--Card image--> */}

									{/* <!--Card content--> */}
									<div className="card-body text-center">
										{/* <!--Category & Title--> */}
										<a href="" className="grey-text">
											<h5>Outwear</h5>
										</a>
										<h5>
											<strong>
												<a href="" className="dark-grey-text">
													Black jacket
												</a>
											</strong>
										</h5>

										<h4 className="font-weight-bold blue-text">
											<strong>219$</strong>
										</h4>
									</div>
									{/* <!--Card content--> */}
								</div>
								{/* <!--Card--> */}
							</div>
							{/* <!--Fourth column--> */}
						</div>
						{/* <!--Grid row--> */}
					</section>
					{/* <!--Section: Products v.3--> */}

					{/* <!--Pagination--> */}
					<nav className="d-flex justify-content-center wow fadeIn">
						<ul className="pagination pg-blue">
							{/* <!--Arrow left--> */}
							<li className="page-item disabled">
								<a className="page-link" href="#" aria-label="Previous">
									<span aria-hidden="true">&laquo;</span>
									<span className="sr-only">Previous</span>
								</a>
							</li>

							<li className="page-item active">
								<a className="page-link" href="#">
									1<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									2
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									3
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									4
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									5
								</a>
							</li>

							<li className="page-item">
								<a className="page-link" href="#" aria-label="Next">
									<span aria-hidden="true">&raquo;</span>
									<span className="sr-only">Next</span>
								</a>
							</li>
						</ul>
					</nav>
					{/* <!--Pagination--> */}
				</div>
			</main>
			{/* <!--Main layout--> */}
		</div>
	);
};

export default Main;
