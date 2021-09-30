import React from "react";
import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
			<div className="jumbotron">
				<h1 className="display-4">{discussion && discussion.title}</h1>
				<hr className="my-4" />
				<p>{discussion && discussion.description}</p>
				<Link to="/discussions">
					<span className="btn btn-primary" role="button">
						Back To Discussion Board
					</span>
				</Link>
			</div>

			{/* LIST OF COMMENTS WITH DELETE BUTTON */}
			<div>
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
										className="pl-2"
										onClick={() => {
											actions.deleteDiscussionComments(item.id);
											actions.getDiscussions();
										}}>
										delete
									</button>
								)}
							</p>
						);
					})}
			</div>

			{/* MAKE A COMMENT */}
			<div>
				<Form>
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
