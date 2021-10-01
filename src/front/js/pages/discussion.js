import React from "react";
import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { CardGroup, Card, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../styles/discussions.scss";

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
							<p key={index} className="p-1 m-0">
								{item.username}: {item.body}
								{item.username == store.currentUser?.username && (
									<button
										className="btn btn-danger ml-2"
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
			<br />

			{/* MAKE A COMMENT */}
			<div>
				<input
					className="form-control border-0 w-75 mx-auto my-2"
					type="comment"
					placeholder="Write a Comment"
					value={comment}
					onChange={event => {
						setComment(event.target.value);
					}}
					onKeyPress={event => {
						if (event.key == "Enter") {
							actions.createComment(params.discussion_id, comment).then(() => actions.getDiscussions());
							setComment("");
						}
					}}
				/>
				<button
					className="my-2 btn btn-primary mx-auto"
					variant="primary"
					type="button"
					onClick={() => {
						actions.createComment(params.discussion_id, comment).then(() => actions.getDiscussions());
						setComment("");
					}}>
					Send Comment
				</button>
			</div>
		</>
	);
};

Discussion.propTypes = {
	match: PropTypes.object
};
