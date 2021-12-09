import { Container, Subtitle, Input, Submitbutton, Text, Column } from "../Components/shared";
import { Link } from "react-router-dom";
import routes from "../routes";
import Footer from "../Components/Footer";
import axios from 'axios';
import React,{ useState } from 'react';

function Signup() {
    const url = "/signup"
    const [data, setData] = useState({
        loginId:"",
        password:"",
        name:"",
        nickName:"",
        email:"",
        introduce:""
    })

    function submit(e){
        e.preventDefault();
        axios.post(url,{
            loginId: data.loginId,
            password: data.password,
            name: data.name,
            nickName: data.nickName,
            email: data.email,
            introduce: data.email
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
            <Subtitle>회원가입</Subtitle>
            <form onSubmit={(e)=> submit(e)}>
            <Column>
                <Input onChange={(e)=>handle(e)} id="loginId" value={data.loginId} placeholder="아이디(16자 미만)"></Input>
                <Input onChange={(e)=>handle(e)} id="password" value={data.password} placeholder="비밀번호 (영문 + 숫자 조합)"></Input>
                <Input onChange={(e)=>handle(e)} id="password" value={data.password}placeholder="비밀번호 확인"></Input>
                <Input onChange={(e)=>handle(e)} id="nickName" value={data.nickName}placeholder="닉네임(12자 미만)"></Input>
                <Input onChange={(e)=>handle(e)} id="name" value={data.name}placeholder="이름"></Input>
                <Input onChange={(e)=>handle(e)} id="email" value={data.email}placeholder="이메일"></Input>
                <Input onChange={(e)=>handle(e)} id="introduce" value={data.introduce}placeholder="한 줄 소개"></Input>
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