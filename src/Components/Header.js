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
    margin-left: 40px;
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
                    <Link to ={routes.logIn} style={{ textDecoration: 'none'}}><Text right='40px' top='55px' hover='#828282'>로그인</Text></Link>
                    <Link to ={routes.signUp} style={{ textDecoration: 'none'}}><Text top='55px' hover='#828282'>회원가입</Text></Link>
                </Flexrow>
            </LinkContainer>
        </HeaderContainer>
    );
  }
  
export default Header;