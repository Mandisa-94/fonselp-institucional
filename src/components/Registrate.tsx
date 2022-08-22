import React, { ForwardedRef, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, AlertTitle, Paper } from '@mui/material';
import { Box } from '@mui/system';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { object, string } from 'yup';

import wpIcon from '../assets/icon_whatsapp.svg';
import '../scss/Main.scss';
import { apiCall } from '../utils/axios';

type Inputs = {
	contact_name: string;
	bussiness_name: string;
	email: string;
	type_id: string;
	mensaje: string;
	about_us: string;
	web_profile: string;
	location: string;
};

const schema = object({
	contact_name: string().required('Por favor escriba su contact_name'),
	bussiness_name: string().required(
		// eslint-disable-next-line comma-dangle
		'Por favor escriba el nombre de su empresa'
	),
	email: string()
		.email('el correo debe tener este formato ejemplo@correo.com')
		.required('Por favor escriba su correo'),
	type_id: string().required('Por favor indique el tipo de organización'),
	about_us: string().required('Por favor escriba su mensaje'),
	web_profile: string().required('Por favor escriba su sitio web'),
	location: object().required('Por favor indique su locación'),
});

const FB = window.fbq;

const RegistrateComponent = (
	{ demo }: { demo: boolean },
	// eslint-disable-next-line comma-dangle
	myref: ForwardedRef<HTMLDivElement>
) => {
	const [btnDisabled, setBtnDisabled] = useState(false);
	const [res, setRes] = useState(false);
	const {
		register,
		handleSubmit,
		control,
		// watch,
		formState: { errors },
	} = useForm<Inputs>({ resolver: yupResolver(schema), mode: 'onBlur' });
	const onSubmit: SubmitHandler<Inputs> = async data => {
		setRes(false);
		setBtnDisabled(true);
		await apiCall('resgiterEntity', data, 'POST');
		setRes(true);
		setBtnDisabled(false);
		// Meta adds
		FB('track', 'Lead');
	};

	const optionsOrg = [
		{ value: '1', label: 'ong' },
		{ value: '2', label: 'Economía social' },
		{ value: '3', label: 'Empresa B' },
		{ value: '4', label: 'Empresa' },
		{ value: '5', label: 'Universidad' },
		{ value: '6', label: 'Otros' },
		{ value: '7', label: 'Municipalidad' },
		{ value: '8', label: 'Escuelas' },
		{ value: '9', label: 'Cooperativa de trabajo' },
	];

	return (
		<Box
			display={'flex'}
			justifyContent={'center'}
			alignItems={'center'}
			className={'container-auto'}
		>
			<div ref={myref}>
				<Box className={'box-form'} display={'flex'}>
					<Box className={'box-form_img'}>
						<img src='../assets/image-form.png' alt='' />
					</Box>
					<Box className={'box-form_inputs'}>
						<Box className={'titleBox'}>
							<p className='titleBox_intro paragraph-s'>Regístrate</p>
							<h2 className='titleBox_intro_title subtitle'>
								Un mundo mejor se está construyendo, sé parte
							</h2>
							<p className=' titleBox_intro_title_text text'>
								Si quieres saber más sobre el voluntariado corporativo,
								solicitar una demo o tienes alguna duda, puedes llenar el
								formulario o escribirnos a info@fonselp.org y con gusto te
								responderemos.
							</p>
						</Box>
						{res || (
							<Box
								display={'flex'}
								justifyContent={'center'}
								alignItems={'center'}
								flexDirection={'column'}
								mt={'4%'}
							>
								<label htmlFor='contact_name'>
									<p className='error'>{errors.contact_name?.message}</p>
								</label>
								<input
									type='text'
									id='contact_name'
									className='input'
									placeholder='Nombre y apellido'
									{...register('contact_name', { required: true })}
								/>
								<label htmlFor='bussiness_name' />
								<p className='error'>{errors.bussiness_name?.message}</p>
								<input
									type='text'
									id='bussiness_name'
									className='input'
									placeholder='Nombre de la empresa / Organización'
									{...register('bussiness_name', { required: true })}
								/>
								<label htmlFor='correo' />
								<p className='error'>{errors.email?.message}</p>
								<input
									type='email'
									id='correo'
									className='input'
									placeholder='Correo electrónico empresarial'
									{...register('email', { required: true })}
								/>
								<p className='error'>{errors.type_id?.message}</p>
								<select
									id='tipo-org'
									className='input'
									{...register('type_id', { required: true })}
								>
									<option disabled selected>
										Selecciona tu tipo de organizacion
									</option>
									{optionsOrg.map(option => {
										return (
											<option key={option.value} value={option.value}>
												{option.label}
											</option>
										);
									})}
								</select>
								<label htmlFor='web_profile' />
								<p className='error'>{errors.web_profile?.message}</p>
								<input
									type='text'
									id='web_profile'
									className='input'
									placeholder='¿Cuál es tu sitio web?'
									{...register('web_profile', { required: true })}
								/>
								<label htmlFor='mensaje' />
								<p className='error'>{errors.location?.message}</p>
								<Controller
									name='location'
									control={control}
									render={({ field }) => (
										<GooglePlacesAutocomplete
											selectProps={{
												...field,
												styles: {
													input: provided => ({
														...provided,
														height: '40px',
													}),
													container: provided => ({
														...provided,
														width: '100%',
														marginBottom: '5%',
													}),
													control: provided => ({
														...provided,
														background: '#ffffff',
														appearance: 'inherit',
														outline: 'none',
														borderBottomStyle: 'none',
														border: 'inherit',
														boxShadow:
															'1px 1px 2px rgba(255, 255, 255, 0.3), -1px -1px 2px rgba(224, 225, 227, 0.5), inset -7px 7px 14px rgba(224, 225, 227, 0.2), inset 7px -7px 14px rgba(224, 225, 227, 0.2), inset -7px -7px 14px rgba(255, 255, 255, 0.9), inset 7px 7px 18px rgba(224, 225, 227, 0.9)',
														borderRadius: '10px',
														color: '#253135',
														fontSize: '16px',
														fontWeight: '400',
														paddingLeft: '2%',
													}),
												},
											}}
											apiKey='AIzaSyBhRHxxf25ibvleBZsIuDPDycfn9lCLxZ0'
										/>
									)}
								/>

								<textarea
									id='mensaje'
									className='input-text'
									placeholder='Mensaje'
									defaultValue={demo ? 'Quiero solicitar una demo' : ''}
									cols={80}
									rows={8}
									{...register('about_us', {
										required: true,
										minLength: {
											value: 4,
											message: 'el minimo de letras es de 4',
										},
									})}
								/>
								<Box className={'box-btn-usar-plataforma'}>
									<button
										onClick={handleSubmit(onSubmit)}
										className='btn-usar-plataforma'
										disabled={btnDisabled}
									>
										Registrarme gratis
									</button>
								</Box>
							</Box>
						)}
						{res && (
							<Paper elevation={3}>
								<Alert variant='filled' severity='success'>
									<AlertTitle>Registro exitoso</AlertTitle>
								</Alert>
								<p className='succes-message'>
									En las próximas 48 hs recibira un mail de confirmación o un
									representante se contactara con usted.
									<br />
									<br /> Gracias por querer ser parte de la comunidad Fonselp.
								</p>
							</Paper>
						)}
					</Box>
				</Box>
				<a
					href='https://wa.me/17862737853'
					className='whatsapp_float'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img
						src={wpIcon}
						alt='haga click para comunicarse con Fonselp por whatsapp'
						className='whatsapp-icon'
					/>
				</a>
			</div>
		</Box>
	);
};

const Registrate = React.forwardRef(RegistrateComponent);

export default Registrate;
