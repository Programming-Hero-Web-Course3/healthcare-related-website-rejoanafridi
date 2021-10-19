import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Service from "./Components/Service/Service";
import About from "./Components/Shared/About/About";
import Book from "./Components/Booking/Book";
import Login from "./Components/Auth/Login";
import Feature from "./Components/Home/Feature";
import Home from "./Components/Home/Home";

const App = () => {
	return (
		<div>
			<Router>
			

				<Switch>
					<Route path="/home">
						<Home></Home>
					</Route>
					<Route exact path="/">
						<Home></Home>
					</Route>

					<Route path="/services">
						<Service></Service>
					</Route>
					<Route path="/about">
						<About></About>
					</Route>
					<Route path="/features">
						<Feature></Feature>
					</Route>
					<Route path="/booking">
						<Book></Book>
					</Route>
					<Route path="/login">
						<Login></Login>
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
