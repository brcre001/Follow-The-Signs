import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { NewsCarousel } from "../component/NewsCarousel";
import { EventsCard } from "../component/EventsCard";
import { DiscussionsCard } from "../component/DiscussionsCard";
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
							A place for the deaf community to stay informed, connected, and educated
						</p>
					</div>
				</div>
			</div>
			<div className="px-5 pt-3 h-100">
				<h2>Top News</h2>
				<div className="text-center">
					<NewsCarousel />
				</div>
			</div>

			<div className="px-5 pt-3 h-100">
				<h2 className="mb-4">Upcoming Events</h2>
				<div className="row mb-2">
					{[1, 2, 3, 4].map(index => (
						<EventsCard key={index} />
					))}
				</div>
			</div>

			<div className="px-5 pt-3 h-100">
				<h2>Trending Discussions</h2>
				<div className="row py-3 justify-content-center">
					{[1, 2, 3, 4, 5, 6].map(index => (
						<div className="p-1" key={index}>
							<DiscussionsCard />
						</div>
					))}
				</div>
			</div>
		</>
	);
};
