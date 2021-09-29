import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { EventsCard } from "../component/EventsCard";
import queryString from "query-string";

export const Events = () => {
	const { actions, store } = useContext(Context);
	const [eventsArray, setEventsArray] = useState(store.events);

	// REPLACED BY GETINFO FUNCTION ON FLUX
	// useEffect(() => {
	// 	actions.getEvents();
	// 	console.log("Events were retrieved: ", store.events);
	// }, []);

	useEffect(() => {
		const qs = queryString.parse(location.hash);
		searchFunction(qs.keyword);
	}, [store.events]);

	const searchFunction = keyword => {
		let filteredArray = store.events.filter(item => {
			if (keyword == "" || keyword == undefined) {
				return item;
			} else if (item.title.toLowerCase().includes(keyword.toLowerCase())) {
				return item;
			}
		});
		setEventsArray(filteredArray);
	};

	const searchHash = event => {
		searchFunction(event.target.value);
		if (event.target.value == "") {
			setEventsArray(store.events);
		}
		location.hash = `keyword=${event.target.value}`;
	};

	return (
		<>
			{/* JUMBOTRON */}
			<div className="jumbotron jumbotron-fluid">
				<div className="container page-animation">
					<h1 className="display-4 text-center">Events Board</h1>
					<p className="lead text-center text-color">
						Events for the community to enjoy <br /> Attend an event and become more involved with the
						community
					</p>
					<Form className="d-flex">
						<FormControl
							type="search"
							placeholder="Search"
							className="mr-2"
							aria-label="Search"
							onChange={event => searchHash(event)}
						/>
					</Form>
					{/* <Form className="d-flex">
						<FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
						<Button className="search-bar">Search</Button>
					</Form> */}
				</div>
			</div>

			{/* MAPPING FUNCTION TO CREATE THE CARDS */}
			<div className="row px-5 py-3 justify-content-center w-100">
				{eventsArray.length > 0 ? (
					eventsArray.map((item, index) => (
						<EventsCard key={index} title={item.title} description={item.description} />
					))
				) : (
					<div className="container" style={{ height: "36vh" }}>
						<div className="alert alert-danger" role="alert">
							No results found for search!
						</div>
					</div>
				)}
			</div>
		</>
	);
};

// Previous Card layout
/* <Card className="col-6">
	<Card.Img
		// variant="top"
		href="https://placeholder.com/"
		src="https://via.placeholder.com/80x40"
		className="card-img-left"
	/>
	<Card.Body>
		<Card.Title>Events Article</Card.Title>
		<Card.Text>This will be an event that you want to attend!</Card.Text>
		<Button variant="primary">Learn More</Button>
	</Card.Body>
</Card> */
