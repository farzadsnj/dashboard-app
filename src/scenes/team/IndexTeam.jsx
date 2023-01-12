import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import {DataGrid} from '@mui/x-data-grid'
import { tokens } from '../../theme'
import {mockDataTeam} from '../../data/MockData'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from '../../components/Header'

const IndexTeam = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const columns = [
        {field: 'id', headerName:'ID'},
        {field: 'name', headerName:'Name', flex: 1, cellClassName: 'name-column-cell'},
        {field: 'age', headerName:'Age', type: 'number', headerAlign: 'left', align: 'left'},
        {field: 'email', headerName:'Email'},
        {field: 'phone', headerName:'Phone'},
    ]

  return (
    <Box>
        <Header title='TEAM' subTitle='Managing the Team Memebers' />
        <Box>
            <DataGrid rows={mockDataTeam} columns={columns} />
        </Box>
    </Box>
  )
}

export default IndexTeam