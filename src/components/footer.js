import { Typography } from "@mui/material";
import styled from "styled-components";
import theme from "../styles/theme";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: ${theme.palette.primary.main};
  flex-wrap: wrap;
  padding: 1rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Typography
        variant="body"
        sx={{ textAlign: "center", fontSize: "0.7rem" }}
      >
        Oasis Massage Therapy &copy; {new Date().getFullYear()} | Made by{" "}
        <a
          href="https://linkedin.com/in/jamesshi117/"
          style={{ textDecoration: "underline", color: "inherit" }}
        >
          James Shi
        </a>
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
