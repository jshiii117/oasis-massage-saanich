import { Grid, Typography, Box, Button, Card, CardContent, CardActionArea, CardActions } from '@mui/material';
import styled from 'styled-components';
import { OptimaType } from '../styles/globalStyles';
import theme from '../styles/theme';

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
                Available Services
            </OptimaType>
            <Grid container direction="row" display="flex" justifyContent="center" sx={{ backgroundColor: "" }}>
                {massages.map((massage) => (<TreatmentCard {...massage} />))}
            </Grid>
        </Grid>
    )
}

function TreatmentCard(massage) {
    return (
        <GridItem item xs={12} sm={12} md={12} lg={3} xl={4} sx={{ backgroundColor: "", margin: 3 }}>
            <StyledCard sx={{ maxWidth: 345, minHeight: 300 }} style={{ transition: "all 0.5s ease-in-out" }}>
                <CardActionArea>
                    <CardContent>
                        <Box height={140} sx={{ backgroundColor: "brown" }} />
                    </CardContent>
                    <CardContent sx={{ backgroundColor: "", height: "100%" }}>
                        <OptimaType className="optima" gutterBottom variant="h5" component="div">
                            {massage.massageName}
                        </OptimaType>
                        <div style={{ height: 5 }} />
                        <Typography variant="body2" color="text.secondary" style={{ fontWeight: 'bold' }}>
                            {massage.massageDuration} | {massage.massagePrice}
                        </Typography>
                        <div style={{ height: 10 }} />
                        <Typography variant="body2" color="text.secondary">
                            {massage.massageDescription}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" style={{ backgroundColor: theme.palette.primary.main }} sx={{ mb: 1 }}>
                        Book Now
                    </Button>
                </CardActions>
            </StyledCard>
        </GridItem>
    )
}

export default TreatmentSection;

const massages = [
    {
        massageName: 'Registered Massage Therapy',
        massageDuration: '60 Minutes',
        massagePrice: '$115.00CAD',
        massageDescription: "Manipulation of the body's soft tissue to stimulate circulation and promote relaxation"
    },
    {
        massageName: 'Pre & Post- natal pregnancy massage',
        massageDuration: '60 Minutes',
        massagePrice: '$115.00CAD',
        massageDescription: "Therapy specifically tailored for the expectant mother's needs. Pre- natal and post-natal massage service"
    },
    {
        massageName: 'Sport Massage',
        massageDuration: '60 Minutes',
        massagePrice: '$115.00CAD',
        massageDescription: "Focuses on the needs of the athlete. Releases muscle tension and restores balance"
    },
    {
        massageName: 'Registered Massage Therapy',
        massageDuration: '75 Minutes',
        massagePrice: '$144.00CAD',
        massageDescription: "Manipulation of the body's soft tissue to stimulate circulation and promote relaxation."
    },
    {
        massageName: 'Registered Massage Therapy',
        massageDuration: '90 Minutes',
        massagePrice: 'Starting at $172.00CAD',
        massageDescription: "Manipulation of the body's soft tissue to stimulate circulation and promote relaxation, maintain joint and tissue health."
    }
]

{/* <GridItem item xs={12} sm={12} md={12} lg={3} xl={4} sx={{ backgroundColor: "", margin: 3 }}>
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
</GridItem> */}