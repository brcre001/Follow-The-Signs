import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "../../styles/navbar.scss";

export const Footer = () => (
	<div>
		<Navbar variant="dark" className="navbar-style justify-content-end">
			<Navbar.Brand href="#home">About Us</Navbar.Brand>
		</Navbar>
	</div>
);
