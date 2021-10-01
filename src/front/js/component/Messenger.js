// import react and hooks to access state and lifecycle methods
import React, { useState, useEffect, useRef, useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/messenger.scss";

export const Messenger = () => {
	// CREATE STATE USING HOOKS
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState("");
	const { actions, store } = useContext(Context);

	// Creating reference for end of div
	const messagesEndRef = useRef(null);

	// Function to scroll to bottom of div
	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
	};

	useEffect(() => {
		// callback function being passed to the listeners
		actions.subscribe("messenger", msg => {
			console.log("useEffect incoming message", msg);
			setMessages(_messages => [..._messages, msg]);
		});
	}, []);

	// componentDidUpdate method as hook (useEffect)
	// this will auto call when message length changes
	useEffect(() => {
		scrollToBottom();
	}, [messages.length]);

	// ON CHANGE INPUT FILED THIS WILL CALL
	const onChange = e => {
		setMessage(e.target.value);
	};
	console.log("Messenger refreshing with messages: ", messages);

	return (
		<div className="text-center justify-content-center p-2 message-container">
			<h2>Follow The Signs</h2>
			<h2>Welcome To The Global Chat!</h2>
			<br />
			<div className="text-left mx-auto box bg-white p-1">
				{/* DISPLAY EACH AND EVERY MESSAGE IN THE STATE AS A FOR LOOP */}
				{messages.length > 0 &&
					messages.map((payload, index) => (
						<div key={index}>
							<p
								className={
									payload.username == store.currentUser?.username
										? "chat px-1 ml-auto rounded border border-dark self-user"
										: "chat px-1 mr-auto rounded border border-dark"
								}>
								{payload.username}: {payload.message} ({payload.time})
							</p>
						</div>
					))}
				<div ref={messagesEndRef} />
			</div>

			<div className="messagebar mx-auto">
				{/* MESSAGE BAR */}
				<input
					className="m-2 w-50"
					onChange={e => onChange(e)}
					onKeyPress={e => {
						if (e.key == "Enter") {
							actions.sendMessage(message);
							setMessage("");
						}
					}}
					placeholder="Type your message here"
					value={message}
					name="message"
				/>
				<br />

				{/* SEND MESSAGE BUTTON */}
				<button
					className="btn btn-primary m-2"
					onClick={() => {
						actions.sendMessage(message);
						setMessage("");
					}}>
					Send Message
				</button>
			</div>
		</div>
	);
};
