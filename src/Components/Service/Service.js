import React from "react";
import { Link, useParams } from "react-router-dom";

import "./Service.css";
import Services from "./Services";
const Service = (service) => {
	// const { id, name,  description, img, short } = service;
	// console.log(name);

	// console.log(service)
	// const { name} = service;
	// console.log(name)
	console.log(service.data);
	const service_data = service.data;

	return (
		<div>
			<section className="service-container">
				<h1 className="service-title">
					Our <span>Service</span>{" "}
				</h1>
				<div className="items">
					{/* {service_data.map((s) => (
						<Services key={s.id} serv={s}></Services>
					))} */}

					
				</div>
			</section>
		</div>
	);
};

export default Service;
