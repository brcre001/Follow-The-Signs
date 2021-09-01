import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const News = () => {
	return [1, 2, 3, 4, 5, 6].map(() => (
		<>
			<div className="row justify-content-center p-1">
				<Card className="col-6">
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>News Article</Card.Title>
						<Card.Text>This is an important news event that should be of interest to you.</Card.Text>

						<Button variant="primary">Learn More</Button>
					</Card.Body>
				</Card>
			</div>
		</>
	));
};
