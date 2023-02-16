import React from 'react';
import { AppBar, Typography, Toolbar, Box, Grid, Button } from '@mui/material';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { OptimaType } from '../styles/globalStyles';

const StyledAppBar = styled(AppBar)(({ isVisible }) => ({
    "&&": {
        height: "12%",
        maxHeight: 65,
        backgroundColor: 'white',
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease, background-color 0.5s ease",
        // "&:hover": {
        //     backgroundColor: "yellow",
        // },
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
    }
}));

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
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

    //Disappear and reappear appbar on scroll
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

    const [hover, setHover] = useState([false, false, false])

    return (
        <StyledAppBar isVisible={isVisible} position='fixed'>
            <StyledToolbar>
                <Box display="flex">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Placeholder alt text" style={{ width: 60, height: "auto" }}
                    />
                </Box>
                <Box display="flex" backgroundColor="">
                    <div style={{ width: 20 }} />
                    <Grid container direction="row" justify="space-between">
                        <AppBarButton style={{
                            backgroundColor: 'transparent'
                        }
                        }>
                            <OptimaType variant="h8" onMouseEnter={() => setHover([true, false, false])}
                                onMouseLeave={() => setHover([false, false, false])}
                                style={{
                                    color: hover[0] ? '#A67C52' : 'black',
                                    fontSize: 20,
                                    textTransform: 'none',
                                    transition: 'color 0.3s linear',
                                }}>
                                About
                            </OptimaType>
                        </AppBarButton>
                        <div style={{ width: 20 }} />
                        <AppBarButton style={{
                            backgroundColor: 'transparent'
                        }
                        }>
                            <AppBarItem variant="h8"
                                onMouseEnter={() => setHover([false, true, false])}
                                onMouseLeave={() => setHover([false, false, false])}
                            >
                                <OptimaType variant="h8" style={{
                                    color: hover[1] ? '#A67C52' : 'black',
                                    fontSize: 20,
                                    textTransform: 'none',
                                    transition: 'color 0.3s linear',
                                }}>
                                    Services
                                </OptimaType>
                            </AppBarItem>
                        </AppBarButton>
                        <div style={{ width: 20 }} />
                        <AppBarButton style={{
                            backgroundColor: 'transparent'
                        }
                        }>
                            <AppBarItem variant="h8"
                                onMouseEnter={() => setHover([false, false, true])}
                                onMouseLeave={() => setHover([false, false, false])}
                            >
                                <OptimaType variant="h8" style={{
                                    color: hover[2] ? '#A67C52' : 'black',
                                    fontSize: 20,
                                    textTransform: 'none',
                                    transition: 'color 0.3s linear',
                                }}>
                                    Contact
                                </OptimaType>
                            </AppBarItem>
                        </AppBarButton>
                    </Grid>
                </Box>
            </StyledToolbar>
        </StyledAppBar >
    )
}

export default CustomAppBar;