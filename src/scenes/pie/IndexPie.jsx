import React from 'react'
import Header from '../../components/Header'
import PieChart from '../../components/PieChart'
import { Box } from '@mui/material'
import { useTheme } from '@mui/material'

const IndexPie = () => {
  return (
    <Box>
        <Header title='Pie Chart' subTitle='Simple Pie Chart' />

        <Box height='75vh'>
            <PieChart />
        </Box>
    </Box>
  )
}

export default IndexPie