const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			currentUser: null,
			message: null,
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
				setStore({ currentUser: { email: data.email, token: data.token } });

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
			}
		}
	};
};

export default getState;
