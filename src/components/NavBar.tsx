import React, { MutableRefObject } from 'react';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import MenuIcon from '@mui/icons-material/Menu';
import StarBorder from '@mui/icons-material/StarBorder';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import {
	Collapse,
	Drawer,
	Link,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { scrollEffect } from '../utils/helper';
import Dropdown from './helper-components/Dropdown';

interface PagesObj {
	title: string;
	link: string;
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
			link: 'https://www.idealist.org/es/ong/789953ec14f444acb11f2614d342320e-fonselporg-dcv',
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
	],
};

type Props = {
	onClickRefEmpresaOng: MutableRefObject<HTMLDivElement>;
	onClickRefFonselp: MutableRefObject<HTMLDivElement>;
	onClickRefAlianzas: MutableRefObject<HTMLDivElement>;
	onClickRefRegister: MutableRefObject<HTMLDivElement>;
};

interface Collapse {
	// 👇️ key         value
	[key: number]: boolean;
}

const NavBar = ({
	onClickRefEmpresaOng,
	onClickRefAlianzas,
	onClickRefRegister,
	onClickRefFonselp,
}: Props) => {
	const [state, setState] = React.useState(false);
	const [openCollapse, setOpenCollapse] = React.useState<Collapse>({});

	const handleClickCollapse = (id: number) => {
		setOpenCollapse(prevState => ({ ...prevState, [id]: !prevState[id] }));
	};

	const toggleDrawer = () => {
		setState(prevState => !prevState);
	};

	console.log(openCollapse);

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
									width: '65%',
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
							<ListItem>
								<ListItemButton onClick={() => handleClickCollapse(1)}>
									<ListItemText primary='Acerca de' />
									{openCollapse[1] ? <ExpandLess /> : <ExpandMore />}
								</ListItemButton>
							</ListItem>
							<Collapse in={openCollapse[1]} timeout='auto' unmountOnExit>
								<List key={1} component='div' disablePadding>
									<ListItemButton
										sx={{ pl: 4 }}
										onClick={() => {
											toggleDrawer();
											setTimeout(() => scrollEffect(onClickRefFonselp), 100);
										}}
									>
										<ListItemIcon>
											<StarBorder sx={{ color: 'white' }} />
										</ListItemIcon>
										<ListItemText primary='Fonselp' />
									</ListItemButton>
									<ListItemButton
										sx={{ pl: 4 }}
										onClick={() => {
											toggleDrawer();
											setTimeout(() => scrollEffect(onClickRefAlianzas), 100);
										}}
									>
										<ListItemIcon>
											<GroupsRoundedIcon sx={{ color: 'white' }} />
										</ListItemIcon>
										<ListItemText primary='Alianzas' />
									</ListItemButton>
								</List>
							</Collapse>
							<ListItem>
								<ListItemButton onClick={() => handleClickCollapse(2)}>
									<ListItemText primary='Colabora' />
									{openCollapse[2] ? <ExpandLess /> : <ExpandMore />}
								</ListItemButton>
							</ListItem>
							<Collapse in={openCollapse[2]} timeout='auto' unmountOnExit>
								<List key={2} component='div' disablePadding>
									<ListItemButton sx={{ pl: 4 }}>
										<ListItemIcon>
											<WorkspacePremiumRoundedIcon sx={{ color: 'white' }} />
										</ListItemIcon>
										<Link
											className='navbar-burguer'
											underline='none'
											color='inherit'
											href='https://www.idealist.org/es/ong/789953ec14f444acb11f2614d342320e-fonselporg-dcv'
											target='_blank'
											rel='noreferrer'
										>
											<ListItemText primary='Voluntariado' />
										</Link>
									</ListItemButton>
									<ListItemButton sx={{ pl: 4 }}>
										<ListItemIcon>
											<VolunteerActivismRoundedIcon sx={{ color: 'white' }} />
										</ListItemIcon>
										<Link
											className='navbar-burguer'
											underline='none'
											color='inherit'
											href='https://donaronline.org/fonselp-org/suma-tu-apoyo-tu-aporte-a-fonselp-nos-ayuda-a-generar-que-mas-instituciones-se-sumen-a-colaborar-con-sus-propias-comunidades'
											target='_blank'
											rel='noreferrer'
										>
											<ListItemText primary='Donar' />
										</Link>
									</ListItemButton>
								</List>
							</Collapse>
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
							<ListItem
								onClick={() => {
									toggleDrawer();
									setTimeout(() => scrollEffect(onClickRefRegister), 100);
								}}
								sx={{
									width: '60%',
								}}
							>
								<ListItemButton
									sx={{
										padding: '2% 0px 2% 0px',
										background: 'white',
										color: '#3D68E3',
										borderRadius: '15px',
										boxShadow:
											'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
										textAlign: 'center',
										cursor: 'pointer',
									}}
								>
									<ListItemText primary='Registrarme' />
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

						<Dropdown
							data={acercaDe}
							onClickRefAlianzas={onClickRefAlianzas}
							onClickRefFonselp={onClickRefFonselp}
						/>

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
								onClick={() => scrollEffect(onClickRefRegister)}
								style={{ cursor: 'pointer' }}
							>
								Regístrate gratis
							</Link>
						</Button>

						<Dropdown
							data={colabora}
							onClickRefAlianzas={onClickRefAlianzas}
							onClickRefFonselp={onClickRefFonselp}
						/>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default NavBar;
