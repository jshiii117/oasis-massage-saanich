import React, { forwardRef } from "react";
import { Grid, Box } from "@mui/material";
import styled from "styled-components";
import { OptimaType } from "../styles/globalStyles";

const GridItem = styled(Grid)({
  display: "flex",
  flexBasis: "50%",
  backgroundColor: "white",
  alignItems: "center",
  justifyContent: "center",
});

const BookingSection = forwardRef((prop, ref) => {
  return (
    <React.Fragment>
      <div ref={ref} />
      <Grid
        container
        direction="column"
        display="flex"
        width="100%"
        maxWidth={800}
        alignSelf="center"
        sx={{ mb: 4, backgroundColor: "", height: "80vh" }}
      >
        <Grid item sx={{ width: "100%", minWidth: "90%", maxHeight: "10%" }}>
          <OptimaType
            className="optima"
            variant="h6"
            sx={{
              fontSize: 30,
              textAlign: "center",
            }}
          >
            Booking
          </OptimaType>
        </Grid>
        <div style={{ height: 20 }} />
        <Grid item sx={{ height: "90%", width: "100%", minWidth: "100%" }}>
          <IFrameWindow />
          {/* <Grid container direction="row" display="flex" width="100%" sx={{ mb: 4, backgroundColor: "", justifyContent: "space-evenly" }}>
                        <Grid item lg={6} sx={{ backgroundColor: "grey" }}>
                            <img src={process.env.PUBLIC_URL + '/25.png'} alt="Your image description" width={300} />
                        </Grid>
                        <Grid item lg={6}>
                            <IFrameWindow />
                        </Grid>
                    </Grid> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );
});

export default BookingSection;

function IFrameWindow() {
  return (
    <iframe
      src="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVNtdKDPthYtc7Bu9wGKj1ujsyTEnW93skc8ixaRSSsqYOePUVHh9Lci1iDAIYQRuTlFFrXirHYz05MAmjCbifZqxNyaT1uF2G2ZK/mbiatpF5YvzlD0NE/02nXe+nFyP7KdN9BDravwyf62iKDszDUMiWq5h/c6D6hVIpQu+7RuDus8JoZVJih9uzbA/BA6nvlmJjEgDx6yhotdpOysp/aOt9Gxjpg52YkrNPBS3axC05h+PDsvrWYXfGe6BtbBSC4bNStNwm8qgim+clwhNTNcmK+MHxi/CsAcoFG/YXHTqBXbt9VCgFzokTpTPxsUYy+oSX2W3iijARvTz0PzMe9T0GfkwBTlh8QWDXz9ImHJw&embed=true"
      title="Example website"
      width="100%"
      height="100%"
    />
  );
}
