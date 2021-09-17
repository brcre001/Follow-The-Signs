// import react and hooks to access state and lifecycle methods
import React, { useState, useEffect } from "react";
// import socket io
import io from "socket.io-client";

// ENDPOINT VARIABLE
let endPoint = process.env.BACKEND_URL;

// CONNECT WITH SERVER USING SOCKET IO
let socket = io.connect(`${endPoint}`);

export const Messenger = () => {
	// CREATE STATE USING HOOKS
	const [messages, setMessages] = useState(["Hello And Welcome"]);
	const [message, setMessage] = useState("");

	// componentDidUpdate method as hook (useEffect)
	// this will auto call when message length changes
	useEffect(() => {
		getMessages();
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
		<div className="text-center">
			<h2>FTS Chat</h2>
			<h2>Room: Session</h2>
			<br />
			<div className="text-left m-2">
				{/* DISPLAY EACH AND EVERY MESSAGE IN THE STATE AS A FOR LOOP */}
				{messages.length > 0 &&
					messages.map((msg, index) => (
						<div key={index}>
							<p>{msg}</p>
						</div>
					))}
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
