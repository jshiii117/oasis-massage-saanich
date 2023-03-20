import React, { forwardRef } from "react";
import { Grid } from "@mui/material";
import { OptimaType } from "../styles/globalStyles";

// const GridItem = styled(Grid)({
//   display: "flex",
//   flexBasis: "50%",
//   backgroundColor: "white",
//   alignItems: "center",
//   justifyContent: "center",
// });

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
        sx={{
          zIndex: 1,
          mb: 4,
          backgroundColor: "",
          height: "100vh",
          justifyContent: "center",
        }}
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
        <div style={{ height: "3%" }} />
        <Grid item sx={{ height: "70%", width: "100%", minWidth: "100%" }}>
          <IFrameWindow />
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
