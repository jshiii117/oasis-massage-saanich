import React, { forwardRef } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import styled from "styled-components";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Face2Icon from "@mui/icons-material/Face2";
import StoreIcon from "@mui/icons-material/Store";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { OptimaType } from "../styles/globalStyles";

const ContactSection = forwardRef((props, ref) => {
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
        sx={{ zIndex: 1 }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <OptimaType
            className="optima"
            variant="h6"
            style={{ fontSize: 30, textAlign: "center" }}
          >
            Contact
          </OptimaType>
          <div style={{ height: 20 }} />
          <Grid
            container
            direction="row"
            display="flex"
            width="100%"
            sx={{ justifyContent: "space-evenly" }}
          >
            <ContactList />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
});

function ContactList() {
  return (
    <List>
      <ContactListItem
        primaryText={"Oasis Massage Therapy"}
        icon={<StoreIcon />}
      />
      <ContactListItem
        primaryText={"Maria Lourdes Ballendine"}
        icon={<Face2Icon />}
      />
      <ContactListItem primaryText={"(778) 919-1341"} icon={<PhoneIcon />} />
      <ContactListItem
        primaryText={"2002 Deerbrush Cres. North Saanich BC. V8L 0C5"}
        icon={<LocationOnIcon />}
      />
      <ContactListItem
        primaryText={
          "For more information on services offered policies, direct billing, and more, please contact or email ballendinermt@gmail.com"
        }
        icon={<ContactSupportIcon />}
      />
    </List>
  );
}

function ContactListItem({ primaryText, icon }) {
  const ListItemStyled = styled(ListItem)({
    border: "1px solid #ddd",
    borderRadius: "20px",
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "white",
  });

  return (
    <ListItemStyled style={{ maxHeight: 400, maxWidth: 450 }}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={primaryText} />
    </ListItemStyled>
  );
}
export default ContactSection;
