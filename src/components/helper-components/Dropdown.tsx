import * as React from 'react';

import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { scrollEffect } from '../../utils/helper';

interface PagesObj {
	title: string;
	link: string;
}

type Section = {
	title: string;
	pages: PagesObj[];
};

type Props = {
	data: Section;
	onClickRefAlianzas: React.MutableRefObject<HTMLDivElement>;
	onClickRefFonselp: React.MutableRefObject<HTMLDivElement>;
};

const Dropdown = ({ data, onClickRefAlianzas, onClickRefFonselp }: Props) => {
	const { title, pages } = data;

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
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
				{pages
					?.filter(page => page.link === '')
					.map((page, index) => (
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
				{pages
					?.filter(page => page.link !== '')
					.map((page, index) => (
						<MenuItem key={`${page.title}-${index}`}>
							<Link
								underline='none'
								color='inherit'
								href={page.link}
								target='_blank'
								rel='noreferrer'
							>
								{page.title}
							</Link>
						</MenuItem>
					))}
			</Menu>
		</div>
	);
};

export default Dropdown;
