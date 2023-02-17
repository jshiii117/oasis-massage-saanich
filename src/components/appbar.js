import React from 'react';
import { AppBar, Toolbar, Box, Grid, Button, useTheme, useMediaQuery, IconButton, ListItem, ListItemButton, ListItemText, List, ListItemIcon } from '@mui/material';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { OptimaType } from '../styles/globalStyles';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event';
import EmailIcon from '@mui/icons-material/Email';

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

// const AppBarItem = styled(Typography)({
//     color: 'black',
//     fontSize: 20,
//     textTransform: 'none',
//     transition: 'color 0.3s linear',
//     '&:hover': {
//         color: '#A67C52'
//     }
// });

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
                        <MobileMenu />
                    ) : (
                        <Grid container direction="row" justify="center">
                            <DesktopAppBarItem itemName={"About"} />
                            <DesktopAppBarItem itemName={"Booking"} />
                            <DesktopAppBarItem itemName={"Contact"} />
                        </Grid>
                    )}
                </Box>
            </StyledToolbar>
        </StyledAppBar >
    )
}

function DesktopAppBarItem(props) {
    const [hover, setHover] = useState(false);

    return (
        <Button style={{ backgroundColor: 'transparent' }
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

function MobileMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <MenuIcon style={{ color: 'black', fontSize: 30 }} />
            </IconButton>
            {menuOpen && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'white',
                        zIndex: 1,
                    }}
                >
                    <Box display="flex" justifyContent="flex-end" p={2}>
                        <IconButton onClick={() => setMenuOpen(!menuOpen)}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemText primary="About" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <EventIcon />
                                </ListItemIcon>
                                <ListItemText primary="Booking" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <EmailIcon />
                                </ListItemIcon>
                                <ListItemText primary="Contact" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            )}
        </>

    )

}

export default CustomAppBar;