import React from "react";
import { CardGroup, Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const styles = {
	card: {
		backgroundColor: "#ffffff",
		padding: "1rem"
	},
	cardImage: {
		objectFit: "cover",
		margin: 0
	}
};

export const EventsCard = props => {
	return (
		<CardGroup className="col-12 col-lg-6 p-2">
			<Card style={styles.card}>
				<Row>
					<Col className="align-center">
						<Card.Img src={props.imageURL} style={styles.cardImage} />
					</Col>
					<Col>
						<Card.Body>
							<Card.Title>{props.title}</Card.Title>
							<Card.Text style={styles.cardText}>{props.description}</Card.Text>
							<Button href={props.pageURL}>Learn More</Button>
						</Card.Body>
					</Col>
				</Row>
			</Card>
		</CardGroup>
	);
};

EventsCard.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	imageURL: PropTypes.string,
	pageURL: PropTypes.string
};
