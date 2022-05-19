import React from 'react'
import { Container, Link } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer>
        <Box 
            px={{ xs:2, sm:5}}
            py={{  xs:4, sm:5 }}
            sx={{ marginTop:'20px', padding:'20px', background: 'linear-gradient(113.98deg, #3D68E3 10.35%, rgba(62, 106, 231, 0.55) 151.98%);' }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                        <Box marginBottom={2}>
                            <img 
                                src="../assets/FONSELP_BLUE_TRANSBG.png" 
                                alt="Logo fonselp" 
                                style={{ width: '190px'}}
                            />
                            <p style={{ color:'#FFFFFF'}}>
                                Fonselp opera en Argentina a través de Res Non Verba Asociación Civil, en Colombia a través de Fundación Casa Cívica y en México a través Tecnología sin fines de Lucro AC.
                            </p>
                        </Box>
                        <Box>
                            <Link underline="none"
                                color="#FFFFFF"
                                href="/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FacebookIcon sx={{ color:'white', fontSize:"30px", marginRight:'10px' }}></FacebookIcon>
                            </Link>
                            <Link underline="none"
                                color="#FFFFFF"
                                href="/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <TwitterIcon  sx={{ color:'white',  fontSize:"30px", marginRight:'10px' }}></TwitterIcon>
                            </Link>
                            <Link underline="none"
                                color="#FFFFFF"
                                href="/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <LinkedInIcon  sx={{ color:'white',  fontSize:"30px" }}></LinkedInIcon>
                            </Link>
                            
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Box marginBottom={3} sx={{display: 'flex', justifyContent: 'center' }}>
                            <h2 style={{ color:'#FFFFFF'}}>Navegación</h2>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }} >
                            <Grid container >
                                <Grid item xs={12} sm={6}  >
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Link  
                                            underline="none"
                                            color="#FFFFFF"
                                            href="/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <p style={{ marginBottom:'8px' }}>¿Cómo funciona?</p>
                                        </Link>
                                        <Link  underline="none"
                                            color="#FFFFFF"
                                            href="/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                                <p style={{ marginBottom:'8px' }}>Sobre Fonselp</p>
                                        </Link>
                                        <Link  underline="none"
                                            color="#FFFFFF"
                                            href="/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <p style={{ marginBottom:'8px' }}>Alianzas</p>
                                        </Link>
                                        <Link  underline="none"
                                            color="#FFFFFF"
                                            href="/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <p style={{ marginBottom:'8px' }}>Testimonios</p>
                                        </Link>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}  >
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Link  underline="none"
                                            color="#FFFFFF"
                                            href="/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <p style={{ marginBottom:'8px' }}>Soy empresa</p>
                                        </Link>
                                        <Link  underline="none"
                                            color="#FFFFFF"
                                            href="/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                                <p style={{ marginBottom:'8px' }}>Soy ONG</p>
                                        </Link>
                                        <Link  underline="none"
                                            color="#FFFFFF"
                                            href="/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                                <p style={{ marginBottom:'8px' }}>Regístrate gratis</p>
                                        </Link>
                                        <Link  underline="none"
                                            color="#FFFFFF"
                                            href="/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                                <p style={{ marginBottom:'8px' }}>Probar app prémium</p>
                                        </Link>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </footer>
  )
}

export default Footer