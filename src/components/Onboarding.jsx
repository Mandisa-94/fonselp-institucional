import React from 'react'
import  "../scss/Main.scss";
import { Box } from '@mui/system'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';



function Onboarding  ({showModal, setShowModal}) {
   

    return (
        <Box className='modal'>
        
        {showModal ? 
                <Box display={'flex'} justifyContent={'space-around'} margin={'2%'}>
                    <div>
                        <img src="../assets/Onboarding-1.png" alt="" />
                    </div>
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                        <Box display={'flex'} width={'100%'} justifyContent={'end'} marginBottom={'20%'}>
                            <CloseOutlinedIcon/>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} height={'100%'}>
                            <Box className='steps'>
                                <p>1</p>
                            </Box>
                            <Box marginTop={'10%'} marginBottom={'10%'}>
                                <p>Registrate gratis en menos de 1 minuto</p>
                            </Box>
                            <Box>
                                <ArrowForwardOutlinedIcon/>
                            </Box> 
                        </Box>
                    </Box>
                    
                </Box>
                
             
        : null
        }
       </Box>
      )
  }

  export default Onboarding