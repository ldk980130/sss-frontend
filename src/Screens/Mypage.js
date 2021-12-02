import { Container, Box, Subtitle, Text } from "../Components/shared";
import { Card, Col, Row } from 'react-bootstrap'; 
import styled from "styled-components";
import Footer from '../Components/Footer';
import { Link } from "react-router-dom";

const PostContainer = styled.div`
    padding-bottom: 100px;
    padding-left: 70px;
    padding-right: 70px;
`;

const Mypage = (props) => {
    return (
        <>
            <Container>
                <Box width='1000px'>
                    <Subtitle>닉네임</Subtitle>
                    <Text size='15px' >( 신뢰 점수 )</Text>
                </Box>
            </Container>
            <PostContainer>
            <Subtitle top='30px' bottom='20px'>내가 쓴 글</Subtitle>
            <Row className="g-4">
                {
                props.post100.slice(0).reverse().map((a,i)=>{ /*slice(0).reverse() -> 최신순으로 출력*/
                    return(
                        <MyPostCard board={props.board} post={a} i={i}></MyPostCard>
                    )
                })
                }
            </Row>
            </PostContainer>
            <Footer />    
        </>
    );
};

const MyPostCard = (props) => {
    let preview = props.post.content.substring(0,19); /*20자 본문 미리보기*/
    
    return (
    <Col>
    <Link to={"/mypage/detail/" + (props.i)} style={{ textDecoration: 'none' }}>  {/*detail/게시판id/게시글id*/}
    <Card style={{ width: '300px', height: '120px' }}>
      <Card.Body>
        <Card.Title><Text size='20px'>{ props.post.title }</Text> <Text size='12px'>by { props.post.author }</Text></Card.Title>
        <hr/>
        <Card.Text><Text size='17px'>{ preview }</Text></Card.Text>
      </Card.Body>
    </Card>
    </Link>
    </Col>
    );
};

export default Mypage;