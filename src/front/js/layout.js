import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { News } from "./pages/news";
import { Events } from "./pages/events";
import { Discussions } from "./pages/discussions";
import { Connections } from "./pages/connections";

import { MainNavbar } from "./component/Navbar";
import { Footer } from "./component/Footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="">
			{/* <BrowserRouter basename={basename}> */}
			<MainNavbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/demo">
					<Demo />
				</Route>
				<Route exact path="/news">
					<News />
				</Route>
				<Route exact path="/events">
					<Events />
				</Route>
				<Route exact path="/single/:theid">
					<Single />
				</Route>
				<Route exact path="/discussions">
					<Discussions />
				</Route>
				<Route exact path="/connections">
					<Connections />
				</Route>
				<Route>
					<h1 className="m-auto"> 404 Not found!</h1>
				</Route>
			</Switch>
			<Footer />
			{/* </BrowserRouter> */}
		</div>
	);
};

export default withRouter(Layout);
