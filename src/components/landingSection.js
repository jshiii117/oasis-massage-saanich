import '../App.css';
import React from 'react';
import { Typography, Grid, Button, useTheme, useMediaQuery } from '@mui/material';
import styled from 'styled-components';
import { HelveticaType, OptimaType } from '../styles/globalStyles';
import theme from '../styles/theme';

const GridItem = styled(Grid)({
    display: 'flex',
    flexBasis: '50%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
})

const ColorButton = styled(Button)(({ theme }) => ({
    // width: "30%",
    width: 150,
    height: 50,
    backgroundColor: "#8B5E3C !important",
    '&:hover': {
        backgroundColor: "red !important",
    },
}));

function LandingSection() {
    const theme = useTheme();
    
    return (
        <Grid container direction="row" display="flex" alignSelf="center" alignItems="center" width="100%" maxWidth={1000} sx={{ mb: 4, backgroundColor: '' }}>
            <GridItem item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ marginY: 10 }}>
                <Grid container direction="column" display="flex" height="100%" alignItems={useMediaQuery(theme.breakpoints.up('md')) ? '' : 'center'}>
                    <OptimaType className="optima" variant="h3" style={{ fontSize: 60 }}>
                        Healing Hands, <br/>Tranquil Minds.
                    </OptimaType>   
                    <OptimaType className="optima" variant="h6" style={{ fontSize: 30 }}>
                        Oasis Massage Therapy
                    </OptimaType>
                    <div style={{ height: 40 }} />
                    <Grid container direction="row" display="flex" justifyContent={useMediaQuery(theme.breakpoints.up('md')) ? '' : 'center'}>
                    <ColorButton variant="contained" size="large">
                        <HelveticaType >Book Now</HelveticaType>
                    </ColorButton>
                    <div style={{ width: 20 }} />
                    <ColorButton variant="contained" size="large">
                        <HelveticaType >Contact Us</HelveticaType>
                    </ColorButton>
                    </Grid>
                </Grid>
            </GridItem>
            <GridItem item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ backgroundColor: "" }}>
                <img src={process.env.PUBLIC_URL + '/mainDesign.png'} alt="Placeholder alt text" width="80%"  />
            </GridItem>
        </Grid>
    )
}

export default LandingSection
