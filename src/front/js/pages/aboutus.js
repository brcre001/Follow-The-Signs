import React from "react";
import { CardGroup, Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "../../styles/aboutus.scss";

const styles = {
	card: {
		backgroundColor: "#ffffff",
		padding: "1rem",
		margin: "10px"
	},
	cardImage: {
		objectFit: "cover",
		margin: 0
	}
};

export const About = () => {
	return (
		<>
			<div className="about-use-banner">
				<div className="about-text">
					<h1 className="display-4">Hello, world!</h1>

					<p className="lead">
						This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
						featured content or information.
					</p>
					<hr className="my-4" />
					<p>
						It uses utility classes for typography and spacing to space content out within the larger
						container.
					</p>
					<p className="lead">
						<a className="btn btn-primary btn-lg" href="#" role="button">
							Learn more
						</a>
					</p>
				</div>
			</div>

			<CardGroup className="col-12 col-lg-6 p-2 mx-auto">
				<Card style={styles.card}>
					<Row>
						{/* <Col className="align-center">
							<Card.Img src="holder.js/100px180" style={styles.cardImage} />
						</Col> */}
						<Col>
							<Card.Body>
								<Card.Title>Allen</Card.Title>
								<Card.Text style={styles.cardText}>
									Some quick example text to build on the card title and make up the bulk of the
									card&apos;s content.
								</Card.Text>
								<Button variant="primary" href="https://github.com/allenstfort23">
									Allen&apos;s GitHub
								</Button>
							</Card.Body>
						</Col>
					</Row>
				</Card>
				<Card style={styles.card}>
					<Row>
						{/* <Col className="align-center">
							<Card.Img src="holder.js/100px180" style={styles.cardImage} />
						</Col> */}
						<Col>
							<Card.Body>
								<Card.Title>Brandon</Card.Title>
								<Card.Text style={styles.cardText}>
									Some quick example text to build on the card title and make up the bulk of the
									card&apos;s content.
								</Card.Text>
								<Button variant="primary" href="https://github.com/brcre001">
									Brandon&apos;s GitHub
								</Button>
							</Card.Body>
						</Col>
					</Row>
				</Card>
				<Card style={styles.card}>
					<Row>
						{/* <Col className="align-center">
							<Card.Img src="holder.js/100px180" style={styles.cardImage} />
						</Col> */}
						<Col>
							<Card.Body>
								<Card.Title>William</Card.Title>
								<Card.Text style={styles.cardText}>
									Some quick example text to build on the card title and make up the bulk of the
									card&apos;s content.
								</Card.Text>
								<Button variant="primary" href="https://github.com/YodaFace">
									William&apos;s GitHub
								</Button>
							</Card.Body>
						</Col>
					</Row>
				</Card>
			</CardGroup>
		</>
	);
};
