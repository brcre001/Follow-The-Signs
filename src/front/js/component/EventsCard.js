import React from "react";
import { CardGroup, Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

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

export const EventsCard = () => {
	return (
		<CardGroup className="col-12 col-lg-6 p-2">
			<Card style={styles.card}>
				<Row>
					<Col className="align-center">
						<Card.Img
							src="https://i.picsum.photos/id/1006/3000/2000.jpg?hmac=x83pQQ7LW1UTo8HxBcIWuRIVeN_uCg0cG6keXvNvM8g"
							style={styles.cardImage}
						/>
					</Col>
					<Col>
						<Card.Body>
							<Card.Title>Event</Card.Title>
							<Card.Text style={styles.cardText}>An event for the community to get together</Card.Text>
							<Button>Learn More</Button>
						</Card.Body>
					</Col>
				</Row>
			</Card>
		</CardGroup>
	);
};
