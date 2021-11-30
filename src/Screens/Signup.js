import { Container, Subtitle, Input, Submitbutton, Text, Column } from "../Components/shared";
import { Link } from "react-router-dom";
import routes from "../routes";
import Footer from "../Components/Footer";

function Signup() {
    return (
        <>
        <Container>
            <Subtitle>회원가입</Subtitle>
            <form>
            <Column>
                <Input placeholder="아이디(16자 미만)"></Input>
                <Input placeholder="비밀번호 (영문 + 숫자 조합)"></Input>
                <Input placeholder="비밀번호 확인"></Input>
                <Input placeholder="닉네임(12자 미만)"></Input>
                <Input placeholder="이름"></Input>
                <Input placeholder="이메일"></Input>
                <Input placeholder="한 줄 소개"></Input>
                <Submitbutton mt='30px' ml='300px' type="submit" value={"가입하기 →"}></Submitbutton>
            </Column>
            </form>
            <Text top="40px" bottom="100px;">
                이미 회원이신가요? <Link to={routes.logIn} style={{ textDecoration: 'none', color: '#565656' }}>로그인</Link>
            </Text>
        </Container>
        <Footer />
        </>
    );
}

export default Signup;