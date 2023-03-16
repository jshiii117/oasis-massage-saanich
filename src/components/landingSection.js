import "../App.css";
import React from "react";
import { Grid, Button, useTheme, useMediaQuery } from "@mui/material";
import styled from "styled-components";
import { HelveticaType, OptimaType } from "../styles/globalStyles";
import theme from "../styles/theme";

const GridItem = styled(Grid)({
  display: "flex",
  flexBasis: "50%",
  backgroundColor: "white",
  alignItems: "center",
  justifyContent: "center",
});

const ColorButton = styled(Button)(({ theme }) => ({
  width: 150,
  height: 50,
  border: "2px solid #8B5E3C",
  backgroundColor: "transparent",
  color: "#8B5E3C",
  "&:hover": {
    backgroundColor: "#8B5E3C",
    color: "white",
  },
}));

function LandingSection() {
  const theme = useTheme();

  return (
    <Grid
      container
      direction="row"
      display="flex"
      alignSelf="center"
      alignItems="center"
      width="100%"
      maxWidth={1000}
      sx={{ mb: 4, zIndex: 1 }}
    >
      <GridItem item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ marginY: 10 }}>
        <Grid
          container
          direction="column"
          display="flex"
          height="100%"
          alignItems={useMediaQuery(theme.breakpoints.up("md")) ? "" : "center"}
        >
          <OptimaType
            className="optima"
            variant="h3"
            sx={{
              fontSize: 60,
              textAlign: useMediaQuery(theme.breakpoints.up("md"))
                ? ""
                : "center",
            }}
          >
            Healing Hands, <br />
            Tranquil Minds.
          </OptimaType>
          <OptimaType
            className="optima"
            variant="h6"
            sx={{
              fontSize: 30,
              textAlign: useMediaQuery(theme.breakpoints.up("md"))
                ? ""
                : "center",
            }}
          >
            Oasis Massage Therapy
          </OptimaType>
          <div style={{ height: 40 }} />
          <Grid
            container
            direction="row"
            display="flex"
            justifyContent={
              useMediaQuery(theme.breakpoints.up("md")) ? "" : "center"
            }
          >
            <ColorButton
              onClick={() => window.open("https://google.com", "_blank")}
              variant="contained"
              size="large"
              sx={{
                mr: "5%",
                borderRadius: 0,
                width: "40%",
                maxWidth: 150,
                border: "2px solid #8B5E3C",
                backgroundColor: "transparent",
                color: "#8B5E3C",
                transition: "transform 0.5s ease-out",
                "&:hover": {
                  backgroundColor: "#8B5E3C",
                  color: "white",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <OptimaType className="optima">Book Now</OptimaType>
            </ColorButton>
            <ColorButton
              onClick={() => {
                const recipientEmail = "example@example.com";
                const mailtoUrl = `mailto:${recipientEmail}`;

                window.open(mailtoUrl);
              }}
              variant="contained"
              size="large"
              sx={{
                borderRadius: 0,
                width: "40%",
                maxWidth: 150,
                border: "2px solid #8B5E3C",
                backgroundColor: "transparent",
                color: "#8B5E3C",
                transition: "transform 0.5s ease-out",
                "&:hover": {
                  backgroundColor: "#8B5E3C",
                  color: "white",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <OptimaType className="optima">Contact Us</OptimaType>
            </ColorButton>
          </Grid>
        </Grid>
      </GridItem>
      <GridItem
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        sx={{ backgroundColor: "" }}
      >
        <img
          src={process.env.PUBLIC_URL + "/mainDesign.png"}
          alt="Placeholder alt text"
          style={{ width: "100%", maxWidth: "100%", minWidth: 400 }}
        />
      </GridItem>
    </Grid>
  );
}

export default LandingSection;
