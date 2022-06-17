import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/system';
import { SubmitHandler, useForm } from 'react-hook-form';
import { object, string } from 'yup';
import '../scss/Main.scss';

type Inputs = {
	nombre: string;
	exampleRequired: string;
	empresa: string;
	email: string;
	tipoOrganizacion: string;
	mensaje: string;
};

const schema = object({
	nombre: string().required('por favor escriba su nombre'),
	empresa: string().required('por favor escriba el nombre de su empresa'),
	email: string()
		.email('el correo debe tener este formato ejemplo@correo.com')
		.required('Por favor escriba su correo'),
	tipoOrganizacion: string().required(
		'Por favor indique el tipo de organización'
	),
	mensaje: string().required('Por favor escriba su mensaje'),
});

const Registrate = () => {
	const {
		register,
		handleSubmit,
		// watch,
		formState: { errors },
	} = useForm<Inputs>({ resolver: yupResolver(schema), mode: 'onBlur' });
	const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

	return (
		<Box
			display={'flex'}
			justifyContent={'center'}
			alignItems={'center'}
			className={'container-auto'}
		>
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
							Si quieres saber más sobre el voluntariado corporativo, solicitar
							una demo o tienes alguna duda, puedes llenar el formulario o
							escribirnos a contacto@fonselp.org y con gusto te responderemos.
						</p>
					</Box>
					<Box
						display={'flex'}
						justifyContent={'center'}
						alignItems={'center'}
						flexDirection={'column'}
						mt={'4%'}
					>
						<label htmlFor='nombre'>
							<p className='error'>{errors.nombre?.message}</p>
						</label>
						<input
							type='text'
							id='nombre'
							className='input'
							placeholder='Nombre y apellido'
							{...register('nombre', { required: true })}
						/>

						<label htmlFor='empresa'></label>
						<p className='error'>{errors.empresa?.message}</p>
						<input
							type='text'
							id='empresa'
							className='input'
							placeholder='Nombre de la empresa / Organización'
							{...register('empresa', { required: true })}
						/>
						<label htmlFor='correo'></label>
						<p className='error'>{errors.email?.message}</p>
						<input
							type='email'
							id='correo'
							className='input'
							placeholder='Correo electrónico empresarial'
							{...register('email', { required: true })}
						/>
						<label htmlFor='tipo-org'></label>
						<p className='error'>{errors.tipoOrganizacion?.message}</p>
						<input
							type='text'
							id='tipo-org'
							className='input'
							placeholder='¿Qué tipo de organización eres?'
							{...register('tipoOrganizacion', { required: true })}
						/>
						<label htmlFor='mensaje'></label>
						<p className='error'>{errors.mensaje?.message}</p>
						<textarea
							id='mensaje'
							className='input-text'
							placeholder='Mensaje'
							cols={80}
							rows={8}
							{...register('mensaje', {
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
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Registrate;
