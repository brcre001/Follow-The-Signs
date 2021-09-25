import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../../styles/signup.scss";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [fullName, setFullName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [confirmEmail, setConfirmEmail] = useState("");
	const [password, setPassword] = useState("");
	const [alert, setAlert] = useState(false);

	const history = useHistory();

	const sendSignup = () => {
		if (fullName == "" || username == "" || email == "" || password == "") {
			setAlert(true);
		} else {
			if (confirmEmail == email) {
				setAlert(false);
				actions.createUser(fullName, username, email, password);
				history.push("/congrats");
			}
		}
	};

	const enterKeyPress = event => {
		if (event.key == "Enter") {
			sendSignup();
		}
	};

	return (
		<>
			<div className="container text-center w-50 mx-auto signup">
				<i className="fas fa-sign-language fa-7x mb-4" />
				<h2 className="mb-5 signup-text">Follow The Signs</h2>
				{alert && <Alert variant="danger">Missing Field(s)!</Alert>}
				<h6 className="text-left signup-text">Full Name</h6>
				<InputGroup className="mb-3">
					<FormControl
						onChange={event => setFullName(event.target.value)}
						onKeyPress={e => enterKeyPress(e)}
						value={fullName}
						placeholder="Full name"
						aria-label="Full name"
						aria-describedby="basic-addon2"
					/>
				</InputGroup>

				<h6 className="text-left signup-text">Username</h6>
				<InputGroup className="mb-3">
					<FormControl
						onChange={event => setUsername(event.target.value)}
						onKeyPress={e => enterKeyPress(e)}
						value={username}
						placeholder="Username"
						aria-label="Username"
						aria-describedby="basic-addon2"
					/>
				</InputGroup>

				<h6 className="text-left signup-text">Email address</h6>
				<InputGroup className="mb-3">
					<FormControl
						onChange={event => setEmail(event.target.value.toLowerCase())}
						onKeyPress={e => enterKeyPress(e)}
						value={email}
						placeholder="Email address"
						aria-label="Email address"
						aria-describedby="basic-addon2"
					/>
				</InputGroup>

				<h6 className="text-left signup-text">Confirm email address</h6>
				<InputGroup className="mb-3">
					<FormControl
						onChange={event => setConfirmEmail(event.target.value.toLowerCase())}
						onKeyPress={e => enterKeyPress(e)}
						value={confirmEmail}
						placeholder="Confirm email address"
						aria-label="Confirm email address"
						aria-describedby="basic-addon2"
					/>
				</InputGroup>

				<h6 className="text-left signup-text">Password</h6>
				<InputGroup className="mb-3">
					<FormControl
						onChange={event => setPassword(event.target.value)}
						onKeyPress={e => enterKeyPress(e)}
						value={password}
						placeholder="Password"
						aria-label="Password"
						aria-describedby="basic-addon2"
						type="password"
					/>
				</InputGroup>

				<Button onClick={() => sendSignup()} className="px-5 rounded-pill button-color">
					Sign Up
				</Button>
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
