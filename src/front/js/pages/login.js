import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";
import "../../styles/login.scss";

export const Login = () => {
	return (
		<>
			<div className="text-center my-5 w-50 mx-auto my-auto">
				<h1>Follow The Signs</h1>
				<h6 className="text-left">Email address</h6>
				<InputGroup className="mb-3">
					<FormControl
						placeholder="Email address"
						aria-label="Email address"
						aria-describedby="basic-addon2"
					/>
				</InputGroup>

				<h6 className="text-left">Password</h6>
				<InputGroup className="mb-3">
					<FormControl placeholder="Password" aria-label="Password" aria-describedby="basic-addon2" />
				</InputGroup>

				<div className="d-flex justify-content-around">
					<p>Forgot Password?</p>
				</div>

				<Button variant="primary" className="px-5 rounded-pill">
					Login
				</Button>
				<p>Dont have an account?</p>
				<Link to="/signup">
					<Button variant="primary" className="px-5 rounded-pill">
						Sign Up
					</Button>
				</Link>
			</div>
		</>
	);
};
