import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

export const Discussions = () => {
	const cardLoop = [1, 2, 3, 4, 5, 6];
	return (
		<>
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="display-4 text-center">Discussions Board</h1>
					<p className="lead text-center">
						Create, Read, Or Comment <br />A Place to read discussions and chat with people.
					</p>
					<Form className="d-flex">
						<FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
						<Button variant="outline-success">Search</Button>
					</Form>
				</div>
			</div>
			<div className="ml-auto pr-5">
				<Button>
					Create <i className="fas fa-plus"></i>
				</Button>
			</div>
			{cardLoop.map(index => (
				<div className="row justify-content-center p-1" key={index}>
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
			))}
		</>
	);
};

// return [1, 2, 3, 4, 5, 6].map(() => (
// 	<>
// 		<div className="row justify-content-center p-1">
// 			<Card className="col-6 mt-5">
// 				<Card.Img
// 					rounded
// 					className="p-3"
// 					variant="top"
// 					href="https://placeholder.com/"
// 					src="https://via.placeholder.com/80x40"
// 				/>
// 				{/* OLD PLACEHOLDER TAG CODE
// 				src="https://via.placeholder.com/100x180" */}
// 				<Card.Body>
// 					<Card.Title> Interesting Discussion!</Card.Title>
// 					<Card.Text>This will be an discussion that you may be interested in.</Card.Text>
// 					<Button variant="primary">Learn More</Button>
// 				</Card.Body>
// 			</Card>
// 		</div>
// 	</>
// ));
