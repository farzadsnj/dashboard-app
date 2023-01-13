import React from 'react'
import { Box, useTheme, Typography } from '@mui/material'
import Header from '../../components/Header'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme'

const IndexFAQ = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

  return (
    <Box m='20px'>
        <Header title='FAQ' subTitle='Most Frequent Questions' />
        
        <Accordion sx={{marginBottom: '10px'}} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An important question 1
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magnam accusantium rerum soluta doloremque ducimus, harum ratione illum magni. Numquam illo explicabo eum officiis possimus eligendi temporibus minima, provident maxime.
            </AccordionDetails>
        </Accordion>
        <Accordion sx={{marginBottom: '10px'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An important question 2
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magnam accusantium rerum soluta doloremque ducimus, harum ratione illum magni. Numquam illo explicabo eum officiis possimus eligendi temporibus minima, provident maxime.
            </AccordionDetails>
        </Accordion>
        <Accordion sx={{marginBottom: '10px'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An important question 3
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magnam accusantium rerum soluta doloremque ducimus, harum ratione illum magni. Numquam illo explicabo eum officiis possimus eligendi temporibus minima, provident maxime.
            </AccordionDetails>
        </Accordion>
    </Box>
  )
}

export default IndexFAQ