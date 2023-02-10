import './App.css';
import React from 'react';
import { AppBar, Typography, Toolbar, Box, Grid, Paper } from '@mui/material';
import styled from 'styled-components';
import AdbIcon from '@mui/icons-material/Adb';

function App() {


  const Root = styled.div`
  background-color: black;
  min-height: 100vh;
`;

  const GridContainer = styled(Grid)`
  display: flex;
  padding: 3rem;
  @media (min-width: 960px) {
    padding: 6rem;
  }
  background-color: red;
  & > * {
    padding-bottom: ${props => props.spacing}px;
  }
`;

  const GridItem = styled(Grid)`
  flex-basis: 50%;
  background-color: white;
`

  return (
    <Root>
      <GridContainer container direction="column" spacing={0}>
        <Grid container direction="row" display="flex" height="60vh" width="100%" sx={{ mb: 4 }}>
          <AnotherAppBar />
          <GridItem item xs={12} sm={6} md={6} lg={6} xl={6}>
            Title text goes here
          </GridItem>
          <GridItem item xs={12} sm={6} md={6} lg={6} xl={6} sx={{ backgroundColor: "purple" }}>
            <img src={process.env.PUBLIC_URL + '/massage.jpg'} alt="Your image description" width="100%" />
          </GridItem>


        </Grid>
        <Grid container direction="row" display="flex" height="30vh" width="100%" sx={{ mb: 4 }}>
          <GridItem item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ backgroundColor: "gold" }}>
            About Section
          </GridItem>
        </Grid>
        <Grid container direction="row" display="flex" height="120vh" justifyContent="center" sx={{ mb: 4, backgroundColor: "cyan" }}>
          <GridItem item xs={4} sm={4} md={12} lg={3} xl={4} sx={{ backgroundColor: "blue", margin: 3 }}>
            <Paper
              sx={{
                height: "40vh",
                width: "100%",
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            />
          </GridItem>
          <GridItem item xs={4} sm={4} md={12} lg={3} xl={4} sx={{ backgroundColor: "blue", margin: 3 }}>
            <Paper
              sx={{
                height: "40vh",
                width: "100%",
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            />
          </GridItem>
          <GridItem item xs={4} sm={4} md={12} lg={3} xl={4} sx={{ backgroundColor: "blue", margin: 3 }}>
            <Paper
              sx={{
                height: "40vh",
                width: "100%",
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            />          </GridItem>
          <GridItem item xs={4} sm={4} md={12} lg={3} xl={4} sx={{ backgroundColor: "blue", margin: 3 }}>
            <Paper
              sx={{
                height: "40vh",
                width: "100%",
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            />
          </GridItem>
          <GridItem item xs={4} sm={4} md={12} lg={3} xl={4} sx={{ backgroundColor: "blue", margin: 3 }}>
            <Paper
              sx={{
                height: "40vh",
                width: "100%",
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            />
          </GridItem>
        </Grid>
        <Grid container direction="row" display="flex" height="40vh" width="100%" sx={{ mb: 4 }}>
          <GridItem item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ backgroundColor: "pink" }}>
            Booking Section
          </GridItem>
        </Grid>
        <Grid container direction="row" display="flex" height="30vh" width="100%" sx={{ mb: 4 }}>
          <GridItem item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ backgroundColor: "pink" }}>
            Contact Section
          </GridItem>
        </Grid>
      </GridContainer>
      <Footer />

    </Root >
  )
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


const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: "center"
});

const AnotherAppBar = () => (
  <StyledAppBar position='fixed'>
    <StyledToolbar>
      <Box display="flex">
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }} >SpaName
        </Typography>
        <AdbIcon sx={{ display: { xs: "block", sm: "none" } }}></AdbIcon>
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


const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #333;
  color: #fff;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Copyright &copy; {new Date().getFullYear()} SpaName |</p>
    </FooterContainer>
  );
};
