import { Grid } from '@mui/material';
import styled from 'styled-components';
import { OptimaType } from '../styles/globalStyles';

const GridItem = styled(Grid)({
    display: 'flex',
    flexBasis: '50%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  })

function BookingSection() {
    return (
        <Grid container direction="row" display="flex" height="40vh" width="100%" sx={{ mb: 4 }}>
          <GridItem item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ backgroundColor: "pink" }}>
            Booking Section
          </GridItem>
        </Grid>
    )
}

export default BookingSection;