import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const HomeEventCards = () => {
	return [1, 2, 3, 4, 5, 6].map(index => (
		<>
			<Card className="col-12 col-md-4" style={{ width: "18rem" }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Deaf Meetup</Card.Title>
					<Card.Text>
						We will be meeting up together to meet other people and practice our languages.
					</Card.Text>
					<Button variant="primary">Learn More</Button>
				</Card.Body>
			</Card>
		</>
	));
};
