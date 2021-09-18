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

				// save your token in the localStorage
				localStorage.setItem("jwt-token", data.token);
				setStore({ currentUser: { email, token: data.token } });
				return data.token;
			},

			logout: () => {
				localStorage.removeItem("jwt-token");
				setStore({ currentUser: null });
			},
			userComment: async () => {
				let user_comment = await fetch(`${process.env.BACKEND_URL}/api/user`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ comment })
				});
			},

			syncSession: async () => {
				let token = localStorage.getItem("jwt-token");
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
				setStore({ currentUser: { email: data.email, token } });

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
