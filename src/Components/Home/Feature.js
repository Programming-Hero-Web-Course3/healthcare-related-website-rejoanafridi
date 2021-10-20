import React, { useEffect, useState } from "react";
import "./Feature.css";
import d_Img from "../../images/doctor.jpg";
import Doctor from "../Doctor/Doctor";
const Feature = () => {
	const [doctor, setDoctor] = useState([]);
	console.log(doctor);
	useEffect(() => {
		fetch("doctor.json")
			.then((res) => res.json())
			.then((data) => setDoctor(data));
	}, []);

	return (
		<div>
			<div className="d-container">
				<h1>
					Our <span> Doctors </span>{" "}
				</h1>
				<div className="doctors">
							{
								doctor.map((data) => <Doctor key={data.id} doctor={data}></Doctor>)
							}
					

					{/* <div className="doctor">
						<div>
							<img src={d_Img} alt="doctor_image" />
							<h3>Md: Abdullah</h3>
							<p>Assosiate Professor</p>
							<h5>SSMC, Sergery</h5>
							<button className="btn btn-sm btn-danger text-white ">
								Booking Now
							</button>
							<div className="icons">
								<i class="fab  fa-facebook"></i>
								<i class="fab  fa-twitter"></i>
								<i class="fab  fa-whatsapp"></i>
							</div>
						</div>
					</div>
					<div className="doctor">
						<div>
							<img src={d_Img} alt="doctor_image" />
							<h3>Md: Ahsan Habib</h3>
							<p>Professor </p>
							<h5>Nerology, DMC</h5>
							<button className="btn btn-sm btn-danger text-white ">
								Booking Now
							</button>
							<div className="icons">
								<i class="fab  fa-facebook"></i>
								<i class="fab  fa-twitter"></i>
								<i class="fab  fa-whatsapp"></i>
							</div>
						</div>
					</div>
					<div className="doctor">
						<div>
							<img src={d_Img} alt="doctor_image" />
							<h3>Md: Rashedul Islam</h3>
							<p>Assosiate Professor, Medicine, DMC </p>
							<button className="btn btn-sm btn-danger text-white ">
								Booking Now
							</button>
							<div className="icons">
								<i class="fab  fa-facebook"></i>
								<i class="fab  fa-twitter"></i>
								<i class="fab  fa-whatsapp"></i>
							</div>
						</div>
					</div>
					<div className="doctor">
						<div>
							<img src={d_Img} alt="doctor_image" />
							<h3>Md: Rashedul Islam</h3>
							<p>Assosiate Professor, Medicine, DMC </p>
							<button className="btn btn-sm btn-danger text-white ">
								Booking Now
							</button>
							<div className="icons">
								<i class="fab  fa-facebook"></i>
								<i class="fab  fa-twitter"></i>
								<i class="fab  fa-whatsapp"></i>
							</div>
						</div>
					</div>
					<div className="doctor">
						<div>
							<img src={d_Img} alt="doctor_image" />
							<h3>Md: Rashedul Islam</h3>
							<p>Assosiate Professor, Medicine, DMC </p>
							<button className="btn btn-sm btn-danger text-white ">
								Booking Now
							</button>
							<div className="icons">
								<i class="fab  fa-facebook"></i>
								<i class="fab  fa-twitter"></i>
								<i class="fab  fa-whatsapp"></i>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Feature;
