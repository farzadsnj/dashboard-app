import React from 'react'
import { Typography, Box, useTheme } from '@mui/material'
import { tokens } from '../theme'

function Header({title, subTitle}) {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  return (
    <Box mb='30px'>
        <Typography variant='h2' color={colors.gray[100]} fontWeight='bold' sx={{mb: '5px', pl: '10px'}}>{title}</Typography>
        <Typography variant='h5' color={colors.greenAccent[400]} sx={{pl: '15px'}}>{subTitle}</Typography>
    </Box>
  )
}

export default Header