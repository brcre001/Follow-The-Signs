import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { NewsCarousel } from "../component/NewsCarousel";
import { HomeEventCards } from "../component/card";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="text-center pt-3">
				<h1 className="m-0">Follow The Signs</h1>
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
