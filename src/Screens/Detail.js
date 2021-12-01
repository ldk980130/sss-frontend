import { useParams } from 'react-router-dom';
import { Container, Box, Text, Absolute, Submitbutton, Row } from "../Components/shared";
import styled from "styled-components";
import Footer from '../Components/Footer';

export const CommentInput = styled.textarea`
    width: 570px;
    height: 70px;
    padding: 10px;
    border-radius: 10px;
    background-color:#fafafa;
    border: 1px solid #C4C4C4;
    font-size: 15px;
    &::placeholder{
        font-size: 15px;
    }
`;

const Detail = (props) => {
    let { id } = useParams(); // URL의 /:id 파라미터 값
    let viewpost = props.post.find(function(post){ //find 함수로 Array 안에서 원하는 자료를 찾는다
        return post.id == id //현재 URL의 /:id 값과 게시글의 고유 id가 일치한다면 변수로 저장
      });

    return (
        <>
        <Container>
            <Box width='800px'>
                <Text size='23px'>{ viewpost.title }</Text><Text size='12px'> { viewpost.author }</Text>
                <hr/>
                <Text size='17px'>{ viewpost.content }</Text>
                <Absolute></Absolute>
            </Box>
            <Box width='800px' top='30px' pt='10px' pb='10px'><Row>
                <div><CommentInput placeholder='댓글'></CommentInput></div>
                <Submitbutton ml='40px' type="submit" value={"댓글 작성"}></Submitbutton>
            </Row></Box>
            <Box width='700px' top='20px' pt='20px' pb='20px'>
                <Text size='15px'>댓글들</Text>
            </Box>
        </Container>
        <Footer />
        </>
    );
};

export default Detail;