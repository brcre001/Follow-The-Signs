import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Events = () => {
	return [1, 2, 3, 4, 5, 6].map(() => (
		<>
			<div className="row justify-content-center p-1">
				<Card className="col-6">
					<Card.Img variant="top" href="https://placeholder.com/" src="https://via.placeholder.com/80x40" />
					<Card.Body>
						<Card.Title>Events Article</Card.Title>
						<Card.Text>This will be an event that you want to attend!</Card.Text>
						<Button variant="primary">Learn More</Button>
					</Card.Body>
				</Card>
			</div>
		</>
	));
};
