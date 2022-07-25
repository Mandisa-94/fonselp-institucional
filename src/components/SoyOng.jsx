import React from 'react';

import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { Box } from '@mui/material';

import '../scss/Main.scss';
import { scrollEffect } from '../utils/helper';

// eslint-disable-next-line react/display-name
const SoyOng = React.forwardRef((props, myref) => {
	const handleDemo = () => {
		props.setDemo(true);
		setTimeout(() => scrollEffect(props.onClickRefRegister), 100);
	};
	return (
		<Box
			ref={myref}
			display={'flex'}
			flexDirection={'column'}
			justifyContent={'center'}
			alignItems={'center'}
			className={'container-auto'}
		>
			<Box className={'titleBox'}>
				<p className='titleBox_intro paragraph-s'>Soy ong</p>
				<h2 className='titleBox_intro_title subtitle'>
					Conectamos ONG con empresas que puedan apoyar tu causa
				</h2>
				<p className=' titleBox_intro_title_text text'>
					Potencia el impacto social de tu organización con nuestra plataforma
					gratuita dándole visibilidad con empresas de toda latinoamérica.
					Gestiona el ciclo de voluntariado con herramientas para maximizar la
					eficiencia del equipo desde un abono mensual.
				</p>
			</Box>
			<Box className={'box-cards-ong'}>
				<Box className={'boxGratisOng'}>
					<h3 className={'h3 boxGratisOng_title'}>Conectar con empresas</h3>
					<Box className={'boxGratisOng_title_description'}>
						<Box display={'flex'} textAlign={'left'} className={'boxIcon'}>
							<CheckOutlinedIcon className='check-blue' />
							<p className={'text'}>
								Acceder a una plataforma que centraliza ofrecimientos y
								donaciones en especie de empresas.
							</p>
						</Box>
						<Box display={'flex'} textAlign={'left'} className={'boxIcon'}>
							<CheckOutlinedIcon className='check-blue' />
							<p className={'text'}>Publicar tus necesidades.</p>
						</Box>
						<Box display={'flex'} textAlign={'left'} className={'boxIcon'}>
							<CheckOutlinedIcon className='check-blue' />
							<p className={'text'}>
								Ofertar los productos y servicios de tu emprendimiento social.
							</p>
						</Box>
					</Box>
					<Box className='box-btn-omg'>
						<button
							className={'btn-usar-plataforma box-btn-omg_gratis'}
							onClick={() => {
								setTimeout(() => scrollEffect(props.onClickRefRegister), 100);
							}}
						>
							Usar plataforma gratuita
						</button>
					</Box>
				</Box>

				<Box className={'boxPagoOng'}>
					<h3 className={'boxPagoOng_title h3-w'}>Voluntariado</h3>
					<Box className={'boxPagoOng_title_description'}>
						<Box display={'flex'} textAlign={'left'} className={'boxIcon'}>
							<CheckOutlinedIcon className='check-white' />
							<p className={'text-w'}>Emitir los acuerdos de voluntariado.</p>
						</Box>
						<Box display={'flex'} textAlign={'left'} className={'boxIcon'}>
							<CheckOutlinedIcon className='check-white' />
							<p className={'text-w'}>
								Gestionar las horas dedicadas por cada voluntario y reconocer su
								labor social.
							</p>
						</Box>
						<Box display={'flex'} textAlign={'left'} className={'boxIcon'}>
							<CheckOutlinedIcon className='check-white' />
							<p className={'text-w'}>Obtener reportes detallados.</p>
						</Box>
					</Box>
					<Box className='box-btn-omg'>
						<button
							className={'btn-usar-plataforma_blue box-btn-omg_pago'}
							onClick={handleDemo}
						>
							Comenzar prueba gratuita
						</button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
});

export default SoyOng;
