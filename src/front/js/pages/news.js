import React, { useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { NewsCarousel } from "../component/NewsCarousel";
import { NewsCard } from "../component/NewsCard";
import { Context } from "../store/appContext";

export const News = () => {
	const { actions, store } = useContext(Context);

	useEffect(() => {
		actions.getNews();
	}, []);

	return (
		<>
			<div className="jumbotron jumbotron-fluid">
				<div className="container page-animation">
					<h1 className="display-4 text-center">News Board</h1>
					<p className="lead text-center text-color">
						Keep up to date with the latest news <br /> Information dealing with and for the deaf community
					</p>
					<Form className="d-flex">
						<FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
						<Button className="search-bar">Search</Button>
					</Form>
				</div>
			</div>
			<div className="px-5 pt-3">
				<h1>Recent News</h1>
				<div className="text-center py-2">
					<NewsCarousel />
				</div>
				<div className="row py-3 justify-content-center">
					{store.news.map((item, index) => (
						<div className="p-1" key={index}>
							<NewsCard
								title={item.title}
								description={item.description}
								imageURL={item.imageURL}
								pageURL={item.pageURL}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
