import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { ControlledCarousel } from "../component/carousel";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="px-5 mt-5 h-100">
			<h1>News</h1>
			<div className="text-center">
				<ControlledCarousel />
			</div>
		</div>
	);
};
