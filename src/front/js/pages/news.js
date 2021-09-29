import React, { useEffect, useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { NewsCarousel } from "../component/NewsCarousel";
import { NewsCard } from "../component/NewsCard";
import { Context } from "../store/appContext";
import queryString from "query-string";

export const News = () => {
	const { actions, store } = useContext(Context);
	const [newsArray, setNewsArray] = useState(store.news);

	// REPLACED BY GETINFO FUNCTION ON FLUX
	// useEffect(() => {
	// 	actions.getNews();
	// }, []);

	useEffect(() => {
		const qs = queryString.parse(location.hash);
		console.log("This is parsed info: ", qs);
		searchFunction(qs.keyword);
	}, [store.news]);

	const searchFunction = keyword => {
		console.log("Search function keyword: ", keyword);
		let filteredArray = store.news.filter(item => {
			if (keyword == "" || keyword == undefined) {
				return item;
			} else if (item.title.toLowerCase().includes(keyword.toLowerCase())) {
				return item;
			}
		});
		setNewsArray(filteredArray);
	};

	const searchHash = event => {
		searchFunction(event.target.value);
		if (event.target.value == "") {
			setNewsArray(store.news);
		}
		location.hash = `keyword=${event.target.value}`;
	};

	return (
		<>
			{/* JUMBOTRON */}
			<div className="jumbotron jumbotron-fluid">
				<div className="container page-animation">
					<h1 className="display-4 text-center">News Board</h1>
					<p className="lead text-center text-color">
						Keep up to date with the latest news <br /> Information dealing with and for the deaf community
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
				</div>
			</div>
			<div className="px-5 pt-3">
				{store.news.length == newsArray.length && (
					<>
						<h1>Recent News</h1>
						<div className="text-center py-2">
							<NewsCarousel />
						</div>
					</>
				)}
				<div className="row px-5 py-3 justify-content-center w-100">
					{newsArray.length > 0 ? (
						newsArray.map((item, index) => (
							<NewsCard
								key={index}
								title={item.title}
								description={item.description}
								imageURL={item.imageURL}
								pageURL={item.pageURL}
							/>
						))
					) : (
						<div className="container" style={{ height: "36vh" }}>
							<div className="alert alert-danger" role="alert">
								No results found for search term!
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};
