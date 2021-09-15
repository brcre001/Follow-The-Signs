import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/congrats.scss";

export const Congrats = () => {
	let history = useHistory();

	useEffect(() => {
		const interval = setInterval(() => {
			history.push("/login");
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="d-flex h-100 vw-100 justify-content-center align-items-center">
			<h1 className="m-auto text-center">Congrats on making an account with Follow The Signs!</h1>
		</div>
	);
};
