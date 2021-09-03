import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Discussions = () => {
	return [1, 2, 3, 4, 5, 6].map(() => (
		<>
			<div className="row justify-content-center p-1">
				<Card className="col-6 mt-5">
					<Card.Img
						rounded
						className="p-3"
						variant="top"
						href="https://placeholder.com/"
						src="https://via.placeholder.com/80x40"
					/>
					{/* OLD PLACEHOLDER TAG CODE
					src="https://via.placeholder.com/100x180" */}
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
