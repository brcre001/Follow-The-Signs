import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

export const MainNavbar = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg" className="px-5">
			<Navbar.Brand>
				<Link to="/" className="text-white">
					<i className="fas fa-sign-language" /> Follow The Signs
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Link to="/news" className="my-auto text-white px-3">
						News
					</Link>
					<Link to="/events" className="my-auto text-white px-3">
						Events
					</Link>
					<Link to="discussions" className="my-auto text-white px-3">
						Discussion
					</Link>
					<Link to="/login" className="px-3 py-0">
						<Button className="rounded-pill px-4">Login</Button>
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
