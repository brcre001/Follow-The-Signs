import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const HomeEventCards = () => {
	return [1, 2, 3, 4, 5, 6].map(index => (
		<>
			<div className="col-12 col-md-4">
				<Card className="mr-1 mt-2">
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>Deaf Meetup</Card.Title>
						<Card.Text>
							We will be meeting up together to meet other people and practice our languages.
						</Card.Text>
						<Button variant="primary">Learn More</Button>
					</Card.Body>
				</Card>
			</div>
		</>
	));
};
