import React from 'react'
import Header from '../../components/Header'
import BarChart from '../../components/BarChart'
import { Box } from '@mui/material'

const IndexBar = () => {
  return (
    <Box m='20px'>
        <Header title='Bar Chart' subTitle='Simple bar chart' />

        <Box height='75vh'>
            <BarChart />
        </Box>
    </Box>
  )
}

export default IndexBar