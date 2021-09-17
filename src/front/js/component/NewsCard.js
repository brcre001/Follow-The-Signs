import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const NewsCard = () => {
	return (
		<Card className="col-12">
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title>News Article</Card.Title>
				<Card.Text>This is an important news event that should be of interest to you.</Card.Text>

				<Button variant="primary">Learn More</Button>
			</Card.Body>
		</Card>
	);
};
