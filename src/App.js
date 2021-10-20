import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Service from "./Components/Service/Service";
import About from "./Components/Shared/About/About";
import Book from "./Components/Booking/Book";
import Login from "./Components/Auth/Login";
import Feature from "./Components/Home/Feature";
import Home from "./Components/Home/Home";
import Register from "./Components/Auth/Register";
import Header from "./Components/Shared/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";
import Servicedetails from "./Components/Service/Servicedetails";

const App = () => {
	const [services, setServices] = useState([])
	useEffect(() => {
		fetch('service.json')
		  .then(res => res.json())
		  .then(data => setServices(data))
	   }, [])
	return (
		<div>
			<Router>
				<Header></Header>

				<Switch>
					<Route path="/home">
						<Home></Home>
					</Route>
					<Route exact path="/">
						<Home></Home>
					</Route>

					<Route path="/services">
						<Service services={services}></Service>
					</Route>
					<Route path="/about">
						<About></About>
					</Route>
					<Route path="/doctors">
						<Feature></Feature>
					</Route>
					<Route path="/booking">
						<Book></Book>
					</Route>
					<Route path="/login">
						<Login></Login>
					</Route>
					<Route path="/register">
						<Register></Register>
					</Route>
					<Route path="/service-details">
						<Servicedetails></Servicedetails>
					</Route>

				</Switch>
			</Router>
			<Footer></Footer>
		</div>
	);
};

export default App;
