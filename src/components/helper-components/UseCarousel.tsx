import { Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
				<Box
					key={data.title}
					className={'box-carouser-img'}
					style={{
						width: '100%',
						height: '90%',
						display: 'flex',
						justifyContent: 'center',
						marginBottom: '10%',
						alignItems: 'center',
						alignContent: 'center',
						margin: 'auto',
						backgroundSize: 'cover',
					}}
				>
					<img
						src={data.src}
						alt={data.title}
						style={{ width: '200px', height: '200px' }}
					/>
				</Box>
			))}
		</Carousel>
	);
};

export default UseCarousel;
