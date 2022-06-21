import { useState } from "react";

import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Backdrop, Container, Fade, Grid, Modal } from "@mui/material";
import { Box } from "@mui/system";
import "../scss/Main.scss";

function Onboarding({ showModal, setShowModal }) {
	const [step, setStep] = useState(1);

	function close() {
		setShowModal(!showModal);
		setStep(1);
	}

	function next() {
		setStep(step + 1);
	}

	if (!showModal) return null;
	return (
		showModal && (
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={showModal}
				onClose={close}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={showModal}>
					<Container className='modal'>
						<Box display={'flex'} width={'100%'} justifyContent={'end'}>
							<button className='button-step' onClick={close}>
								<CloseOutlinedIcon />
							</button>
						</Box>
						{(() => {
							switch (step) {
								case 1:
									return (
										<Grid container padding={3}>
											<Grid item xs={10} sm={5} sx={{ marginLeft: '1rem' }}>
												<Box>
													<img
														src='../assets/Onboarding-1.png'
														alt='step-1'
														className='img-step'
													/>
												</Box>
											</Grid>
											<Grid item xs={10} sm={5}>
												<Box
													display={'flex'}
													flexDirection={'column'}
													alignItems={'center'}
													justifyContent={'center'}
													height={'100%'}
												>
													<Box className='steps'>
														<p>1</p>
													</Box>
													<Box marginTop={'2rem'} marginBottom={'2rem'}>
														<p className='text-step'>
															Registrate gratis en menos de 1 minuto
														</p>
													</Box>
													<Box>
														<button className='button-step' onClick={next}>
															<ArrowForwardOutlinedIcon />
														</button>
													</Box>
												</Box>
											</Grid>
										</Grid>
									);
								case 2:
									return (
										<Grid container padding={3}>
											<Grid item xs={10} sm={5} sx={{ marginLeft: '1rem' }}>
												<Box>
													<img
														src='../assets/Onboarding-2.png'
														alt='step-2'
														className='img-step'
													/>
												</Box>
											</Grid>
											<Grid item xs={10} sm={5}>
												<Box
													display={'flex'}
													flexDirection={'column'}
													alignItems={'center'}
													justifyContent={'center'}
													height={'100%'}
												>
													<Box className='steps'>
														<p>2</p>
													</Box>
													<Box marginTop={'2rem'} marginBottom={'2rem'}>
														<p className='text-step'>
															En el dashboard vas a poder revisar o generar
															ofrecimientos, pedidos/ofertas de negocios con
															propósito y la ayuda solicitada entre otros.
														</p>
													</Box>
													<Box>
														<button className='button-step' onClick={next}>
															<ArrowForwardOutlinedIcon />
														</button>
													</Box>
												</Box>
											</Grid>
										</Grid>
									);
								case 3:
									return (
										<Grid container padding={3}>
											<Grid item xs={10} sm={5} sx={{ marginLeft: '1rem' }}>
												<Box>
													<img
														src='../assets/image-intro-mobile.png'
														alt='step-3'
														className='img-step'
													/>
												</Box>
											</Grid>
											<Grid item xs={10} sm={5}>
												<Box
													display={'flex'}
													flexDirection={'column'}
													alignItems={'center'}
													justifyContent={'center'}
													height={'100%'}
												>
													<Box className='steps'>
														<p>3</p>
													</Box>
													<Box marginTop={'2rem'} marginBottom={'2rem'}>
														<p className='text-step'>
															Comunicate con la empresa u organización y
															coordina las acciones que harán en conjunto.
														</p>
													</Box>
													<Box>
														<button
															onClick={close}
															className='button-step button-logout'
														>
															Registrarme gratis
														</button>
													</Box>
												</Box>
											</Grid>
										</Grid>
									);
							}
						})()}
					</Container>
				</Fade>
			</Modal>
		)
	);
}

export default Onboarding;
