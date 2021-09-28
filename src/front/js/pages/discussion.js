import React from "react";
import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Discussion = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {}, [store.discussions]);

	return (
		<>
			<div className="jumbotron">
				<h1 className="display-4">
					{store.discussions[params.theid] && store.discussions[params.theid].title}
				</h1>
				<hr className="my-4" />
				<p>{store.discussions[params.theid] && store.discussions[params.theid].description}</p>
				<Link to="/discussions">
					<span className="btn btn-primary" role="button">
						Back To Discussion Board
					</span>
				</Link>
			</div>

			<div className="">
				{store.discussions[params.theid] &&
					store.discussions[params.theid].discussion_comments.map((item, index) => {
						const username = store.users.filter(user => user.id === item.user_id);
						console.log(username, "THIS IS THE USERNAME FILTER");
						return (
							<p key={index}>
								{username[0] && username[0].username}:{item.body}
								<button
									onClick={() => {
										actions.deleteDiscussionComments(item.id);
										actions.getDiscussions();
										console.log(actions.getDiscussions, "This is the getDiscssion");
									}}>
									delete
								</button>
							</p>
						);
					})}
			</div>
		</>
	);
};

Discussion.propTypes = {
	match: PropTypes.object
};
