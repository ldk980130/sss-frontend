import { useParams } from 'react-router-dom';
import { Container, Box, Text, Submitbutton, Row, Column } from "../Components/shared";
import styled from "styled-components";
import Footer from '../Components/Footer';
import ReportModal from '../Components/Modal/ReportModal';
import { useState } from 'react';

const CommentInput = styled.textarea`
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

const Recommend = styled.div`
    width: 80px;
    height: 70px;
    padding: 10px;
    border-radius: 20px;
    margin-top: 20px;
    background-color:#fafafa;
    border: 1px solid #C4C4C4;
    cursor: pointer;
`;

const ReportBox = styled.div`
    margin-left: 630px;
    cursor: pointer;
`;

const Detail = (props) => {
    let { id } = useParams(); // URL의 /:id 파라미터 값
    let viewpost = props.post.find(function(post){ //find 함수로 Array 안에서 원하는 자료를 찾는다
        return post.postId == id //현재 URL의 /:id 값과 게시글의 고유 id가 일치한다면 변수로 저장
      });
    
    const [recommend, setRecommend] = useState(0);
    const [reportModal, setReportModal] = useState(false);

    return (
        <>
        <Container>
            { reportModal === true ? <ReportModal setReportModal={setReportModal} /> : null } 
            <Box width='800px'>
                <Text size='23px'>{ viewpost.title }</Text><Text size='12px'> { viewpost.nickName }</Text>
                <hr/>
                <Text size='17px'>{ viewpost.content }</Text>
                <Column>
                    <Recommend onClick={ ()=>{setRecommend(recommend+1)} }>
                        <Column>
                        <Text size='15px'>추천</Text>
                        <Text top='10px' size='25px'>{recommend}</Text>
                        </Column>
                    </Recommend>
                </Column>
                <ReportBox onClick={ ()=>{ setReportModal(true) }}>
                    <Text size='12px'>게시글 신고하기</Text>
                </ReportBox>
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