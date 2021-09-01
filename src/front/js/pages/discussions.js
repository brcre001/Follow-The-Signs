import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Discussions = () => {
	return [1, 2, 3, 4, 5, 6].map(() => (
		<>
			<div className="row justify-content-center p-1">
				<Card className="col-6">
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title> Interesting Discussion!</Card.Title>
						<Card.Text>This will be an discussion that you may be interested in.</Card.Text>
						<Button variant="primary">Learn More</Button>
					</Card.Body>
				</Card>
			</div>
		</>
	));
};
