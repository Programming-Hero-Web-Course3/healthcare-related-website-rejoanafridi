import React from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

import "./Service.css";
const Service = () => {
	return (
		<div>
               <Header></Header>
			<section className="service-container">
				<h1 className="service-title">Our <span>Service</span> </h1>
				<div className="items">
					<div className="item">
						<div>
							<i class="fas fa-user-check fa-5x"></i>
							<h3>Free Checkup</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
								quasi.
							</p>
							<div className="btn btn-small btn-danger text-white">
								Checkup now <i class="fas fa-arrow-right"></i>
							</div>
						</div>
					</div>
					<div className="item">
						<div>
							<i class="fas fa-capsules fa-5x"></i>
							<h3>Free Medicine</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
								quasi.
							</p>
							<div className="btn btn-small btn-danger text-white">
								Checkup now <i class="fas fa-arrow-right"></i>
							</div>
						</div>
					</div>
					<div className="item">
						<div>
							<i class="fas fa-ambulance fa-5x"></i>
							<h3>24/7 Ambulance</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
								quasi.
							</p>
							<div className="btn btn-small btn-danger text-white">
								Checkup now <i class="fas fa-arrow-right"></i>
							</div>
						</div>
					</div>
					<div className="item">
						<div>
							<i class="fas fa-utensils fa-5x"></i>
							<h3>Healthy Food</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
								quasi.
							</p>
							<div className="btn btn-small btn-danger text-white">
								Checkup now <i class="fas fa-arrow-right"></i>
							</div>
						</div>
					</div>
					<div className="item">
						<div>
							<i class="fas fa-user-md fa-5x"></i>
							<h3>Experianced Doctor</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
								quasi.
							</p>
							<div className="btn btn-small btn-danger text-white">
								Checkup now <i class="fas fa-arrow-right"></i>
							</div>
						</div>
					</div>
					<div className="item">
						<div>
							<i class="fas fa-bed fa-5x"></i>
							<h3>Bed Facility</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
								quasi.
							</p>
							<div className="btn btn-small btn-danger text-white">
								Checkup now <i class="fas fa-arrow-right"></i>
							</div>
						</div>
					</div>
				</div>
			</section>

		<Footer></Footer>
		</div>
	);
};

export default Service;
