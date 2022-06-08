import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../../scss/Main.scss';

const UseCarousel = ({ datos }) => {
	return (
		<Carousel
			autoPlay
			infiniteLoop
			showArrows={false}
			centerMode
			// dynamicHeight
		>
			{datos?.map(data => (
				<div key={data.title}>
					<img src={data.src} alt={data.title} style={{ width: '30%' }} />
				</div>
			))}
		</Carousel>
	);
};

export default UseCarousel;
