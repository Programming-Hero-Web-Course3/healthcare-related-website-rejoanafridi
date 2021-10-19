import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
	return (
		<div>
			<nav className="container">
				<div className="logo">
					<Link to="/">
					 	Doc-<span>Care <i class="fas fa-user-md"></i></span>{" "}
					</Link>
				</div>
				<div className="nav-items">
					<div className="item">
						<Link className="active" to="/home">Home</Link>
						<Link to="/services">Services</Link>
						<Link to="/about">About</Link>
						<Link to="/features">Features</Link>
						<Link to="/booking">Booking</Link>
					</div>
					<div className="login">
						<Link to="/login"> <i class="fas fa-sign-in-alt"> Login </i> </Link>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
