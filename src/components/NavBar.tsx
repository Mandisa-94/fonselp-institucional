import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Dropdown from './helper/Dropdown';
import { Link } from '@mui/material';

interface PagesObj {
  [key: string]: any;
}

type Section = {
    title: string,
    pages: PagesObj[]
  }

const colabora: Section = {
  title: 'Colabora',
  pages: [
    {
      title:'Voluntariado',
      link: "https://www.civic.house/contact"
    }, 
    {
      title:'Donar',
      link:"https://donaronline.org/fonselp-org/suma-tu-apoyo-tu-aporte-a-fonselp-nos-ayuda-a-generar-que-mas-instituciones-se-sumen-a-colaborar-con-sus-propias-comunidades"
    }
  ],
}

const acercaDe: Section = {
  title: 'Acerca de',
  pages: [
    {
      title:'Fonselp',
      link: '',
      
    }, 
    {
      title:'Alianzas',
      link:''
    },{
      title:'Testimonios',
      link: ''
    }
  ],
}

const NavBar = ({onClickRefEmpresaOng}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const scrollEffect = ( targetRef ) =>{
    targetRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: '#F9FAFC' }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', md: 'flex' }, }}
          >
             <img src="../assets/FONSELP_BLUE_TRANSBG.png" alt="Logo fonselp" style={{ width: '200px'}}/>

          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', color: '#253135'} }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">¿Cómo funciona?</Typography>
                  <Typography textAlign="center">Acerca de</Typography>
                  <Typography textAlign="center">Iniciar Sesión</Typography>

                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
           <img src="../assets/FONSELP_BLUE_TRANSBG.png" alt="Logo fonselp" style={{ width: '200px'}}/>

          </Typography>
          <Box sx={{ flexGrow: 3, display: { ml: '2', xs: 'none', md: 'flex', justifyContent: 'flex-end' }}}>
            
            <Button
              onClick={()=>scrollEffect(onClickRefEmpresaOng)}
              sx={{ my: 2,  ml: 1, color: '#253135', display: 'block', borderRadius: '30px'}}
            >
              ¿Cómo funciona?
            </Button>

           
            <Dropdown data={acercaDe}/>


            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2,  ml: 1, color: '#253135', display: 'block', borderRadius: '30px'}}
            >
              <Link
                    underline="none"
                    color="inherit"
                    href="https://app.fonselp.com/login"
                    target="_blank"
                    rel="noreferrer"
                >
                      Iniciar Sesión
                </Link>
              
            </Button>


            <Button variant="contained" sx={{ my: 2, ml: 1, display: 'block', borderRadius: '30px'}} size="medium">
            
              <Link
                    underline="none"
                    color="inherit"
                    href="https://app.fonselp.com/sumarse#form"
                    target="_blank"
                    rel="noreferrer"
              >
                  Regístrate gratis
              </Link>
              
            </Button>

          
            <Dropdown data={colabora}/>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;

