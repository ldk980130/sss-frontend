import styled from "styled-components";
import { Container, Subtitle, Input, Submitbutton, Text, Column } from "../Components/shared";
import { Link } from "react-router-dom";
import routes from "../routes";
import Footer from "../Components/Footer";

export const CommentInput = styled.input`
    width: 600px;
    height: 50px;
    padding: 0 20px;
    margin-top: 25px;
    margin-botton: 10px;
    border-radius: 10px;
    background-color:#fafafa;
    border: 1px solid #C4C4C4;
    &::placeholder{
        font-size: 13px;
    }
`;

function Login() {
    return (
        <>
        <Container>
            <Subtitle top="10px">로그인</Subtitle>
            <form>
                <Column>
                <Input placeholder="아이디"/>
                <Input placeholder="비밀번호"/>
                <Submitbutton mt='30px' ml='300px' type="submit" value={"로그인 →"}></Submitbutton>
                </Column>
            </form>
            <Text top="120px">
                계정이 없으신가요? <Link to={routes.signUp} style={{ textDecoration: 'none', color: '#565656' }}>회원가입</Link>
            </Text>
            <Text top="20px" size="18px">
                <Link to={routes.home} style={{ textDecoration: 'none', color: '#565656' }}>아이디/비밀번호 찾기</Link>
            </Text>
        </Container>
        <Footer />
        </>
    );
}

export default Login;