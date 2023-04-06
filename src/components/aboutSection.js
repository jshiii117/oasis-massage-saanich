import React, { forwardRef } from "react";
import { Grid, Typography, useMediaQuery, styled } from "@mui/material";
import "../App.css";
import { OptimaType } from "../styles/globalStyles";
import theme from "../styles/theme";

const AboutSection = forwardRef((props, ref) => {
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const fontSize = isMdUp ? 16 : isSmDown ? 10.5 : 12;

  const GridContainer = styled(Grid)`
    display: flex;
    width: 100%;
    max-width: 1000px;
    margin-bottom: 2rem;
  `;

  return (
    <React.Fragment>
      <div ref={ref} />
      <GridContainer container>
        <Grid item>
          <OptimaType
            className="optima"
            variant="h6"
            style={{ fontSize: 30, textAlign: "center" }}
          >
            Meet your Therapist
          </OptimaType>
          <div style={{ height: "5%", minHeight: "50px" }} />
          <Grid
            container
            direction="row"
            display="flex"
            width="100%"
            maxWidth={2000}
            sx={{
              alignItems: "center",
              justifyContent: "space-evenly",
              textAlign: useMediaQuery(theme.breakpoints.up("md"))
                ? ""
                : "center",
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/headshot.png"}
              alt="Therapist headshot"
              style={{
                maxWidth: useMediaQuery(theme.breakpoints.up("md"))
                  ? "40%"
                  : "80%",
                borderRadius: 10,
              }}
            />
            <Grid
              item
              md={6}
              sx={{
                mt: useMediaQuery(theme.breakpoints.up("md")) ? "" : "20px",
                maxWidth: "100%",
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: 5,
              }}
            >
              <OptimaType
                className="optima"
                style={{
                  fontSize: 25,
                  lineHeight: 1.8,
                  fontWeight: 400,
                }}
              >
                Malou Ballendine
              </OptimaType>
              <Typography
                variant="h8"
                sx={{
                  textAlign: "center",
                  lineHeight: 1.8,
                  fontSize: fontSize,
                }}
              >
                I am a graduate of the West Coast College of Massage Therapy
                (WCCMT) in Victoria BC and a Registered Massage Therapist.  I
                work and communicate with clients to provide exceptional care by
                implementing individualized treatment  plans to accomplish their
                healthcare goals. <br /> <br />I specialize in many techniques
                including trigger point  modalities, Swedish massage, Myofascial
                release therapy, neuromuscular therapy, active and passive 
                stretching and deep tissue work. My goal is to help my clients
                manage stress, chronic pain and mental  health challenges as
                well as improve their general wellbeing
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </GridContainer>
    </React.Fragment>
  );
});

export default AboutSection;
