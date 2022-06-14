import MenuIcon from '@mui/icons-material/Menu';
import {
	Drawer,
	Link,
	ListItem,
	ListItemButton,
	ListItemText
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { scrollEffect } from '../utils/helper';
import Dropdown from './helper-components/Dropdown';

interface PagesObj {
	[key: string]: any;
}

type Section = {
	title: string;
	pages: PagesObj[];
};

const colabora: Section = {
	title: 'Colabora',
	pages: [
		{
			title: 'Voluntariado',
			link: 'https://www.civic.house/contact',
		},
		{
			title: 'Donar',
			link: 'https://donaronline.org/fonselp-org/suma-tu-apoyo-tu-aporte-a-fonselp-nos-ayuda-a-generar-que-mas-instituciones-se-sumen-a-colaborar-con-sus-propias-comunidades',
		},
	],
};

const acercaDe: Section = {
	title: 'Acerca de',
	pages: [
		{
			title: 'Fonselp',
			link: '',
		},
		{
			title: 'Alianzas',
			link: '',
		},
		{
			title: 'Testimonios',
			link: '',
		},
	],
};

const NavBar = ({ onClickRefEmpresaOng, onClickRefAlianzas }) => {
	const [state, setState] = React.useState(false);
	const toggleDrawer = () => {
		setState(!state);
	};

	return (
		<AppBar position='static' sx={{ backgroundColor: '#F9FAFC' }}>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{ display: { xs: 'none', md: 'flex' } }}
					>
						<img
							src='../assets/FONSELP_BLUE_TRANSBG.png'
							alt='Logo fonselp'
							style={{ width: '200px' }}
						/>
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'flex', md: 'none', color: '#253135' },
						}}
					>
						<IconButton size='large' onClick={toggleDrawer} color='inherit'>
							<MenuIcon />
						</IconButton>
						<Drawer
							anchor='left'
							open={state}
							onClose={toggleDrawer}
							PaperProps={{
								sx: {
									background: 'linear-gradient(#3D68E3, rgba(62, 106, 231))',
									color: 'white',
								},
							}}
						>
							<ListItem
								onClick={() => {
									toggleDrawer();
									setTimeout(() => scrollEffect(onClickRefEmpresaOng), 100);
								}}
							>
								<ListItemButton>
									<ListItemText primary='¿Cómo funciona?' />
								</ListItemButton>
							</ListItem>
							<ListItem
								onClick={() => {
									toggleDrawer();
								}}
							>
								<ListItemButton>
									<ListItemText primary='Acerca de' />
								</ListItemButton>
							</ListItem>
							<ListItem
								onClick={() => {
									toggleDrawer();
								}}
							>
								<ListItemButton>
									<Link
										className='navbar-burguer'
										underline='none'
										color='inherit'
										href='https://app.fonselp.com/login'
										target='_blank'
										rel='noreferrer'
									>
										<ListItemText primary='Iniciar sesión' />
									</Link>
								</ListItemButton>
							</ListItem>
						</Drawer>
					</Box>
					<Typography
						variant='h6'
						noWrap
						component='div'
						paddingRight={3}
						sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
					>
						<img
							src='../assets/FONSELP_BLUE_TRANSBG.png'
							alt='Logo fonselp'
							style={{ width: '200px' }}
						/>
					</Typography>
					<Box
						sx={{
							flexGrow: 3,
							display: {
								ml: '2',
								xs: 'none',
								md: 'flex',
								justifyContent: 'flex-end',
							},
						}}
					>
						<Button
							onClick={() => scrollEffect(onClickRefEmpresaOng)}
							sx={{
								my: 2,
								ml: 1,
								color: '#253135',
								display: 'block',
								borderRadius: '30px',
							}}
						>
							¿Cómo funciona?
						</Button>

						<Dropdown data={acercaDe} onClickRefAlianzas={onClickRefAlianzas} />

						<Button
							sx={{
								my: 2,
								ml: 1,
								color: '#253135',
								display: 'block',
								borderRadius: '30px',
							}}
						>
							<Link
								underline='none'
								color='inherit'
								href='https://app.fonselp.com/login'
								target='_blank'
								rel='noreferrer'
							>
								Iniciar Sesión
							</Link>
						</Button>

						<Button
							variant='contained'
							sx={{ my: 2, ml: 1, display: 'block', borderRadius: '30px' }}
							size='medium'
						>
							<Link
								underline='none'
								color='inherit'
								href='https://app.fonselp.com/sumarse#form'
								target='_blank'
								rel='noreferrer'
							>
								Regístrate gratis
							</Link>
						</Button>

						<Dropdown data={colabora} onClickRefAlianzas={onClickRefAlianzas} />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default NavBar;
