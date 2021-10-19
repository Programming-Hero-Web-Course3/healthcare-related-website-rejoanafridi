import React from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import bannerImg from "../../images/banner-doctor.png";
import "./Home.css";
import Service from "../Service/Service";
import Doctor from "../Home/Feature";
import About from "../Shared/About/About";
const Home = () => {
	return (
		<div>
			<Header></Header>
			
			<section className="banner">
				<div className="b_image">
					<img src={bannerImg} alt="" />
				</div>
				<div className="banner-contents">
					<div className="content">
						<h2>Stay <span>Home</span>, Stay Safe</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
							cumque eius. Quibusdam sapiente eum soluta!
						</p>
						<button type="button" className='b-btn'>See More</button>
					</div>
				</div>
			</section>

               {/* Service */}
               <Service></Service>

               {/* Doctors */}
               <Doctor> </Doctor>
               {/* About us */}
               <About></About>

			<Footer></Footer>
		</div>
	);
};

export default Home;
