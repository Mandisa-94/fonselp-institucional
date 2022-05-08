import React from 'react'
import  "../scss/Main.scss";
import { Box } from '@mui/material';

function Presentation() {
  return (
    // <div >
        <Box gap={2} display="flex" mt={'8%'} className='container'>
          <div item sx={12} md={8} lg={10} xl={10}>
            <h1 className='title'>
              Soluciones para facilitar el impacto social de las empresas
            </h1>
            <p className='title_p paragraph'>
              Fonselp es la plataforma ideal para donar, realizar compras responsables, compartir el conocimiento de tus equipos, o conectar con organizaciones que están cambiando el mundo.
            </p>
            <button className='btn-registrate'>
              Registrate gratis
            </button>
          </div>
          <div item sx={12} md={4} lg={2} xl={2}>
            <img src="../assets/image-hero.png" alt=" Ilustracion para soluciones que facilitan el impacto social de las empresas" className='img-hero'/>
          </div>
        </Box>
  // </div>
  )
}

export default Presentation