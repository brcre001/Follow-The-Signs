import React from "react";
import { Link } from "react-router-dom";
import PropTypes, { bool } from "prop-types";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "../../styles/navbar.scss";

export const MainNavbar = props => {
	const { navigation } = props;
	return (
		// variant="dark" bg="dark"  PERVOIUS COLOR FOR NAVBAR & TABS
		// added variant="dark" again to have the collapsed sidebar in white
		<Navbar sticky="top" expand="lg" variant="dark" className="navbar-style">
			<Navbar.Brand className="pl-4">
				<Link to="/" className="text-white">
					<i className="fas fa-sign-language fa-2x" />
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			{navigation && (
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mx-auto pr-5">
						<Link to="/news" className="my-auto navbar-text mx-5">
							News
						</Link>
						<Link to="/events" className="my-auto navbar-text mx-5">
							Events
						</Link>
						<Link to="/discussions" className="my-auto navbar-text mx-5">
							Discussions
						</Link>
						<Link to="/connections" className="my-auto navbar-text mx-5">
							Connections
						</Link>
					</Nav>
					<Link to="/login" className="justify-content-end">
						<Button className="rounded-pill col-12 px-4">Login</Button>
					</Link>
				</Navbar.Collapse>
			)}
		</Navbar>
	);
};

MainNavbar.propTypes = {
	navigation: PropTypes.bool
};

MainNavbar.defaultProps = {
	navigation: true
};
