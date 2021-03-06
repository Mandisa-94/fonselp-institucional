import React, { ForwardedRef, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Alert } from '@mui/material';
import { Box } from '@mui/system';
import { SubmitHandler, useForm } from 'react-hook-form';
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
});

const RegistrateComponent = (
	{ demo }: { demo: boolean },
	// eslint-disable-next-line comma-dangle
	myref: ForwardedRef<HTMLDivElement>
) => {
	const [res, setRes] = useState(false);
	const {
		register,
		handleSubmit,
		// watch,
		formState: { errors },
	} = useForm<Inputs>({ resolver: yupResolver(schema), mode: 'onBlur' });
	const onSubmit: SubmitHandler<Inputs> = async data => {
		setRes(false);
		await apiCall('resgiterEntity', data, 'POST');
		setRes(true);
		// Meta adds
		fbq('track', 'Lead');
	};

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
							<label htmlFor='tipo-org' />
							<p className='error'>{errors.type_id?.message}</p>
							<input
								type='text'
								id='tipo-org'
								className='input'
								placeholder='¿Qué tipo de organización eres?'
								{...register('type_id', { required: true })}
							/>
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
							<p className='error'>{errors.about_us?.message}</p>
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
								>
									Registrarme gratis
								</button>
							</Box>
							{res && (
								<Box mt={'5%'}>
									<Alert variant='filled' severity='success'>
										Registro exitoso
									</Alert>
								</Box>
							)}
						</Box>
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

function fbq(arg0: string, arg1: string) {
	console.log('fbq', arg0, arg1);
}
