// import react and hooks to access state and lifecycle methods
import React, { useState, useEffect, useRef } from "react";
// import socket io
import io from "socket.io-client";

// Styles
import "../../styles/messenger.scss";

// ENDPOINT VARIABLE
let endPoint = process.env.BACKEND_URL;

// CONNECT WITH SERVER USING SOCKET IO
let socket = io.connect(`${endPoint}`);

export const Messenger = () => {
	// CREATE STATE USING HOOKS
	const [messages, setMessages] = useState(["Hello And Welcome to the Chat!"]);
	const [message, setMessage] = useState("");

	// Creating reference for end of div
	const messagesEndRef = useRef(null);

	// Function to scroll to bottom of div
	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
	};

	// componentDidUpdate method as hook (useEffect)
	// this will auto call when message length changes
	useEffect(() => {
		getMessages();
		scrollToBottom();
	}, [messages.length]);

	// This method will call when first time app render and
	// Every time message length changes
	const getMessages = () => {
		socket.on("message", msg => {
			setMessages([...messages, msg]);
		});
	};

	// ON CHANGE INPUT FILED THIS WILL CALL
	const onChange = e => {
		setMessage(e.target.value);
	};

	// WHEN SEND BUTTON IS PRESSED THIS METHOD IS CALLED
	const sendMessage = () => {
		if (message !== "") {
			// WHEN FUNCTION CALLED EMIT THE MESSAGE TO SERVER
			console.log("emitting the message");
			socket.emit("message", message);
			setMessage("");
		} else {
			alert("Please Add A Message");
		}
	};

	return (
		<div className="text-center justify-content-center">
			<h2>FTS Chat</h2>
			<h2>Room: Session</h2>
			<br />
			<div className="text-left mx-auto box">
				{/* DISPLAY EACH AND EVERY MESSAGE IN THE STATE AS A FOR LOOP */}
				{messages.length > 0 &&
					messages.map((msg, index) => (
						<div key={index}>
							<p className="px-1">{msg}</p>
						</div>
					))}
				<div ref={messagesEndRef} />
			</div>

			<div>
				{/* MESSAGE BAR */}
				<input
					className="m-2 w-50"
					onChange={e => onChange(e)}
					onKeyPress={e => {
						if (e.key == "Enter") {
							sendMessage();
						}
					}}
					placeholder="Type your message here"
					value={message}
					name="message"
				/>
				<br />

				{/* SEND MESSAGE BUTTON */}
				<button className="btn btn-primary m-2" onClick={() => sendMessage()}>
					Send Message
				</button>
			</div>
		</div>
	);
};
