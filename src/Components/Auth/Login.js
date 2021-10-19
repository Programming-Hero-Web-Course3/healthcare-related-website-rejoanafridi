import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import useFirebase from "../../hooks/firebase";

const Login = () => {
	const { signInWithGoogleAuth, user} = useFirebase();

	return (
		<div className="login-container">
			<h1>
				<span>Login</span> Here
			</h1>
			<div className="login-form">
				<div>
					<form action="">
						<input type="email" name="email" placeholder="Enter your email" />

						<input
							type="password"
							name="password"
							placeholder="Enter your Password"
						/>

						<input
							className="btn btn-sm btn-danger text-white"
							type="submit"
							value="submit"
						/>
						<div>
							<button
								type="button"
								onClick={signInWithGoogleAuth}
								className="btn btn-sm btn-danger text-white"
							>
								<i class="fab fa-google"> google </i>
							</button>
						
							<button
								type="button"
								className="btn btn-sm btn-danger text-white"
							>
								<i class="fab fa-github"></i> github{" "}
							</button>
						</div>
						<p>
							don't have an account <Link to="/register">register here</Link>{" "}
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

export default Login;
