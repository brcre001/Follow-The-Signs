import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

export const MainNavbar = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg" className="px-5">
			<Navbar.Brand href="/">
				<i className="fas fa-sign-language" /> Follow The Signs
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="#home" className="px-3">
						News
					</Nav.Link>
					<Nav.Link href="#link" className="px-3">
						Events
					</Nav.Link>
					<Nav.Link href="#link" className="px-3">
						Discussion
					</Nav.Link>
					<Nav.Link href="/login" className="px-3 py-0">
						<Button className="rounded-pill px-4">Login</Button>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
