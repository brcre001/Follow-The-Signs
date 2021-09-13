import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export const NewsCarousel = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect} className="h-50">
			<Carousel.Item>
				<img
					className="d-block w-100 rounded"
					src="https://images.pexels.com/photos/3863792/pexels-photo-3863792.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					alt="First slide"
					width="350"
					height="400"
				/>
				<Carousel.Caption>
					<h3 className="h-25">First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100 rounded"
					src="https://images.pexels.com/photos/3844790/pexels-photo-3844790.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					alt="Second slide"
					width="350"
					height="400"
				/>

				<Carousel.Caption>
					<h3 className="h-25">Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100 rounded"
					src="https://images.pexels.com/photos/4386875/pexels-photo-4386875.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					alt="Third slide"
					width="350"
					height="400"
				/>

				<Carousel.Caption>
					<h3 className="h-25">Third slide label</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};
