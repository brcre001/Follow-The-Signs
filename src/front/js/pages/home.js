import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { RecentNewsCarousel } from "../component/RecentNewsCarousel";
import { HomeEventCards } from "../component/card";
import { News } from "./news";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="text-center pt-3">
				<h1>Follow The Signs</h1>
				<hr />
			</div>
			<div className="px-5 py-3 h-100">
				<h2>News</h2>
				<div className="text-center">
					<RecentNewsCarousel />
				</div>
			</div>

			<div className="px-5 py-3 h-100">
				<h2>Events</h2>
				<div className="row m-2">
					<HomeEventCards />
				</div>
			</div>

			<div className="px-5 py-3 h-100">
				<h2>Discussions</h2>
			</div>
		</>
	);
};
