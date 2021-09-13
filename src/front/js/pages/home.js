import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { NewsCarousel } from "../component/NewsCarousel";
import { HomeEventCards } from "../component/HomeEventCards";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="jumbotron-home">
				<div className="container">
					<div className="home-animation">
						<h1 className="display-4 text-center home-text">Follow The Signs</h1>
						<p className="lead text-center home-subtext mt-3">
							A place for the deaf community to stay informed, connected and educated
						</p>
					</div>
				</div>
			</div>
			<div className="px-5 pt-3 h-100">
				<h2>News</h2>
				<div className="text-center">
					<NewsCarousel />
				</div>
			</div>

			<div className="px-5 pt-3 h-100">
				<h2 className="mb-4">Events</h2>
				<div className="row mb-2">
					<HomeEventCards />
				</div>
			</div>

			<div className="px-5 pt-3 h-100">
				<h2>Discussions</h2>
			</div>
		</>
	);
};
