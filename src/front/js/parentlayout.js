import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { MainNavbar } from "./component/Navbar";
import { Footer } from "./component/Footer";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { About } from "./pages/aboutus";
import { Congrats } from "./pages/congrats";
import Layout from "./layout";
import injectContext from "./store/appContext";

//create your first component
const ParentLayout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<BrowserRouter basename={basename}>
			<ScrollToTop>
				<Switch>
					<Route exact path="/login">
						<MainNavbar navigation={false} />
						<Login />
					</Route>
					<Route exact path="/signup">
						<MainNavbar navigation={false} />
						<Signup />
					</Route>
					<Route exact path="/congrats">
						<MainNavbar navigation={false} />
						<Congrats />
					</Route>
					<Route>
						<Layout />
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
				</Switch>
				<Footer />
			</ScrollToTop>
		</BrowserRouter>
	);
};

export default injectContext(ParentLayout);
