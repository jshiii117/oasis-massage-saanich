import "./App.css";
import React, { useRef } from "react";
import { Grid, Container } from "@mui/material";
import styled from "styled-components";
import CustomAppBar from ".//components/appbar";
import LandingSection from "./components/landingSection";
import AboutSection from "./components/aboutSection";
import TreatmentSection from "./components/treatmentSection";
import BookingSection from "./components/bookingSection";
import ContactSection from "./components/contactSection";
import Footer from "./components/footer";

function App() {
  const Root = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    margni: 0;
    background-image: url(${process.env.PUBLIC_URL}/mainBackground.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `;

  const GridContainer = styled(Grid)`
    display: flex;
    padding: 3rem;
    @media (min-width: 960px) {
      padding: 6rem;
    }
    & > * {
      padding-bottom: ${(props) => props.spacing}px;
    }
  `;

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  return (
    <Root>
      <GridContainer
        container
        direction="column"
        sx={{ zIndex: 1, position: "relative" }}
      >
        <CustomAppBar refList={[ref1, ref2, ref3]} />
        <LandingSection />
        <div style={{ height: "10vh" }} />
        <AboutSection ref={ref1} />
        <div style={{ height: "10vh" }} />
        <TreatmentSection />
        <div style={{ height: "5vh" }} />
        <BookingSection ref={ref2} />
        <div style={{ height: "5vh" }} />
        <ContactSection ref={ref3} />
      </GridContainer>
      <Footer sx={{ position: "fixed", zIndex: 2 }} />
    </Root>
  );
}

export default App;
