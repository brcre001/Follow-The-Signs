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

			logout: async () => {
				localStorage.removeItem("jwt-token", data.token);
				setStore({ currentUser: null });
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
