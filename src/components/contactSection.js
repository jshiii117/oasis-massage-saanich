import { Grid, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import styled from 'styled-components';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Face2Icon from '@mui/icons-material/Face2';
import StoreIcon from '@mui/icons-material/Store';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { OptimaType } from '../styles/globalStyles';

function ContactSection () {
    return (
        <Grid container direction="column" display="flex" width="100%" maxWidth={800} alignSelf="center" sx={{ mb: 4, backgroundColor: "" }}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <OptimaType className="optima" variant="h6" style={{ fontSize: 30, textAlign: "center" }}>
              Contact
          </OptimaType>
          <div style={{ height: 20 }} />
          <Grid container direction="row" display="flex" width="100%" sx={{ mb: 4, backgroundColor: "", justifyContent: "space-evenly" }}>
            <Box lg={6} sx={{ backgroundColor: "grey" }}>
              <img src={process.env.PUBLIC_URL + '/25.png'} alt="Your image description" width={300} />
            </Box>
            <ContactList />
            </Grid>
            </Grid>
        </Grid>
    )
}

const ListItemStyled = styled(ListItem)({
    border: '1px solid #ddd',
    borderRadius: '20px',
    padding: '10px',
    marginBottom: '10px',
  });
  
  function ContactList() {
    return (
      <List>
        <ListItemStyled>
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="Oasis Massage Therapy" />
        </ListItemStyled>
        <ListItemStyled>
          <ListItemIcon>
            <Face2Icon />
          </ListItemIcon>
          <ListItemText primary="Maria Lourdes Ballendine" />
        </ListItemStyled>
        <ListItemStyled>
          <ListItemIcon>
            <PhoneIcon />
          </ListItemIcon>
          <ListItemText primary="(778) 919-1341" />
        </ListItemStyled>
        <ListItemStyled>
          <ListItemIcon>
            <LocationOnIcon />
          </ListItemIcon>
          <ListItemText primary="2002 Deerbrush Cres. North Saanich BC. V8L 0C5" />
        </ListItemStyled>
        <ListItemStyled style={{ maxHeight: 400, maxWidth: 450 }}>
          <ListItemIcon>
            <ContactSupportIcon />
          </ListItemIcon>
          <ListItemText
            primary="For all inquiries, please contact me by email or phone during business hours, 9AM-5PM PST from Monday to Sunday"
          />
        </ListItemStyled>
      </List>
    );
  }

export default ContactSection;