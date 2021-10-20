import React from "react";
import './Servicedetails.css'
import s_Img from "../../images/doctor.jpg"
const Servicedetails = () => {
	return (
		<div>
			<div className="s-container">
				<div className="service-details">
					<div className="service-detail">
						<div>
							<img src={s_Img} alt="" />
							<h3>Doctor</h3>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
							<h5>Description</h5>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Dolorum ipsa dicta iusto reiciendis magni hic voluptates eum
								quos laborum aliquam.
							</p>
							<button className="btn btn-sm btn-danger text-white ">
								Appointment
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Servicedetails;
