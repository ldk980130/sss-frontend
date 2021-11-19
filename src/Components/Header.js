import styled from "styled-components";
import logo from '../images/logo.png';
import { Link } from "react-router-dom";
import { Text, Flexrow } from "./shared";
import routes from "../routes";

const HeaderContainer = styled.div`
    height: 130px;
    width: 100%;
    background: #ffffff;
`;

const LogoContainer = styled.div`
    position: absolute;
    left: 40px;
`;

const LinkContainer = styled.div`
    position: absolute;
    right: 50px;
`;

function Header() {

    return (
        <HeaderContainer>
            <LogoContainer>
                <Link to={routes.home}>
                    <img src={logo} alt='logo' height="100px"/>
                </Link>
            </LogoContainer>
            <LinkContainer>
                <Flexrow>
                    <Text right='40px' top='55px'>
                        <Link to ={routes.logIn} style={{ textDecoration: 'none', color: '#565656' }}>로그인</Link>
                    </Text>
                    <Text top='55px'>
                    <Link to ={routes.signUp} style={{ textDecoration: 'none', color: '#565656' }}>회원가입</Link>
                    </Text>
                </Flexrow>
            </LinkContainer>
        </HeaderContainer>
    );
  }
  
export default Header;