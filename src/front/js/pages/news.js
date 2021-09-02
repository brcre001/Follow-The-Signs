import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { NewsCarousel } from "../component/NewsCarousel";

const array = [1, 2, 3, 4, 5, 6];

const Cards = array.map(() => (
	<>
		<div className="row justify-content-center p-2">
			<Card className="col-12">
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

export const News = () => {
	return (
		<div className="px-5 pt-3">
			<h1>Recent News</h1>
			<div className="text-center py-2">
				<NewsCarousel />
			</div>
			{Cards}
		</div>
	);
};
