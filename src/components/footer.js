import { Typography } from "@mui/material";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: #fff;
  flex-wrap: wrap;
  padding: 1rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="body" sx={{ textAlign: "center" }}>
        Copyright &copy; {new Date().getFullYear()} Oasis Massage Therapy |
        Developed by James Shi
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
