import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Link } from '@mui/material';


const Dropdown = ({data}) =>{
    
    const { title, sections } = data;

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
            sx={{ my: 2, ml: 1, display: 'block' }} 
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
        { sections?.map((section, index) => 
            <MenuItem
                key={`${section.title}-${index}`}
            >
                <Link
                    underline="none"
                    color="inherit"
                    href={section.link && section.link}
                    target={section.link && "_blank"}
                    rel={section.link && "noreferrer"}
                >
                    {section.title}
                </Link>
            </MenuItem>
        )}
        </Menu>
      </div>
        
    )
};

export default Dropdown;