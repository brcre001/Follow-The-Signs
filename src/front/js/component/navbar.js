import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				<i className="fas fa-american-sign-language-interpreting" /> Follow The Signs
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav ml-auto">
					<a className="text-white nav-link" href="#">
						News
					</a>
					<a className="text-white nav-link" href="#">
						Resources
					</a>
					<a className="text-white nav-link" href="#">
						Total Users Online
					</a>
					<a className="text-white nav-link" href="#">
						Your Connections Online
					</a>
					<button className="btn btn-primary">Sign Up</button>
				</div>
			</div>
		</nav>
	);
};
