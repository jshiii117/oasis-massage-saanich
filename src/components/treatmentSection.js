import {
  Grid,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
} from "@mui/material";
import styled from "styled-components";
import { OptimaType } from "../styles/globalStyles";

const StyledCard = styled(Card)`
  max-width: 345px;
  transition: 0.3s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  }
`;

const GridItem = styled(Grid)({
  display: "flex",
  flexBasis: "50%",
  alignItems: "center",
  justifyContent: "center",
});

function TreatmentSection() {
  return (
    <Grid
      container
      direction="column"
      display="flex"
      alignSelf="center"
      sx={{ mb: 4, zIndex: 1 }}
    >
      <OptimaType
        className="optima"
        variant="h6"
        style={{ fontSize: 30, textAlign: "center" }}
      >
        Available Treatments
      </OptimaType>
      <div style={{ height: "2vh", minHeight: "20px" }} />
      <Grid container direction="row" display="flex" justifyContent="center">
        {massages.map((massage) => (
          <TreatmentCard {...massage} />
        ))}
      </Grid>
    </Grid>
  );
}

function TreatmentCard(massage) {
  return (
    <GridItem item xs={12} sm={6} md={4} lg={3} xl={4} sx={{ margin: 3 }}>
      <StyledCard
        sx={{
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        style={{ transition: "all 0.5s ease-in-out" }}
      >
        <CardActionArea sx={{ height: "80%" }}>
          <CardContent>
            <Box width="100%" sx={{ backgroundColor: "white" }}>
              <img
                src={massage.massageImage}
                alt="Placeholder alt text"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  maxHeight: "100%",
                  height: "auto",
                }}
              />
            </Box>
          </CardContent>
          <CardContent sx={{ height: "100%" }}>
            <OptimaType
              className="optima"
              gutterBottom
              variant="h5"
              component="div"
            >
              {massage.massageName}
            </OptimaType>
            <div style={{ height: 5 }} />
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ fontWeight: "bold" }}
            >
              {massage.massageDuration} | {massage.massagePrice}
            </Typography>
            <div style={{ height: 10 }} />
            <Typography variant="body2" color="text.secondary">
              {massage.massageDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={() => window.open(massage.massageUrl, "_blank")}
            variant="contained"
            size="large"
            sx={{
              mb: 1,
              borderRadius: 0,
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
            Book Now
          </Button>
        </CardActions>
      </StyledCard>
    </GridItem>
  );
}

export default TreatmentSection;

const massages = [
  {
    massageName: "Registered Massage Therapy",
    massageDuration: "60 Minutes",
    massagePrice: "$115.00CAD",
    massageDescription:
      "Manipulation of the body's soft tissue to stimulate circulation and promote relaxation",
    massageImage: process.env.PUBLIC_URL + "/massageTherapy.png",
    massageUrl: "https://www.vagaro.com/oasismassagetherapy2/book-now",
  },
  {
    massageName: "Pre & Post- natal pregnancy massage",
    massageDuration: "60 Minutes",
    massagePrice: "$115.00CAD",
    massageDescription:
      "Therapy specifically tailored for the expectant mother's needs. Pre- natal and post-natal massage service",
    massageImage: process.env.PUBLIC_URL + "/prenatal.png",
    massageUrl: "https://www.vagaro.com/oasismassagetherapy2/book-now",
  },
  {
    massageName: "Sport Massage",
    massageDuration: "60 Minutes",
    massagePrice: "$115.00CAD",
    massageDescription:
      "Focuses on the needs of the athlete. Releases muscle tension and restores balance",
    massageImage: process.env.PUBLIC_URL + "/sports.png",
    massageUrl: "https://www.vagaro.com/oasismassagetherapy2/book-now",
  },
  {
    massageName: "Registered Massage Therapy",
    massageDuration: "75 Minutes",
    massagePrice: "$144.00CAD",
    massageDescription:
      "Manipulation of the body's soft tissue to stimulate circulation and promote relaxation.",
    massageImage: process.env.PUBLIC_URL + "/massageTherapy.png",
    massageUrl: "https://www.vagaro.com/oasismassagetherapy2/book-now",
  },
  {
    massageName: "Registered Massage Therapy",
    massageDuration: "90 Minutes",
    massagePrice: "Starting at $172.00CAD",
    massageDescription:
      "Manipulation of the body's soft tissue to stimulate circulation and promote relaxation, maintain joint and tissue health.",
    massageImage: process.env.PUBLIC_URL + "/massageTherapy.png",
    massageUrl: "https://www.vagaro.com/oasismassagetherapy2/book-now",
  },
];
