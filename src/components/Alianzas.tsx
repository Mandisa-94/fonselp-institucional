import { Box } from '@mui/material';
import React from 'react';
import '../scss/Main.scss';
import UseCarousel from './helper-components/UseCarousel';

interface ImagesObj {
	[key: string]: any;
}

const images: ImagesObj[] = [
	{
		title: 'Mercado Libre',
		src: '../assets/logos/mercado_libre_logo.svg',
	},
	{
		title: 'Santander Río',
		src: '../assets/logos/santander_logo.svg',
	},
	{
		title: 'Grupo México',
		src: '../assets/logos/grupo_mexico_logo.svg',
	},
	{
		title: 'Superville',
		src: '../assets/logos/supervielle_logo.svg',
	},
	{
		title: 'Globant',
		src: '../assets/logos/globant-logo.svg',
	},
];

const Alianzas = React.forwardRef((props, myref) => {
	return (
		<Box
			ref={myref}
			display='flex'
			flexDirection={'column'}
			textAlign={'center'}
			justifyContent={'center'}
			alignItems={'center'}
			alignContent={'center'}
			className={'container-auto'}
		>
			<Box className={'titleBox'}>
				<p className='titleBox_intro paragraph-s'>Alianzas</p>
				<h2 className='titleBox_intro_title subtitle'>
					Conéctate con organizaciones increíbles
				</h2>
				<p
					className=' titleBox_intro_title_text text'
					style={{ margin: '2rem' }}
				>
					Conoce a las organizaciones y causas que están guiando una nueva
					generación de innovadores.
				</p>
				<Box className='box-carousel' style={{ width: '100%' }}>
					<UseCarousel datos={images} />
				</Box>
			</Box>
		</Box>
	);
});

export default Alianzas;
