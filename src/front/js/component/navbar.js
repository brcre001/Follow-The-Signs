import React from "react";
import { Navbar, Nav, DropdownButton, Dropdown, Container } from "react-bootstrap";

export const MainNavbar = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="px-5">
			<Navbar.Brand href="#home">
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
					<DropdownButton align="right" title="Login" id="dropdown-menu-align-right" className="pl-3">
						<Dropdown.Item eventKey="1">Login</Dropdown.Item>
						<Dropdown.Item eventKey="2">Sign Up</Dropdown.Item>
						<Dropdown.Divider />
						<Dropdown.Item eventKey="4">Sign Out</Dropdown.Item>
					</DropdownButton>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
