import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { NewsCarousel } from "../component/NewsCarousel";
import { EventsCard } from "../component/EventsCard";
import { DiscussionsCard } from "../component/DiscussionsCard";
import { Banner } from "./banner";
import PropTypes from "prop-types";
import "../../styles/home.scss";

// FUNCTION TO PICK A CERTAIN AMOUNT OF ITEMS FROM AN ARRAY
// AND MAKE A NEW ARRAY FROM THAT
//
// const createRandomArray = (numberOfItems, infoArray) => {
// 	let newArray = [];
// 	for (let x = 0; x < numberOfItems; x++) {
// 		let randomNumber = Math.floor(Math.random() * infoArray.length);
// 		let randomItem = infoArray[randomNumber];
// 		newArray.push(randomItem);
// 	}
// 	return newArray;
// };

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
				<h2 className="mb-4 text-center">Top News</h2>
				<div className="text-center">
					<NewsCarousel />
				</div>
			</div>

			{/* BANNER SECTION OF HOME PAGE */}
			<div className="px-5 pt-3 h-100">
				<div className="text-center">
					<Banner />
				</div>
				<hr className="hr-style" />
			</div>

			{/* EVENTS SECTION OF HOME PAGE */}
			<div className="px-5 pt-5 h-100">
				<h2 className="mb-4 text-center">Upcoming Events</h2>
				<div className="row mb-2">
					{store.events.map((item, index) => (
						<EventsCard
							key={index}
							title={item.title}
							description={item.description}
							pageURL={item.pageURL}
							imageURL={item.imageURL}
						/>
					))}
				</div>
			</div>

			{/* DISCUSSIONS SECTION OF HOME PAGE */}
			<div className="px-5 py-5 h-100">
				<h2 className="text-center">Trending Discussions</h2>
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
