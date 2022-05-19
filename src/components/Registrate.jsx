import React from 'react'
import { Box } from '@mui/system'
import "../scss/Main.scss";

function Registrate() {
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} className={'container'}>
            <Box className={'box-form'} display={'flex'}>
                <Box className={'box-form_img'}>
                    <img src="../assets/image-form.png" alt="" />
                </Box>
                <Box className={'box-form_inputs'}>
                    <Box className={'titleBox'}>
                        <p className='titleBox_intro paragraph-s'>Regístrate</p>
                        <h2 className='titleBox_intro_title subtitle'>Un mundo mejor se está construyendo, sé parte</h2>
                        <p className=' titleBox_intro_title_text text'>Si quieres saber más sobre el voluntariado corporativo, solicitar una demo o tienes alguna duda puedes llenar el formulario o escribiéndonos a contacto@fonselp.org y con gusto te responderemos.</p>
                    </Box>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} mt={'4%'}>
                        <label htmlFor="nombre"></label>
                        <input type="text" id='nombre' className='input' placeholder='Nombre y apellido' />
                        <label htmlFor="empresa"></label>
                        <input type="text" id='empresa' className='input' placeholder='Nombre de la empresa / Organización' />
                        <label htmlFor="correo"></label>
                        <input type="email" id='correo' className='input' placeholder='Correo electrónico empresarial' />
                        <label htmlFor="tipo-org"></label>
                        <input type="text" id='tipo-org' className='input' placeholder='¿Qué tipo de organización eres?' />
                        <label htmlFor="mensaje"></label>
                        <input type="text" id='mensaje' className='input' placeholder='Mensaje' rows={'10'} cols={'50'}/>
                        <Box>
                            <button className='btn-usar-plataforma'>Registrarme gratis</button>
                        </Box>
                    </Box>
                </Box>
            </Box>


        </Box>
    )
}

export default Registrate