import logo from './logo.svg';
import './App.css';
import React from 'react';
import { AppBar, Typography, Toolbar, Box, Grid } from '@mui/material';
import styled from 'styled-components';
import AdbIcon from '@mui/icons-material/Adb';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AnotherAppBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

const StyledAppBar = styled(AppBar)({
  "&&": {
    backgroundColor: "transparent",
    transition: "background-color 0.5s ease",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.1)"
    }
  }
});


const StyledToolbar = styled(Toolbar) ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: "center"
});

const AnotherAppBar = () => (
  <StyledAppBar position='fixed'>  
    <StyledToolbar>
      <Box display="flex">
        <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}} >SpaName
        </Typography>
        <AdbIcon sx={{display: { xs: "block", sm: "none"}}}></AdbIcon>
      </Box>
      <Box display="flex">
        <Grid container direction="row" justify="space-between" spacing={3}>
          <Grid item>
            <Typography variant="body1">About</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">Two</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">Three</Typography>
          </Grid>
        </Grid>
      </Box>
    </StyledToolbar>
  </StyledAppBar>
);

