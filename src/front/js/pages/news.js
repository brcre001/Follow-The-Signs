import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { NewsCarousel } from "../component/NewsCarousel";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

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
		<>
			<div className="jumbotron jumbotron-fluid">
				<div className="container page-animation">
					<h1 className="display-4 text-center">News Board</h1>
					<p className="lead text-center text-color">
						Keep up to date with the latest news <br /> Information dealing with and for the deaf community
					</p>
					<Form className="d-flex">
						<FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
						<Button className="search-bar">Search</Button>
					</Form>
				</div>
			</div>
			<div className="px-5 pt-3">
				<h1>Recent News</h1>
				<div className="text-center py-2">
					<NewsCarousel />
				</div>
				{Cards}
			</div>
		</>
	);
};
