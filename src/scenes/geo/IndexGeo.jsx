import React from 'react'
import Header from '../../components/Header'
import GeoChart from '../../components/GeoChart'
import { Box } from '@mui/material'
import { useTheme } from '@mui/material'
import { tokens } from '../../theme'

const IndexGeo = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box m='10px'>
        <Header title='GEO Chart' subtitle='Simple Geo Chart' />

        <Box height='75vh' border={`1px solid ${colors.gray[100]}`} borderRadius='4px'>
            <GeoChart />
        </Box>
    </Box>
  )
}

export default IndexGeo