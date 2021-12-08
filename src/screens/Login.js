import styled from "styled-components";
import { Container, Subtitle, Input, Submitbutton, Text, Column } from "../Components/shared";
import { Link } from "react-router-dom";
import routes from "../routes";
import Footer from "../Components/Footer";
import React,{ useState } from 'react';
import axios from 'axios';

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
    const url = "/login"
    const [data, setData] = useState({
        loginId:"",
        password:""
    })

    function submit(e){
        e.preventDefault();
        axios.post(url,{
            userID: data.userID,
            userPW: data.userPW
        },{
            headers: {'Content-Type': 'application/json'}
            }).then(res=>{
            console.log(res.data);
        }).catch(error=>{
            console.log(error);
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
        <>
        <Container>
            <Subtitle top="10px">로그인</Subtitle>
            <form onSubmit={(e)=> submit(e)}>
                <Column>
                <Input onChange={(e)=>handle(e)} id="loginId" value={data.loginId} placeholder="아이디"/>
                <Input onChange={(e)=>handle(e)} id="password" value={data.password} placeholder="비밀번호"/>
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