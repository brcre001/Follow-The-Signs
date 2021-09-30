import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "../../styles/aboutus.scss";

export const About = () => {
	return (
		<>
			<div className="about-use-banner">
				<div className="about-text">
					<h1 className="display-4">Hello, world!</h1>

					<p className="lead">
						This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
						featured content or information.
					</p>
					<hr className="my-4" />
					<p>
						It uses utility classes for typography and spacing to space content out within the larger
						container.
					</p>
					<p className="lead">
						<a className="btn btn-primary btn-lg" href="#" role="button">
							Learn more
						</a>
					</p>
				</div>
			</div>

			<div className="d-flex about-us">
				<div className="m-auto">
					<div className="">
						<h1 className="display-4">Fluid jumbotron</h1>
						<p className="lead">
							This is a modified jumbotron that occupies the entire horizontal space of its parent.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
