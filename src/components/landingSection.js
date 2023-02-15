import '../App.css';
import React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import styled from 'styled-components';
import { OptimaType } from '../styles/globalStyles';

const GridItem = styled(Grid)({
    display: 'flex',
    flexBasis: '50%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
})

const OptimaFont = styled('p')({
    fontFamily: 'OptimaLight',
    lineHeight: 1,
    margin: 0
});

const HelveticaFont = styled('p')({
    fontFamily: 'Helvetica',
    margin: 0,
});

const ColorButton = styled(Button)(({ theme }) => ({
    width: "30%",
    backgroundColor: "#8B5E3C !important",
    '&:hover': {
        backgroundColor: "red !important",
    },
}));

function LandingSection() {
    return (
        <Grid container direction="row" display="flex" width="100%" sx={{ mb: 4 }}>
            <GridItem item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ marginY: 10 }}>
                <Grid container direction="column" display="flex" height="100%">
                    <OptimaType className="optima" variant="h3" style={{ fontSize: 60 }}>
                        Healing Hands, Tranquil Minds
                    </OptimaType>
                    <OptimaType>
                        Oasis
                    </OptimaType>
                    <Typography variant="h6" style={{ fontSize: 30 }}>
                        <OptimaFont>
                            Oasis Massage Therapy
                        </OptimaFont>
                    </Typography>
                    <div style={{ height: 40 }} />
                    <ColorButton variant="contained" size="large">
                        <HelveticaFont>Book Now</HelveticaFont>
                    </ColorButton>
                </Grid>
            </GridItem>
            <GridItem item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ backgroundColor: "" }}>
                <img src={process.env.PUBLIC_URL + '/massage.jpg'} alt="Placeholder alt text" width="100%" />
            </GridItem>
        </Grid>
    )
}

export default LandingSection
