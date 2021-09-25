import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

export const NewsCard = props => {
	return (
		<Card className="col-12">
			<Card.Img variant="top" src={props.imageURL} />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.description}</Card.Text>

				<Button variant="primary" href={props.pageURL}>
					Learn More
				</Button>
			</Card.Body>
		</Card>
	);
};

NewsCard.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	imageURL: PropTypes.string,
	pageURL: PropTypes.string
};
