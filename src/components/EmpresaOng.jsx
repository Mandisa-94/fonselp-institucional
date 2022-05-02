import React from 'react'
import { Box } from '@mui/material';
import  "../scss/Main.scss";

function EmpresaOng() {
  return (
        <Box className='container-slice'  display="flex">
            <Box display="flex" flexDirection={'column'} textAlign={'center'} alignItems={'flex-start'}>
                <p className='paragraph-s'>¿Cómo funciona?</p>
                <h2 className='paragraph-s_title subtitle'>Somos el espacio de encuentro entre las empresas y el sector social</h2>
                <Box display="flex" mt={'4%'}>
                    <button className='btn-soy margin-right'>
                        Soy empresa
                    </button>
                    <button className='btn-soy'>
                        Soy ong
                    </button>
                </Box>
            </Box>
            
            <Box alignItems={'flex-start'}>
                <img src="../assets/image-intro.png" alt="Ilustracion para encuentro entre empresas y sector social" className='img-intro'/>
            </Box>
        </Box>
  )
}

export default EmpresaOng