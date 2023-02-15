import './App.css';
import React from 'react';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import CustomAppBar from './/components/appbar';
import LandingSection from './components/landingSection';
import AboutSection from './components/aboutSection';
import TreatmentSection from './components/treatmentSection';
import BookingSection from './components/bookingSection';
import ContactSection from './components/contactSection';
import Footer from './components/footer';


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

  return (
    <Root>
      <GridContainer container direction="column" spacing={0}>
        <CustomAppBar />
        <LandingSection />
        <AboutSection />
        <TreatmentSection />
        <BookingSection />
        <ContactSection />
      </GridContainer>
      <Footer />
    </Root >
  )
}

export default App;
