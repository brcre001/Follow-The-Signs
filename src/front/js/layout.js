import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/home";
import { News } from "./pages/news";
import { Events } from "./pages/events";
import { Discussions } from "./pages/discussions";
import { Connections } from "./pages/connections";
import { MainNavbar } from "./component/Navbar";
import { About } from "./pages/aboutus";
import { Private } from "./component/Private.js";
import { Discussion } from "./pages/discussion";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="h-auto">
			<MainNavbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/news">
					<Private>
						<News />
					</Private>
				</Route>
				<Route exact path="/events">
					<Private>
						<Events />
					</Private>
				</Route>
				<Route exact path="/discussions">
					<Private>
						<Discussions />
					</Private>
				</Route>
				<Route exact path="/connections">
					<Private>
						<Connections />
					</Private>
				</Route>
				<Route exact path="/discussion/:theid">
					<Private>
						<Discussion />
					</Private>
				</Route>
				<Route exact path="/aboutus">
					<About />
				</Route>
				<Route>
					<h1 className="m-auto"> 404 Not found!</h1>
				</Route>
			</Switch>
		</div>
	);
};

export default withRouter(Layout);
