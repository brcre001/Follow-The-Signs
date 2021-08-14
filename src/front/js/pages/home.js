import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { ControlledCarousel } from "../component/carousel";
import { HomeEventCards } from "../component/card";

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
					<ControlledCarousel />
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
