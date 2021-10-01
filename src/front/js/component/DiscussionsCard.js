import React from "react";
import { CardGroup, Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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

export const DiscussionsCard = props => {
	return (
		<CardGroup className="col-12 col-lg-6 p-2">
			<Card style={styles.card}>
				<Card.Body>
					<Card.Title>{props.disObject.title}</Card.Title>
					<Card.Text>{props.disObject.description}</Card.Text>
					<Link to={"/discussion/" + props.disObject.id}>
						<Button variant="primary">Join Discussion</Button>
					</Link>
				</Card.Body>
			</Card>
		</CardGroup>
	);
};

{
	/* disObject is an object from the store. */
}
DiscussionsCard.propTypes = {
	disObject: PropTypes.object,
	index: PropTypes.number
};
