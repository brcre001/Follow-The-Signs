import React, { useState, useContext, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Context } from "../store/appContext";
import "../../styles/banner.scss";

export const NewsCarousel = () => {
	const [index, setIndex] = useState(0);
	const [carouselArray, setCarouselArray] = useState([]);
	const { actions, store } = useContext(Context);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	useEffect(() => {
		if (store.news.length > 0) {
			let newArray = [];
			let infoArray = [...store.news];
			for (let x = 0; x < 4; x++) {
				let randomNumber = Math.floor(Math.random() * infoArray.length);
				let randomItem = infoArray[randomNumber];
				newArray.push(randomItem);
				infoArray.splice(randomNumber, 1);
			}
			setCarouselArray(newArray);
			console.log("This is news carousel array: ", newArray);
		}
	}, [store.news]);

	return (
		<div className="col-lg-10 col-12 justify-content-center mx-auto news-carousel">
			<Carousel activeIndex={index} onSelect={handleSelect} className="h-70">
				{carouselArray.length > 0 &&
					carouselArray.map((item, index) => {
						return (
							<Carousel.Item key={index}>
								<img className="d-block w-100 rounded img-fluid" src={item.imageURL} alt={item.title} />
								<Carousel.Caption>
									<a href={item.pageURL}>
										<h3 className="h-25 text-shadow bg-dark rounded">{item.title}</h3>
										{/* <p className="text-shadow">{item.description}</p> */}
									</a>
								</Carousel.Caption>
							</Carousel.Item>
						);
					})}
			</Carousel>
		</div>
	);
};
