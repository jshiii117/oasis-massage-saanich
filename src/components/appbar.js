import React from 'react';
import { AppBar, Typography, Toolbar, Box, Grid, Button } from '@mui/material';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import theme from '../styles/theme';
import { OptimaTypography } from '../styles/globalStyles';


const OptimaFont = styled('p')({
    fontFamily: 'OptimaLight',
    lineHeight: 1,
    margin: 0
});

const StyledAppBar = styled(AppBar)(({ isVisible }) => ({
    "&&": {
        height: "12vh",
        backgroundColor: 'white',
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease, background-color 0.5s ease",
        "&:hover": {
            // backgroundColor: "grey",
        },
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
    }
}));

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    // justifyContent: 'space-between',
    justifyContent: 'center',
    alignItems: "center"
});

const AppBarItem = styled(Typography)({
    color: 'black',
    fontSize: 20,
    textTransform: 'none',
    transition: 'color 0.3s linear',
    '&:hover': {
        color: '#A67C52'
    }
});

const AppBarButton = styled(Button)({
    backgroundColor: "transparent"
})

function CustomAppBar() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let timeoutId = null;
        const handleVisibilityChange = () => {
            setIsVisible(false);
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => setIsVisible(true), 300);
        };

        window.addEventListener("scroll", handleVisibilityChange);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("scroll", handleVisibilityChange);
        };
    }, []);

    const [hover, setHover] = useState(false)

    return (
        <StyledAppBar isVisible={isVisible} position='fixed'>
            <StyledToolbar>
                <Box display="flex">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Your image description" style={{ width: 60, height: "auto" }}
                    />
                </Box>
                <Box display="flex" backgroundColor="">
                    <div style={{ width: 20 }} />
                    <Grid container direction="row" justify="space-between">
                        <AppBarButton style={{
                            backgroundColor: 'transparent'
                        }
                        }>
                            <OptimaTypography variant="h8" onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                                style={{
                                    color: hover ? '#A67C52' : 'black',
                                    fontSize: 20,
                                    textTransform: 'none',
                                    transition: 'color 0.3s linear',
                                }}>
                                About
                            </OptimaTypography>
                        </AppBarButton>
                        <div style={{ width: 20 }} />
                        <AppBarButton style={{
                            backgroundColor: 'transparent'
                        }
                        }>
                            <AppBarItem variant="h8"
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                            >
                                <Typography variant="h8" style={{ color: 'black', fontSize: 20, fontFamily: theme.typography.fontFamily.title }}>
                                    Services
                                </Typography>
                            </AppBarItem>
                        </AppBarButton>
                        <div style={{ width: 20 }} />
                        <Typography variant="h8" style={{ color: 'black', fontSize: 20 }}>
                            <OptimaFont>
                                Contact
                            </OptimaFont>
                        </Typography>
                    </Grid>
                </Box>
            </StyledToolbar>
        </StyledAppBar >
    )
}

export default CustomAppBar;