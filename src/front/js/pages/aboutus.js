import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "../../styles/aboutus.scss";

export const About = () => {
	return (
		<div className="d-flex h-100 vw-100 about-us">
			<div className="m-auto">
				<div className="container">
					<h1 className="display-4">Fluid jumbotron</h1>
					<p className="lead">
						This is a modified jumbotron that occupies the entire horizontal space of its parent.
					</p>
				</div>
			</div>
		</div>
	);
};
