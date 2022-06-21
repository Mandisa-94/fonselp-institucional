import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';

const Dropdown = ({ data, onClickRefAlianzas, onClickRefFonselp }) => {
	const { title, pages } = data;

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const scrollEffect = targetRef => {
		targetRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	};

	return (
		<div>
			<Button
				sx={{ my: 2, ml: 1, display: 'block', borderRadius: '30px' }}
				size='medium'
				id='fade-button'
				aria-controls={open ? 'fade-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				{title}
			</Button>
			<Menu
				id='fade-menu'
				MenuListProps={{
					'aria-labelledby': 'fade-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				TransitionComponent={Fade}
			>
				{pages?.map((page, index) => (
					<MenuItem key={`${page.title}-${index}`}>
						{page.title === 'Alianzas' ? (
							<Link
								onClick={() => {
									handleClose();
									setTimeout(() => scrollEffect(onClickRefAlianzas), 100);
								}}
								color='inherit'
								underline='none'
							>
								{page.title}
							</Link>
						) : (
							<Link
								onClick={() => {
									handleClose();
									setTimeout(() => scrollEffect(onClickRefFonselp), 100);
								}}
								color='inherit'
								underline='none'
							>
								{page.title}
							</Link>
						)}
					</MenuItem>
				))}
			</Menu>
		</div>
	);
};

export default Dropdown;
