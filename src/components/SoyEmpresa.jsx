import React from 'react';

import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { Box } from '@mui/material';

import '../scss/Main.scss';
import { scrollEffect } from '../utils/helper';

// eslint-disable-next-line react/display-name
const SoyEmpresa = React.forwardRef((props, myref) => {
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
				<p className='titleBox_intro paragraph-s'>Soy empresa</p>
				<h2 className='titleBox_intro_title subtitle'>
					Potenciamos el impacto social de las empresas
				</h2>
				<p className=' titleBox_intro_title_text text'>
					En nuestra plataforma gratuita encontrarás ong alineadas con los
					objetivos de sostenibilidad de tu empresa. Descubre los mejores
					aliados, ayuda realizando compras responsables, dale una nueva vida a
					lo que tu empresa ya no necesite.
				</p>
			</Box>
			<Box className={'box-cards-empresa'}>
				<Box className={'boxGratis'}>
					<Box className={'boxGratis_items'}>
						<h3 className={'h3 boxGratis_items_title'}>
							Proyectos con impacto
						</h3>
						<Box display={'flex'} textAlign={'left'} className={'boxIcon'}>
							<CheckOutlinedIcon className='check-blue' />
							<p className={'text'}>
								Ofrecer donaciones en especie, capacitaciones, pro bono,
								voluntariado y otros.
							</p>
						</Box>
						<Box display={'flex'} textAlign={'left'} className={'boxIcon'}>
							<CheckOutlinedIcon className='check-blue' />
							<p className={'text'}>
								Descubrir nuevas organizaciones alineadas con los objetivos de
								sostenibilidad de tu empresa.
							</p>
						</Box>
					</Box>
					<Box className={'boxGratis_items'}>
						<h3 className={'h3 boxGratis_items_title'}>Compras responsables</h3>
						<Box display={'flex'} textAlign={'left'} className={'boxIcon'}>
							<CheckOutlinedIcon className='check-blue' />
							<p className={'text'}>
								Acceder a una base de organizaciones que ofrecen productos y
								servicios con impacto social y ambiental.
							</p>
						</Box>
						<Box display={'flex'} textAlign={'left'} className={'boxIcon'}>
							<CheckOutlinedIcon className='check-blue' />
							<p className={'text'}>
								Realizar compras inclusivas con impacto social y ambiental.
							</p>
						</Box>
					</Box>
					<Box className={'boxGratis_items'}>
						<h3 className={'h3'}>Circularidad (Scrap)</h3>
						<Box display={'flex'} textAlign={'left'} className={'boxIcon'}>
							<CheckOutlinedIcon className='check-blue' />
							<p className={'text'}>
								Encontrar organizaciones cercanas que puedan necesitar tus
								residuos o lo que ya no uses.
							</p>
						</Box>
						<Box display={'flex'} textAlign={'left'} className={'boxIcon'}>
							<CheckOutlinedIcon className='check-blue' />
							<p className={'text'}>
								Reducir tu impacto ambiental y acercar ayuda a quien la
								necesita.
							</p>
						</Box>
					</Box>
					<Box className='box-btn-empresa'>
						<button
							className={'btn-usar-plataforma box-btn-empresa_gratis'}
							onClick={() => {
								setTimeout(() => scrollEffect(props.onClickRefRegister), 100);
							}}
						>
							Usar plataforma gratuita
						</button>
					</Box>
				</Box>

				<Box className={'boxPago'}>
					<Box className={'boxPago_item'}>
						<h3 className={'boxPago_item_title h3-w'}>
							Voluntariado corporativo
						</h3>
						<Box className={'boxPago_item_title_description'}>
							<Box display={'flex'} textAlign={'left'} className={'boxIcon'}>
								<CheckOutlinedIcon className='check-white' />
								<p className={'text-w'}>
									Proponer oportunidades de voluntariado a tus colaboradores.
								</p>
							</Box>
							<Box display={'flex'} textAlign={'left'} className={'boxIcon'}>
								<CheckOutlinedIcon className='check-white' />
								<p className={'text-w'}>
									Gestionar las horas dedicadas por cada voluntario y reconocer
									su labor social.
								</p>
							</Box>
							<Box display={'flex'} textAlign={'left'} className={'boxIcon'}>
								<CheckOutlinedIcon className='check-white' />
								<p className={'text-w'}>Obtener reportes detallados.</p>
							</Box>
						</Box>
					</Box>
					<Box className='box-btn-empresa'>
						<button
							className={'btn-usar-plataforma_blue box-btn-empresa_pago'}
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

export default SoyEmpresa;
