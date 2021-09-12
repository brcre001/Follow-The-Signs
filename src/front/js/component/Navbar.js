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
		<Navbar sticky="top" expand="lg" variant="dark" className="navbar-style px-5">
			<Navbar.Brand>
				<Link to="/" className="text-white">
					<i className="fas fa-sign-language" /> Follow The Signs
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			{navigation && (
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Link to="/news" className="my-auto navbar-text px-3">
							News
						</Link>
						<Link to="/events" className="my-auto navbar-text px-3">
							Events
						</Link>
						<Link to="/discussions" className="my-auto navbar-text px-3">
							Discussions
						</Link>
						<Link to="/connections" className="my-auto navbar-text px-3">
							Connections
						</Link>
						<Link to="/login" className="px-3 py-0">
							<Button className="rounded-pill px-4">Login</Button>
						</Link>
					</Nav>
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
