import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";
import "../../styles/login.scss";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState(null);
	const [password, setPassword] = useState("");
	const { actions, store } = useContext(Context);
	const history = useHistory();

	// RETRIEVES LOGIN INFORMATION FROM THE BACKEND
	const retrieveLogin = async () => {
		try {
			if (email == "" || password == "") throw Error("Missing Username or Password");
			const token = await actions.login(email, password);
			if (token) history.push("/");
		} catch (tokenError) {
			setError("Invalid Credentials");
		}
	};

	const enterKeyPress = event => {
		if (event.key == "Enter") {
			retrieveLogin();
		}
	};

	return (
		<>
			<div className="container text-center w-50 mx-auto login">
				<div className="login-style">
					<div className="mb-4">
						<i className="fas fa-sign-language fa-7x m-2" />
					</div>
					<h2 className="mb-5 login-text">Follow The Signs</h2>

					{/* LOGIN ALERT */}
					{error && <Alert variant="danger">{error}</Alert>}

					{/* EMAIL ADDRESS INPUT FIELD */}
					<h6 className="text-left login-text">Email address</h6>
					<InputGroup className="mb-3">
						<FormControl
							placeholder="Email address"
							aria-label="Email address"
							aria-describedby="basic-addon2"
							onChange={e => setEmail(e.target.value)}
							onKeyPress={e => enterKeyPress(e)}
							value={email}
							required
						/>
					</InputGroup>

					{/* PASSWORD INPUT FIELD */}
					<h6 className="text-left login-text">Password</h6>
					<InputGroup className="mb-3">
						<FormControl
							placeholder="Password"
							aria-label="Password"
							aria-describedby="basic-addon2"
							type="Password"
							onChange={e => setPassword(e.target.value)}
							onKeyPress={e => enterKeyPress(e)}
							value={password}
							required
						/>
					</InputGroup>

					{/* FORGOT PASSWORD LINK */}
					<div className="d-flex justify-content-around mb-1 login-subtext">
						<Link to="/">
							<p className="m-0 text-dark">Forgot Password?</p>
						</Link>
					</div>

					{/* LOGIN BUTTON */}
					<Button
						className="px-5 rounded-pill button-color"
						onClick={async e => {
							e.preventDefault();
							setError(null);
							retrieveLogin();
						}}>
						Login
					</Button>

					{/* SIGN UP LINK */}
					<div className="mt-3">
						<p className="m-0 login-subtext">Don&apos;t have an account?</p>
						<Link to="/signup">
							<Button variant="primary" className="px-5 rounded-pill button-color">
								Sign Up
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
