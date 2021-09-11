import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

const cardLoop = [1, 2, 3, 4, 5, 6];

export const Events = () => {
	return (
		<>
			<div className="jumbotron jumbotron-fluid">
				<div className="container page-animation">
					<h1 className="display-4 text-center">Events Board</h1>
					<p className="lead text-center text-color">
						Events for the community to enjoy <br /> Attend an event and become a part of the community
					</p>
					<Form className="d-flex">
						<FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
						<Button className="search-bar">Search</Button>
					</Form>
				</div>
			</div>
			{cardLoop.map(index => (
				<div className="row justify-content-center p-1" key={index}>
					<Card className="col-6">
						<Card.Img
							variant="top"
							href="https://placeholder.com/"
							src="https://via.placeholder.com/80x40"
						/>
						<Card.Body>
							<Card.Title>Events Article</Card.Title>
							<Card.Text>This will be an event that you want to attend!</Card.Text>
							<Button variant="primary">Learn More</Button>
						</Card.Body>
					</Card>
				</div>
			))}
		</>
	);
};
