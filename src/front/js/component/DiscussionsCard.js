import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const DiscussionsCard = () => {
	return (
		<Card className="col-12">
			<Card.Body>
				<Card.Title> Interesting Discussion!</Card.Title>
				<Card.Text>This will be an discussion that you may be interested in.</Card.Text>
				<Button variant="primary">Learn More</Button>
			</Card.Body>
		</Card>
	);
};
