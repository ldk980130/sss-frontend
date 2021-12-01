import { Container, Box, Submitbutton } from "../Components/shared";
import styled from "styled-components";
import Footer from '../Components/Footer';

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
    return (
        <>
        <Container>
            <Box width='800px' pb='20px'>
            <TextInput placeholder='제목' height='60px'></TextInput>
            <TextInput placeholder='본문' height='500px' mt='20px'></TextInput>
            <Submitbutton ml='580px' mt='20px' type="submit" value={"글 작성"}></Submitbutton>
            </Box>
        </Container>
        <Footer />
        </>
    );
};

export default Create;