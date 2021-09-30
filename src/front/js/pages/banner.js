import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "../../styles/banner.scss";

export const Banner = () => {
	return (
		<>
			<div className="">
				<div className="banner rounded">
					<div className="banner-text">
						<h1 className="display-4 font-weight-bold">Information From Trusted Sites</h1>
						<p className="lead">Information from trusted sites to keep yourself updated.</p>
					</div>
				</div>
			</div>
		</>
	);
};
