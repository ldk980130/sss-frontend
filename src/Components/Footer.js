import styled from "styled-components";
import { Text } from "./shared";

const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 30px;
    background-color: white;
`;

const TextContainer = styled.div`
    position: absolute;
    right: ${ props => props.right };
    left: ${ props => props.left };
`;


function Footer() {
    return (
        <FooterContainer>
            <TextContainer left="30px"><Text size="15px"> 오류 제보 </Text></TextContainer>
            <TextContainer right="50px"><Text size="17px"> subscription sharing service 2021 © </Text></TextContainer>
        </FooterContainer>
    );
  }
export default Footer;