import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";
import "../../styles/login.scss";

export const Login = () => {
	const [username, setUsername] = useState("");
	const [error, setError] = useState(null);
	const [password, setPassword] = useState("");
	const { actions, store } = useContext(Context);
	const history = useHistory();

	return (
		<>
			<div className="text-center my-5 w-50 mx-auto my-auto">
				<h1>Follow The Signs</h1>
				{error && <div className="alert alert-danger">{error}</div>}
				<h6 className="text-left">Email address</h6>
				<InputGroup className="mb-3">
					<FormControl
						placeholder="Email address"
						aria-label="Email address"
						aria-describedby="basic-addon2"
						onChange={e => setUsername(e.target.value)}
						value={username}
						// required={true}
					/>
				</InputGroup>

				<h6 className="text-left">Password</h6>
				<InputGroup className="mb-3">
					<FormControl
						placeholder="Password"
						aria-label="Password"
						aria-describedby="basic-addon2"
						onChange={e => setPassword(e.target.value)}
						value={password}
						// required={true}
					/>
				</InputGroup>

				<div className="d-flex justify-content-around">
					<p>Forgot Password?</p>
				</div>

				<Button
					variant="primary"
					className="px-5 rounded-pill"
					onClick={async e => {
						e.preventDefault();
						setError(null);
						try {
							if (username == "" || password == "") throw Error("Missing Username or Password");
							const token = await actions.login(username, password);
							if (token) history.push("/");
						} catch (tokenError) {
							setError(tokenError.message);
						}
					}}>
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
