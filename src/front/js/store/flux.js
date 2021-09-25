// import socket io
import io from "socket.io-client";
// CONNECT WITH SERVER USING SOCKET IO
let socket = io.connect(`${process.env.BACKEND_URL}`);

let listeners = {
	// example listeners
	// messenger: () => null,
	// home: () => null,
};

socket.on("message", msg => {
	// looping all the callbacks that we have for each listenerId that is subscribed
	console.log("incoming message!!!", msg);
	Object.keys(listeners).forEach(listenerId => listeners[listenerId](msg));
});

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			currentUser: null,
			message: null,
			comment: null,
			discussions: [],
			discussionComments: [],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			// This method will call when first time app render and
			// Every time message length changes
			subscribe: (listenerId, callback) => {
				if (listeners[listenerId] === undefined) {
					listeners[listenerId] = callback;
				}
			},

			login: async (email, password) => {
				const resp = await fetch(`${process.env.BACKEND_URL}/api/token`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email, password })
				});

				if (!resp.ok) throw "Problem with the response";

				if (resp.status === 401) {
					throw "Invalid credentials";
				} else if (resp.status === 400) {
					throw "Invalid email or password format";
				}

				const data = await resp.json();
				console.log(data, "this is the resp for the login");

				// save your token in the sessionStorage
				sessionStorage.setItem("jwt-token", data.token);
				setStore({ currentUser: { email, token: data.token, username: data.username } });
				return data.token;
			},

			logout: () => {
				sessionStorage.removeItem("jwt-token");
				setStore({ currentUser: null });
			},

			getDiscussions: async () => {
				try {
					const resp = await fetch(`${process.env.BACKEND_URL}/api/discussions`);
					const discussions = await resp.json();
					setStore({ discussions: discussions });
				} catch (error) {
					console.log(error, "this is and error from the discussion get");
				}
			},

			userComment: async discussion_id => {
				try {
					const resp = await fetch(`${process.env.BACKEND_URL}/api/discussion_comment/${discussion_id}`);
					const discussion_comment = await resp.json();
					console.log(discussion_comment);
					setStore({ discussionComments: discussion_comment });
				} catch (error) {
					console.log(error, "this is and error from the discussion get");
				}
			},

			syncSession: async () => {
				let token = sessionStorage.getItem("jwt-token");
				const resp = await fetch(`${process.env.BACKEND_URL}/api/me`, {
					headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
				});

				if (!resp.ok) throw "Problem with the response";

				if (resp.status === 401) {
					throw "Invalid credentials";
				} else if (resp.status === 400) {
					throw "Invalid email or password format";
				}

				const data = await resp.json();
				setStore({ currentUser: { email: data.email, username: data.username, token } });

				return data;
			},

			createUser: async (full_name, username, email, password) => {
				//
				let response = await fetch(`${process.env.BACKEND_URL}/api/user`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ full_name, username, email, password })
				});
				if (!response.ok) {
					throw Error("Invalid input");
				}
				let new_user = await response.json();

				return new_user;
			},

			createDiscussion: async (title, description) => {
				let token = sessionStorage.getItem("jwt-token");
				let response = await fetch(`${process.env.BACKEND_URL}/api/discussions`, {
					method: "POST",
					headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
					body: JSON.stringify({ title, description })
				});
				console.log("THIS IS THE RESPONSE", response);
				if (!response.ok) {
					throw Error("Missing title or Description");
				}
				let new_discussions = await response.json();
				setStore({ discussions: new_discussions });

				return new_discussions;
			},

			// WHEN SEND BUTTON IS PRESSED THIS METHOD IS CALLED
			sendMessage: message => {
				const store = getStore();
				if (message !== "") {
					// WHEN FUNCTION CALLED EMIT THE MESSAGE TO SERVER
					console.log("emitting the message", store.currentUser, message);
					socket.emit("message", { message, token: store.currentUser.token });
				} else {
					alert("Please Add A Message");
				}
			}
		}
	};
};

export default getState;
