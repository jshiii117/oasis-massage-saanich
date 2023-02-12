import './App.css';
import React from 'react';
import { AppBar, Typography, Toolbar, Box, Grid, Paper, Button, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import styled from 'styled-components';
import AdbIcon from '@mui/icons-material/Adb';
import { style } from '@mui/system';
import { useState, useEffect } from 'react';
import { useIdle } from 'use-idle';


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
  background-color: white;
  & > * {
    padding-bottom: ${props => props.spacing}px;
  }
`;

  const GridItem = styled(Grid)`
  display: flex;
  flex-basis: 50%;
  background-color: white;
  align-items: center;
  justify-content: center;
`
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

  const StyledCard = styled(Card)`
  max-width: 345px;
  transition: 0.3s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  }
`;


  return (
    <Root>
      <GridContainer container direction="column" spacing={0}>
        <Grid container direction="row" display="flex" height="100vh" width="100%" sx={{ mb: 4 }}>
          <AnotherAppBar />
          <GridItem item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Grid container direction="column" display="flex" height="100%" justifyContent="center" sx={{ backgroundColor: "" }}>
              <Typography variant="h3" style={{ fontSize: 60 }}>
                <OptimaFont>
                  Healing Hands, Tranquil Minds
                </OptimaFont>
              </Typography>
              <div style={{ height: 20 }} />
              <Typography variant="h6" style={{ fontSize: 30 }}>
                <OptimaFont>
                  Oasis Massage Therapy
                </OptimaFont>
              </Typography>
              <div style={{ height: 10 }} />
              <ColorButton variant="contained" size="large">
                <HelveticaFont>Book Now</HelveticaFont>
              </ColorButton>
            </Grid>
          </GridItem>
          <GridItem item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ backgroundColor: "blue" }}>
            <img src={process.env.PUBLIC_URL + '/massage.jpg'} alt="Your image description" width="90%" />
          </GridItem>
        </Grid>

        <Grid container direction="column" display="flex" width="100%" maxWidth={1000} alignSelf="center" sx={{ mb: 4, backgroundColor: "" }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="h6" style={{ fontSize: 30, textAlign: "center" }}>
              <OptimaFont>
                Meet Your Therapist
              </OptimaFont>
            </Typography>
            <div style={{ height: 20 }} />
            <Typography variant="h8" style={{ fontSize: 18, textAlign: "center", lineHeight: 1.8 }}><HelveticaFont >I am a graduate of the West Coast College of Massage Therapy (WCCMT) in Victoria BC and a Registered
              Massage Therapist.  I work and communicate with clients to provide exceptional care by implementing
              individualized treatment  plans to accomplish their healthcare goals. I specialize in many techniques
              including trigger point  modalities, Swedish massage, Myofascial release therapy, neuromuscular
              therapy, active and passive  stretching and deep tissue work. My goal is to help my clients manage
              stress, chronic pain and mental  health challenges as well as improve their general wellbeing</HelveticaFont></Typography>
          </Grid>
        </Grid>
        <Grid container direction="column" display="flex" width="100%" alignSelf="center" sx={{ mb: 4, backgroundColor: "" }}>
          <Typography variant="h6" style={{ fontSize: 30, textAlign: "center" }}>
            <OptimaFont>
              Available Treatments
            </OptimaFont>
          </Typography>
          <Grid container direction="row" display="flex" justifyContent="center" sx={{ backgroundColor: "" }}>
            <GridItem item xs={12} sm={12} md={12} lg={3} xl={4} sx={{ backgroundColor: "", margin: 3 }}>
              <StyledCard sx={{ maxWidth: 345, height: 350 }} style={{ transition: "all 0.5s ease-in-out" }}>
                <CardActionArea>
                  <CardContent>
                    <Box height={140} sx={{ backgroundColor: "brown" }} />
                  </CardContent>
                  <CardContent sx={{ backgroundColor: "grey", height: "100%" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Swedish Massage
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      A therapeutic massage that is designed to relax the entire body...                      A therapeutic massage that is designed to relax the entire body...
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </StyledCard>
            </GridItem>
            <GridItem item xs={12} sm={12} md={12} lg={3} xl={4} sx={{ backgroundColor: "", margin: 3 }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardContent>
                    <Box height={140} sx={{ backgroundColor: "brown" }} />
                  </CardContent>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Trigger Point Modalities
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </GridItem>
            <GridItem item xs={12} sm={12} md={12} lg={3} xl={4} sx={{ backgroundColor: "", margin: 3 }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardContent>
                    <Box height={140} sx={{ backgroundColor: "brown" }} />
                  </CardContent>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Trigger Point Modalities
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </GridItem>
            <GridItem item xs={12} sm={12} md={12} lg={3} xl={4} sx={{ backgroundColor: "", margin: 3 }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardContent>
                    <Box height={140} sx={{ backgroundColor: "brown" }} />
                  </CardContent>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Trigger Point Modalities
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </GridItem>
            <GridItem item xs={12} sm={12} md={12} lg={3} xl={4} sx={{ backgroundColor: "", margin: 3 }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardContent>
                    <Box height={140} sx={{ backgroundColor: "brown" }} />
                  </CardContent>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Trigger Point Modalities
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </GridItem>
          </Grid>
        </Grid>
        <Grid container direction="row" display="flex" height="40vh" width="100%" sx={{ mb: 4 }}>
          <GridItem item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ backgroundColor: "pink" }}>
            Booking Section
          </GridItem>
        </Grid>
        <Grid container direction="column" display="flex" height="30vh" width="100%" xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 4, backgroundColor: "pink" }}>
          <Typography variant="h6" style={{ fontSize: 30, textAlign: "center" }}>
            <OptimaFont>
              Contact Information
            </OptimaFont>
          </Typography>
          <Grid container direction="row" display="flex" width="100%" alignItems="center" sx={{ mb: 4, backgroundColor: "gold" }}>
            <Box>
              <img src={process.env.PUBLIC_URL + '/25.png'} alt="Your image description" width={100} sx={{ backgroundColor: "red" }} />

            </Box>
            <Grid container direction="column" display="flex" justifySelf="center" alignContent="center" sx={{ backgroundColor: "grey" }}>
              <Grid container direction="row">
                <img src={process.env.PUBLIC_URL + '/mail.svg'} alt="Your image description" width={30} height="auto" />
                <HelveticaFont>
                  ballendinermt@gmail.com
                </HelveticaFont>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </GridContainer>
      <Footer />

    </Root >
  )
}

export default App;

const HelveticaFont = styled('p')({
  fontFamily: 'Helvetica',
  margin: 0,
});

const OptimaFont = styled('p')({
  fontFamily: 'OptimaLight',
  lineHeight: 1,
  margin: 0
});

const StyledAppBar = styled(AppBar)(({ isVisible }) => ({
  "&&": {
    // backgroundColor: "#8B5E3C",
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

function AnotherAppBar() {
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

  return (
    <StyledAppBar isVisible={isVisible} position='fixed'>
      <StyledToolbar>
        <Box display="flex">
          {/* <Typography variant="h6" style={{ color: 'black', fontSize: 30 }} sx={{ display: { xs: "none", sm: "block" } }}>
            <OptimaFont>
              Oasis Massage Therapy
            </OptimaFont>
          </Typography> */}
          <img src={process.env.PUBLIC_URL + '/logo.jpeg'} alt="Your image description" style={{ width: 80, height: "auto" }}
          />
        </Box>
        <Box display="flex" backgroundColor="">
          <Grid container direction="row" justify="space-between">
            <Typography variant="h8" style={{ color: 'black', fontSize: 20 }}>
              <OptimaFont>
                About
              </OptimaFont>
            </Typography>
            <div style={{ width: 20 }} />
            <Typography variant="h8" style={{ color: 'black', fontSize: 20 }}>
              <OptimaFont>
                Services
              </OptimaFont>
            </Typography>
            <div style={{ width: 20 }} />
            <Typography variant="h8" style={{ color: 'black', fontSize: 20 }}>
              <OptimaFont>
                Contact
              </OptimaFont>
            </Typography>
          </Grid>
        </Box>
      </StyledToolbar>
    </StyledAppBar>
  )
}


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
