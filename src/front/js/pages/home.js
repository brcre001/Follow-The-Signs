import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { NewsCarousel } from "../component/NewsCarousel";
import { EventsCard } from "../component/EventsCard";
import { DiscussionsCard } from "../component/DiscussionsCard";
import PropTypes from "prop-types";
import "../../styles/home.scss";

export const Home = props => {
	const { store, actions } = useContext(Context);

	return (
		<>
			{/* JUMBOTRON WITH ANIMATION */}
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

			{/* NEWS SECTION OF HOME PAGE */}
			<div className="px-5 pt-3 h-100">
				<h2 className="mb-4">Top News</h2>
				<div className="text-center">
					<NewsCarousel />
				</div>
			</div>

			{/* EVENTS SECTION OF HOME PAGE */}
			<div className="px-5 pt-5 h-100">
				<h2 className="mb-4">Upcoming Events</h2>
				<div className="row mb-2">
					{[1, 2, 3, 4].map(index => (
						<EventsCard key={index} />
					))}
				</div>
			</div>

			{/* DISCUSSIONS SECTION OF HOME PAGE */}
			<div className="px-5 py-5 h-100">
				<h2>Trending Discussions</h2>
				<div className="row py-3 justify-content-center">
					{store.discussions.map((discussion, index) => (
						<DiscussionsCard key={index} index={index} disObject={discussion} />
					))}
				</div>
			</div>
		</>
	);
};
Home.propTypes = {
	disObject: PropTypes.object,
	index: PropTypes.number
};
