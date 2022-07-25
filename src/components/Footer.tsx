import React, { MutableRefObject } from 'react';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

import '../scss/Main.scss';
import { scrollEffect } from '../utils/helper';

type Props = {
	onClickRefEmpresaOng: MutableRefObject<HTMLDivElement>;
	onClickRefEmpresa: MutableRefObject<HTMLDivElement>;
	onClickRefOng: MutableRefObject<HTMLDivElement>;
	onClickRefAlianzas: MutableRefObject<HTMLDivElement>;
	onClickRefRegister: MutableRefObject<HTMLDivElement>;
};

const Footer = ({
	onClickRefEmpresaOng,
	onClickRefEmpresa,
	onClickRefOng,
	onClickRefAlianzas,
	onClickRefRegister,
}: Props): JSX.Element => {
	return (
		<footer className='footer-container'>
			<Box px={{ xs: 2, sm: 5 }} py={{ xs: 4, sm: 5 }}>
				<Container maxWidth='lg'>
					<Grid container spacing={5}>
						<Grid item xs={12} sm={6}>
							<Box marginBottom={2}>
								<Typography className='footer-logo'>
									<img
										src='../assets/FONSELP_BLUE_TRANSBG.png'
										alt='Logo fonselp'
										style={{ width: '200px' }}
									/>
								</Typography>
								<p className='footer-text' style={{ color: '#FFFFFF' }}>
									Fonselp opera en Argentina a través de Res Non Verba
									Asociación Civil, en Colombia a través de Fundación Casa
									Cívica y en México a través Tecnología sin fines de Lucro AC.
								</p>
							</Box>
							<Box className='footer-text'>
								<Link
									underline='none'
									color='#FFFFFF'
									href='https://www.facebook.com/fonselp'
									target='_blank'
									rel='noreferrer'
								>
									<FacebookIcon
										sx={{
											color: 'white',
											fontSize: '30px',
											marginRight: '10px',
										}}
									/>
								</Link>
								<Link
									underline='none'
									color='#FFFFFF'
									href='https://twitter.com/FonselpC'
									target='_blank'
									rel='noreferrer'
								>
									<TwitterIcon
										sx={{
											color: 'white',
											fontSize: '30px',
											marginRight: '10px',
										}}
									/>
								</Link>
								<Link
									underline='none'
									color='#FFFFFF'
									href='https://www.linkedin.com/company/fonselp/'
									target='_blank'
									rel='noreferrer'
								>
									<LinkedInIcon sx={{ color: 'white', fontSize: '30px' }} />
								</Link>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6} className='footer-nav'>
							<Box
								marginBottom={3}
								sx={{ display: 'flex', justifyContent: 'center' }}
							>
								<h2 style={{ color: '#FFFFFF' }}>Navegación</h2>
							</Box>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'flex-end',
								}}
							>
								<Grid container>
									<Grid item xs={12} sm={6}>
										<Box sx={{ textAlign: 'center' }}>
											<Link
												underline='none'
												color='#FFFFFF'
												onClick={() => scrollEffect(onClickRefEmpresaOng)}
												style={{ cursor: 'pointer' }}
											>
												<p style={{ marginBottom: '8px' }}>¿Cómo funciona?</p>
											</Link>
											<Link
												underline='none'
												color='#FFFFFF'
												href='/'
												target='_blank'
												rel='noreferrer'
											>
												<p style={{ marginBottom: '8px' }}>Sobre Fonselp</p>
											</Link>
											<Link
												underline='none'
												color='#FFFFFF'
												onClick={() => scrollEffect(onClickRefAlianzas)}
												style={{ cursor: 'pointer' }}
											>
												<p style={{ marginBottom: '8px' }}>Alianzas</p>
											</Link>
										</Box>
									</Grid>
									<Grid item xs={12} sm={6}>
										<Box sx={{ textAlign: 'center' }}>
											<Link
												underline='none'
												color='#FFFFFF'
												onClick={() => scrollEffect(onClickRefEmpresa)}
												style={{ cursor: 'pointer' }}
											>
												<p style={{ marginBottom: '8px' }}>Soy empresa</p>
											</Link>
											<Link
												underline='none'
												color='#FFFFFF'
												onClick={() => scrollEffect(onClickRefOng)}
												style={{ cursor: 'pointer' }}
											>
												<p style={{ marginBottom: '8px' }}>Soy ONG</p>
											</Link>
											<Link
												underline='none'
												color='#FFFFFF'
												onClick={() => scrollEffect(onClickRefRegister)}
												style={{ cursor: 'pointer' }}
											>
												<p style={{ marginBottom: '8px' }}>Regístrate gratis</p>
											</Link>
										</Box>
									</Grid>
								</Grid>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</footer>
	);
};

export default Footer;
