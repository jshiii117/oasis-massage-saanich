import React from 'react';
import { AppBar, Toolbar, Box, Grid, Button, useTheme, useMediaQuery, IconButton, Drawer, Divider } from '@mui/material';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { OptimaType } from '../styles/globalStyles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const StyledAppBar = styled(AppBar)(({ isVisible }) => ({
    "&&": {
        height: "12%",
        minHeight: 62,
        maxHeight: 65,
        backgroundColor: 'white',
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease, background-color 0.5s ease",
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

const scrollToRef = (ref) => {
    if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function CustomAppBar(props) {
    const refList = props.refList;
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

    const theme = useTheme();
    var isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <StyledAppBar isVisible={isVisible} position='fixed'>
            <StyledToolbar sx={{ justifyContent: isSmallScreen ? 'space-between' : 'center' }}>
                <Box display="flex">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Placeholder alt text" style={{ width: 60, height: "auto" }}
                    />
                </Box>
                <Box display="flex" backgroundColor="">
                    {isSmallScreen ? (
                        <MobileMenu refList={refList} />
                    ) : (
                        <Grid container direction="row" justify="center">
                            <DesktopAppBarItem itemName={"About"} onClick={() => scrollToRef(refList[0])} />
                            <DesktopAppBarItem itemName={"Booking"} onClick={() => scrollToRef(refList[1])} />
                            <DesktopAppBarItem itemName={"Contact"} onClick={() => scrollToRef(refList[2])} />
                        </Grid>
                    )}
                </Box>
            </StyledToolbar>
        </StyledAppBar >
    )
}

function DesktopAppBarItem(props) {
    const [hover, setHover] = useState(false);

    const handleClick = () => {
        props.onClick();
    }

    return (
        <Button onClick={() => handleClick()} style={{ backgroundColor: 'transparent' }
        }>
            <OptimaType variant="h8" onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                    color: hover ? '#A67C52' : 'black',
                    fontSize: 20,
                    textTransform: 'none',
                    transition: 'color 0.3s linear',
                }}>
                {props.itemName}
            </OptimaType>
        </Button>
    )
}

function MobileAppBarItem(props) {
    const [hover, setHover] = useState(false);

    const handleClick = () => {
        // props.closeFunction();
        props.scrollFunction();
    }

    return (
        <Button onClick={handleClick} style={{ backgroundColor: '' }
        }>
            <OptimaType variant="h8" onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                    color: hover ? '#A67C52' : 'black',
                    fontSize: 20,
                    textTransform: 'none',
                    transition: 'color 0.3s linear',
                    textAlign: 'center'
                }}>
                {props.itemName}
            </OptimaType>
        </Button>
    )
}

function MobileMenu(props) {
    const refList = props.refList;
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setMenuOpen(true)}
            >
                <MenuIcon style={{ color: 'black', fontSize: 30 }} />
            </IconButton>
            {menuOpen && (
                <Box display="flex" p={2}>
                    <Drawer
                        anchor="bottom"
                        variant="temporary"
                        open={menuOpen}
                        onClose={() => setMenuOpen(false)}
                        onOpen={() => setMenuOpen(true)}
                    >
                        <Box sx={{
                            p: 3,
                            minHeight: '100vh',
                            minWidth: '80vw',
                            backgroundColor: "#dbc8ff",
                        }}>
                            <Box display="flex" sx={{ justifyContent: 'flex-end' }}>
                                <IconButton sx={{ mb: 2 }}>
                                    <CloseIcon onClick={() => setMenuOpen(false)} />
                                </IconButton>
                            </Box>
                            <Divider sx={{ mb: 2 }} />
                            <Grid container direction="column" width="100%" sx={{ mb: 2 }}>
                                <MobileAppBarItem itemName={'About'} scrollFunction={() => scrollToRef(refList[0])} closeFunction={() => setMenuOpen(false)} />
                                <div style={{ height: 10 }} />
                                <MobileAppBarItem itemName={'Booking'} scrollFunction={() => scrollToRef(refList[1])} />
                                <div style={{ height: 10 }} />
                                <MobileAppBarItem itemName={'Contact'} scrollFunction={() => scrollToRef(refList[2])} />
                                <div style={{ height: 10 }} />
                            </Grid>

                        </Box>
                    </Drawer>
                </Box >
            )
            }
        </>

    )

}

export default CustomAppBar;