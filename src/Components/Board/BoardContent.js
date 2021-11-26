import GetData from './GetData';
import data from '../../data';
import { useState } from 'react';
import PostCard from './PostCard';
import { Row } from 'react-bootstrap'; 
import styled from "styled-components";
import { Subtitle } from "../shared";

const PostContainer = styled.div`
    padding-bottom: 100px;
    padding-left: 70px;
    padding-right: 70px;
`;

const BoardContent = (props) => {
    let [post, setPost] = useState(data);

    if (props.board === 99) {
        return (
          <PostContainer>
          <Subtitle top='30px' bottom='20px'>OTT추가요청게시판</Subtitle>
          <Row className="g-4">
            {
              post.slice(0).reverse().map((a,i)=>{ /*slice(0).reverse() -> 최신순으로 출력*/
                return(
                    <PostCard post={a} i={i}></PostCard>
                )
              })
            }
          </Row>
          </PostContainer>
        )
      }

    if (props.board === 0) {
        return (
        <div>
          <div>왓챠 자유게시판</div>
          <br/>
          <div>
            **통신 테스트**<br/><hr/>
            <GetData />
          </div>
        </div>
        )
      }

      if (props.board === 1) {
        return (
          <div>왓챠 구인게시판</div>
        )
      }

      if (props.board === 2) {
        return (
          <div>왓챠 게시판 추가 요청</div>
        )
      }

      if (props.board === 3) {
        return (
          <div>웨이브 자유게시판</div>
        )
      }

      if (props.board === 4) {
        return (
          <div>웨이브 구인게시판</div>
        )
      }

      if (props.board === 5) {
        return (
          <div>웨이브 게시판 추가 요청</div>
        )
      }

      if (props.board === 6) {
        return (
          <div>스포티파이 자유게시판</div>
        )
      }

      if (props.board === 7) {
        return (
          <div>스포티파이 구인게시판</div>
        )
      }

      if (props.board === 8) {
        return (
          <div>스포티파이 게시판 추가 요청</div>
        )
      }
};

export default BoardContent;