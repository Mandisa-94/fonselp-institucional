import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Link } from '@mui/material';


const Dropdown = ({data}) =>{
    
    const { title, pages } = data;

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
      <div>
        <Button
            sx={{ my: 2, ml: 1, display: 'block', borderRadius: '30px' }} 
            size="medium"
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
          {title}
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
        { pages?.map((page, index) => 
            <MenuItem
                key={`${page.title}-${index}`}
            >
                <Link
                    underline="none"
                    color="inherit"
                    href={page.link && page.link}
                    target={page.link && "_blank"}
                    rel={page.link && "noreferrer"}
                >
                    {page.title}
                </Link>
            </MenuItem>
        )}
        </Menu>
      </div>
        
    )
};

export default Dropdown;