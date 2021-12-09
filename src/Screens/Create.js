import { Container, Box, Submitbutton } from "../Components/shared";
import styled from "styled-components";
import Footer from '../Components/Footer';
import axios from 'axios';
import { useState } from "react";

export const TextInput = styled.textarea`
    width: 700px;
    padding: 20px;
    border-radius: 10px;
    background-color:#fafafa;
    border: 1px solid #C4C4C4;
    font-size: 15px;
    &::placeholder{
        font-size: 15px;
    }

    height: ${ props => props.height };
    margin-top: ${ props => props.mt };
`;

const Create = () => {
    const url = "/create/"
    const [data, setData] = useState({
        title:"",
        content:"",
        categoryId: 1
    })

    function submit(e){
        e.preventDefault();
        axios.post(url,{
            title: data.title,
            content: data.content
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
            <Box width='800px' pb='20px'>
            <form onSubmit={(e)=> submit(e)}>
                <TextInput onChange={(e)=>handle(e)} id="title" value={data.title}  placeholder='제목' height='60px'></TextInput>
                <TextInput onChange={(e)=>handle(e)} id="content" value={data.content} placeholder='본문' height='500px' mt='20px'></TextInput>
                <Submitbutton ml='580px' mt='20px' type="submit" value={"글 작성"}></Submitbutton>
            </form>
            </Box>
        </Container>
        <Footer />
        </>
    );
};

export default Create;