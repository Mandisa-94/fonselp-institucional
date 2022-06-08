import React from 'react';
import { Box } from '@mui/system';
import '../scss/Main.scss';

function SobreFonselp() {
	return (
		<Box
			display={'flex'}
			flexDirection={'column'}
			justifyContent={'center'}
			alignItems={'center'}
			className={'container'}
		>
			<Box className={'titleBox'}>
				<p className='titleBox_intro paragraph-s'>Sobre fonselp</p>
				<h2 className=' titleBox_intro_title subtitle'>
					Fonselp es una plataforma que vincula más de 5000 empresas, pymes, ONG
					y universidades de Iberoamérica{' '}
				</h2>
			</Box>
			<Box display={'flex'} className={'box-img'}>
				<Box className={'box-img_sf1'}>
					<img src='../assets/image-trust-01.png' alt='' />
				</Box>
				<Box className={'box-img_sf2'}>
					<img src='../assets/image-trust-02.png' alt='' />
				</Box>
				<Box className={'box-img_sf3'}>
					<img src='../assets/image-trust-03.png' alt='' />
				</Box>
			</Box>
		</Box>
	);
}

export default SobreFonselp;
