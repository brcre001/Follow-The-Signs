import React from "react";
import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { CardGroup, Card, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import "../../styles/discussions.scss";

export const Discussion = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [comment, setComment] = useState("");

	let discussion = store.discussions.find(d => d.id == params.discussion_id);

	useEffect(() => {
		actions.getDiscussions();
	}, []);

	console.log("Refreshing discussion: ", store.discussions, "Params.discussion_id: ", params.discussion_id);
	if (discussion === undefined) return "loading discussion...";
	return (
		<>
			{/* JUMBOTRON */}

			<Card className="individual-discussion">
				<Card.Body className="mx-auto" style={{ marginTop: "5rem" }}>
					<Card.Title>{discussion && discussion.title}</Card.Title>
					<hr className="my-4" />
					<Card.Text>{discussion && discussion.description}</Card.Text>
					<Card.Link to="/discussions">
						<span className="btn btn-primary" role="button">
							Back To Discussion Board
						</span>
					</Card.Link>
				</Card.Body>
			</Card>

			{/* LIST OF COMMENTS WITH DELETE BUTTON */}
			<div className="mx-auto comments-section">
				{discussion &&
					discussion.discussion_comments.map((item, index) => {
						// const username = store.users.filter(user => user.id === item.user_id);
						// console.log(username, "THIS IS THE USERNAME FILTER");
						console.log("looping item username: ", item.username);
						console.log("Username in the store: ", store.currentUser?.username);
						return (
							<p key={index}>
								{item.username}: {item.body}
								{item.username == store.currentUser?.username && (
									<button
										className="pl-2 btn btn-danger"
										onClick={() => {
											actions.deleteDiscussionComments(item.id);
											actions.getDiscussions();
										}}>
										<i className="fas fa-trash-alt"></i>
									</button>
								)}
							</p>
						);
					})}
			</div>

			{/* MAKE A COMMENT */}
			<div>
				<Form className="mx-auto" style={{ width: "30rem" }}>
					<div className="justify-content-center">
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Control
								type="comment"
								placeholder="Write a Comment"
								onChange={event => {
									setComment(event.target.value);
								}}
							/>
						</Form.Group>
						<Button
							className="text-center p-2 mx-auto"
							variant="primary"
							type="button"
							onClick={() => {
								actions
									.createComment(params.discussion_id, comment)
									.then(() => actions.getDiscussions());
							}}>
							Send Comment
						</Button>
					</div>
				</Form>
			</div>
		</>
	);
};

Discussion.propTypes = {
	match: PropTypes.object
};
