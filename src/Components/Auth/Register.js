import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
	return (
		<div className="register-container">
			<h1>
				<span>Register </span> Here
			</h1>
			<div className="register-form">
				<div>
					<form action="">
						<input type="email" name="email" placeholder="Enter your email" />

						<input
							type="password"
							name="password"
							placeholder="Enter your Password"
						/>
						<input
							type="password"
							name="password"
							placeholder="Enter  Password again"
						/>

						<input
							className="btn btn-sm btn-danger text-white"
							type="submit"
							value="Login" 
						/>
						<div>
							<button className="btn btn-sm btn-danger text-white">
								<i class="fab fa-google"></i> google{" "}
							</button>
							<button className="btn btn-sm btn-danger text-white">
								<i class="fab fa-github"></i> github{" "}
							</button>
						</div>

						<p>
							already registered <Link to="/login">Login here</Link>{" "}
						</p>
						<p>
							Back to <Link to="/">Home</Link>{" "}
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
