import { useState } from 'react';

import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
} from '@mui/material';

import '../scss/Main.scss';
import Onboarding from './Onboarding';

function HistoriasFonselp() {
	const [showModal, setShowModal] = useState(false);
	const openClose = () => {
		setShowModal(!showModal);
	};

	return (
		<Box
			gap={2}
			display='flex'
			flexDirection={'column'}
			className='container-cards'
		>
			<Box display='flex' justifyContent={'flex-end'} textAlign={'center'}>
				<h2 className='subtitle width'>
					Historias que se iniciaron con Fonselp
				</h2>
				<img
					src='../assets/image-benefits.png'
					alt='Ilustracion para historias que se iniciaron con fonselp'
					className='img-benefits'
				/>
			</Box>
			<Box display='flex' my={'6%'}>
				<Box>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component='img'
								height='140'
								image='/static/images/cards/contemplative-reptile.jpg'
								alt='green iguana'
							/>
							<CardContent>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
									quae cupiditate quaerat deleniti, corporis officiis
									consequatur a voluptate ad, consectetur enim necessitatibus
									sit, corrupti esse facilis provident quibusdam assumenda
									incidunt.
								</p>
							</CardContent>
						</CardActionArea>
					</Card>
				</Box>

				<Box mx={'1%'}>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component='img'
								height='140'
								image='/static/images/cards/contemplative-reptile.jpg'
								alt='green iguana'
							/>
							<CardContent>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
									quae cupiditate quaerat deleniti, corporis officiis
									consequatur a voluptate ad, consectetur enim necessitatibus
									sit, corrupti esse facilis provident quibusdam assumenda
									incidunt.
								</p>
							</CardContent>
						</CardActionArea>
					</Card>
				</Box>

				<Box mr={'1%'}>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component='img'
								height='140'
								image='/static/images/cards/contemplative-reptile.jpg'
								alt='green iguana'
							/>
							<CardContent>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
									quae cupiditate quaerat deleniti, corporis officiis
									consequatur a voluptate ad, consectetur enim necessitatibus
									sit, corrupti esse facilis provident quibusdam assumenda
									incidunt.
								</p>
							</CardContent>
						</CardActionArea>
					</Card>
				</Box>

				<Box>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component='img'
								height='140'
								image='/static/images/cards/contemplative-reptile.jpg'
								alt='green iguana'
							/>
							<CardContent>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
									quae cupiditate quaerat deleniti, corporis officiis
									consequatur a voluptate ad, consectetur enim necessitatibus
									sit, corrupti esse facilis provident quibusdam assumenda
									incidunt.
								</p>
							</CardContent>
						</CardActionArea>
					</Card>
				</Box>
			</Box>
			<Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
				<button className='btn-soy' onClick={openClose}>
					¿Cómo empezar?
				</button>
				<Onboarding showModal={showModal} setShowModal={setShowModal} />
			</Box>
		</Box>
	);
}

export default HistoriasFonselp;
