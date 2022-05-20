import React from 'react'
import { Box } from '@mui/material'
import "../scss/Main.scss";
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const SoyOng = React.forwardRef((props,myref) => {
    return (
        <Box 
            ref={  myref }
            display={'flex'} 
            flexDirection={'column'} 
            justifyContent={'center'} 
            alignItems={'center'} 
            className={'container'}
        >
            <Box className={'titleBox'}>
                <p className='titleBox_intro paragraph-s'>Soy ong</p>
                <h2 className='titleBox_intro_title subtitle'>Conectamos ONG con empresas que puedan apoyar tu causa</h2>
                <p className=' titleBox_intro_title_text text'>Potencia el impacto social de tu organización con nuestra plataforma gratuita dándole visibilidad a tu organizacion con empresas de toda latinoamérica. Gestiona el ciclo de voluntariado minimizando el tiempo de tu equipo de RSE desde un abono mensual.</p>
            </Box>
            <Box className={'boxCards'}>
                <Box className={'boxGratisOng'}>
                    <h3 className={'h3 boxGratisOng_title'}>Conectar con empresas</h3>
                    <Box className={'boxGratisOng_title_description'}>
                        <Box display={'flex'} textAlign={'left'} className={'boxIcon'}>
                            <CheckOutlinedIcon className='check-blue' />
                            <p className={'text'}>Acceder a una plataforma que centraliza ofrecimientos y donaciones en especie de empresas.</p>
                        </Box>
                        <Box display={'flex'} textAlign={'left'} className={'boxIcon'}>
                            <CheckOutlinedIcon className='check-blue' />
                            <p className={'text'}>Publicar tus necesidades.</p>
                        </Box>
                        <Box display={'flex'} textAlign={'left'} className={'boxIcon'}>
                            <CheckOutlinedIcon className='check-blue' />
                            <p className={'text'}>Ofertar los productos y servicios de tu emprendimiento social.</p>
                        </Box>
                    </Box>
                    <Box>
                        <button className={'btn-usar-plataforma btn-gratis'}>Usar plataforma gratuita</button>
                    </Box>
                </Box>

                <Box className={'boxPagoOng'}>
                    <h3 className={'boxPagoOng_title'}>Voluntariado</h3>
                    <Box className={'boxPagoOng_title_description'}>
                        <Box display={'flex'} textAlign={'left'} className={'boxIcon'}>
                            <CheckOutlinedIcon className='check-white' />
                            <p className={'text-w'}>Emitir los acuerdos de voluntariado.</p>
                        </Box>
                        <Box display={'flex'} textAlign={'left'} className={'boxIcon'}>
                            <CheckOutlinedIcon className='check-white' />
                            <p className={'text-w'}>Gestionar las horas dedicadas por cada voluntario y reconocer su labor social.</p>
                        </Box>
                        <Box display={'flex'} textAlign={'left'} className={'boxIcon'}>
                            <CheckOutlinedIcon className='check-white' />
                            <p className={'text-w'}>Obtener reportes detallados.</p>
                        </Box>
                    </Box>
                    <Box>
                        <button className={"btn-usar-plataforma_blue btn-pago"}>Comenzar prueba gratuita</button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
})

export default SoyOng