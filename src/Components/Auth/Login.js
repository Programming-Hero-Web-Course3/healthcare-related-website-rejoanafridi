import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
	return (
		<div className="login-container">
			<h1>
				<span>Login</span> Here
			</h1>
			<div className="login-form">
				<div>
					<form action="">
						<p>
							Email:{" "}
							<input type="email" name="email" placeholder="Enter your email" />
						</p>
						<p>
							Password:{" "}
							<input
								type="password"
								name="password"
								placeholder="Enter your Password"
							/>
						</p>
						<input type="submit" value="submit" />
						<p>
							don't have an account <Link to="/register">register here</Link>{" "}
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
