import React from 'react'
import Box from '@material-ui/core/Box'
import Calendar from './Calendar'

export default function Community(){
    return(
        <Box style={{width:"100%", height:"100%", display:"flex", flexDirection:"row", justifyContent:"space-around", margin:"88px 32px 0 32px"}}>
            <Calendar/>
        </Box>
    );
}