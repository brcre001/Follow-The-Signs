// import react and hooks to access state and lifecycle methods
import React, { useState, useEffect } from "react";
// import socket io
import io from "socket.io-client";

// endpoint variable
let endPoint = process.env.BACKEND_URL;
// connect with server using socket io
let socket = io.connect(`${endPoint}`);

// Functional component
export const Messenger = () => {
	// create state using hooks
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

	// On change input field this will call
	const onChange = e => {
		setMessage(e.target.value);
	};

	// When send button pressed this method called
	const onClick = () => {
		if (message !== "") {
			// When btn clicked emit the message to server
			console.log("emitting the message");
			socket.emit("message", message);
			setMessage("");
		} else {
			alert("Please Add A Message");
		}
	};

	// Return the view
	return (
		<div>
			{/* display each and every message in the state as a for loop */}
			{messages.length > 0 &&
				messages.map((msg, index) => (
					<div key={index}>
						<p>{msg}</p>
					</div>
				))}
			{/* input field */}
			<input value={message} name="message" onChange={e => onChange(e)} />
			{/* Btn */}
			<button onClick={() => onClick()}>Send Message</button>
		</div>
	);
};
