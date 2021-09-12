import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { NewsCarousel } from "../component/NewsCarousel";
import { HomeEventCards } from "../component/HomeEventCards";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="jumbotron jumbotron-fluid">
				<div className="container page-animation">
					<h1 className="display-4 text-center">Follow The Signs</h1>
					<p className="lead text-center text-color">
						A place for the deaf community to stay informed, connected and educated
					</p>
				</div>
			</div>
			<div className="px-5 pt-3 h-100">
				<h2>News</h2>
				<div className="text-center">
					<NewsCarousel />
				</div>
			</div>

			<div className="px-5 pt-3 h-100">
				<h2>Events</h2>
				<div className="row m-2">
					<HomeEventCards />
				</div>
			</div>

			<div className="px-5 pt-3 h-100">
				<h2>Discussions</h2>
			</div>
		</>
	);
};
