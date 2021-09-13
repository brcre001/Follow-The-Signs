import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "../../styles/navbar.scss";
import { Link } from "react-router-dom";

export const Footer = () => (
	<div>
		<Navbar variant="dark" className="navbar-style justify-content-end">
			<Navbar.Brand>
				<Link to="/aboutus" className="text-white">
					About Us
				</Link>
			</Navbar.Brand>
		</Navbar>
	</div>
);
