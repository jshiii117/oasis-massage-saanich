import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #333;
  color: #fff;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Copyright &copy; {new Date().getFullYear()} SpaName |</p>
    </FooterContainer>
  );
};

export default Footer;