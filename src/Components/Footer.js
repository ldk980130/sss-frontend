import styled from "styled-components";
import { Text } from "./shared";

const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 30px;
    background-color: white;
`;

const TextContainer = styled.footer`
    position: absolute;
    right: 50px;
`;


function Footer() {
    return (
        <FooterContainer>
            <TextContainer><Text size="17px"> subscription sharing service 2021 © </Text></TextContainer>
        </FooterContainer>
    );
  }
export default Footer;