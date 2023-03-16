import React, { forwardRef } from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import "../App.css";
import { HelveticaType, OptimaType } from "../styles/globalStyles";
import theme from "../styles/theme";

const AboutSection = forwardRef((props, ref) => {
  return (
    <React.Fragment>
      <div ref={ref} />
      <Grid
        container
        direction="column"
        display="flex"
        width="100%"
        height="100vh"
        maxWidth={1000}
        justifyContent="center"
        sx={{ mb: 4, zIndex: 1 }}
      >
        <Grid item>
          <OptimaType
            className="optima"
            variant="h6"
            style={{ fontSize: 30, textAlign: "center" }}
          >
            Meet your Therapist
          </OptimaType>
          <div style={{ height: "3%" }} />
          <Grid
            container
            direction="row"
            display="flex"
            width="100%"
            maxWidth={2000}
            alignSelf="center"
            sx={{
              alignItems: "center",
              textAlign: useMediaQuery(theme.breakpoints.up("md"))
                ? ""
                : "center",
            }}
          >
            <Grid
              item
              md={6}
              sx={{ alignContent: "center", justifyContent: "center" }}
            >
              <img
                src={process.env.PUBLIC_URL + "/headshot.png"}
                alt="Placeholder alt text"
                style={{
                  maxWidth: useMediaQuery(theme.breakpoints.up("md"))
                    ? "80%"
                    : "40%",
                  height: "auto",
                  alignSelf: "end",
                  justifySelf: "end",
                }}
              />
            </Grid>
            <Grid
              item
              md={6}
              sx={{
                maxWidth: "100%",
              }}
            >
              <Typography
                variant="h5"
                style={{
                  fontSize: 25,
                  lineHeight: 1.8,
                  fontWeight: 400,
                }}
              >
                Malou Ballendine
              </Typography>
              <Typography
                variant="h8"
                style={{ fontSize: 18, textAlign: "center", lineHeight: 1.8 }}
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
      </Grid>
    </React.Fragment>
  );
});

export default AboutSection;
