import { Container, Subtitle, Input, Submitbutton, Text, Column } from "../Components/shared";
import { Link } from "react-router-dom";
import routes from "../routes";
import Footer from "../Components/Footer";

function Login() {
    return (
        <>
        <Container>
            <Subtitle top="10px">로그인</Subtitle>
            <form>
                <Column>
                <Input placeholder="아이디"/>
                <Input placeholder="비밀번호"/>
                <Submitbutton type="submit" value={"로그인 →"}></Submitbutton>
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