import './App.css';
import React, { useRef } from 'react';
import { Grid, Button } from '@mui/material';
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

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  return (
    <Root>
      <GridContainer container direction="column" spacing={0}>
        <CustomAppBar refList={[ref1, ref2, ref3]} />
        <LandingSection />
        <AboutSection ref={ref1} />
        <TreatmentSection />
        <BookingSection ref={ref2} />
        <ContactSection ref={ref3} />
      </GridContainer>
      <Footer />
    </Root >
  )
}

export default App;
