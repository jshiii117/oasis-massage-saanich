import { Grid, Typography, Box, Card, CardContent, CardActionArea } from '@mui/material';
import styled from 'styled-components';
import { OptimaType } from '../styles/globalStyles';

const StyledCard = styled(Card)`
max-width: 345px;
transition: 0.3s;
&:hover {
  transform: translateY(-10px);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
}
`;

const GridItem = styled(Grid)({
    display: 'flex',
    flexBasis: '50%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  })

function TreatmentSection() {
    return (
        <Grid container direction="column" display="flex" width="100%" alignSelf="center" sx={{ mb: 4, backgroundColor: "" }}>
          <OptimaType className="optima" variant="h6" style={{ fontSize: 30, textAlign: "center" }}>
              Available Treatments
          </OptimaType>
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
    )
}

export default TreatmentSection;