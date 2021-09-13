import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";
import "../../styles/signup.scss";

export const Signup = () => {
	return (
		<>
			<div className="container text-center w-50 mx-auto signup">
				<i className="fas fa-sign-language fa-7x mb-4" />
				<h2 className="mb-5 signup-text">Follow The Signs</h2>
				<h6 className="text-left signup-text">Email address</h6>
				<InputGroup className="mb-3">
					<FormControl
						placeholder="Email address"
						aria-label="Email address"
						aria-describedby="basic-addon2"
					/>
				</InputGroup>

				<h6 className="text-left signup-text">Confirm email address</h6>
				<InputGroup className="mb-3">
					<FormControl
						placeholder="Confirm email address"
						aria-label="Confirm email address"
						aria-describedby="basic-addon2"
					/>
				</InputGroup>

				<h6 className="text-left signup-text">Password</h6>
				<InputGroup className="mb-3">
					<FormControl placeholder="Password" aria-label="Password" aria-describedby="basic-addon2" />
				</InputGroup>

				<h6 className="text-left signup-text">Username</h6>
				<InputGroup className="mb-3">
					<FormControl placeholder="Username" aria-label="Username" aria-describedby="basic-addon2" />
				</InputGroup>

				<Button className="px-5 rounded-pill button-color">Sign Up</Button>
				<div className="mt-3">
					<p className="m-0 signup-subtext">Have an account?</p>
					<Link to="/login">
						<Button className="px-5 rounded-pill button-color">Login</Button>
					</Link>
				</div>
			</div>
		</>
	);
};
