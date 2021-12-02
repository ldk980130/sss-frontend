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

    if (props.board === 99) {
        return (
          <PostContainer>
          <Subtitle top='30px' bottom='20px'>OTT추가요청게시판</Subtitle>
          <Row className="g-4">
            {
              props.post99.slice(0).reverse().map((a,i)=>{ /*slice(0).reverse() -> 최신순으로 출력*/
                return(
                    <PostCard board={props.board} post={a} i={i}></PostCard>
                )
              })
            }
          </Row>
          </PostContainer>
        )
      }

    if (props.board === 0) {
        return (
          <PostContainer>
          <Subtitle top='30px' bottom='20px'>왓챠 자유게시판</Subtitle>
          <Row className="g-4">
            {
              props.post0.slice(0).reverse().map((a,i)=>{ /*slice(0).reverse() -> 최신순으로 출력*/
                return(
                    <PostCard board={props.board} post={a} i={i}></PostCard>
                )
              })
            }
          </Row>
          </PostContainer>
        )
      }

      if (props.board === 1) {
        return (
          <PostContainer>
          <Subtitle top='30px' bottom='20px'>왓챠 구인게시판</Subtitle>
          <Row className="g-4">
            {
              props.post1.slice(0).reverse().map((a,i)=>{ /*slice(0).reverse() -> 최신순으로 출력*/
                return(
                    <PostCard board={props.board} post={a} i={i}></PostCard>
                )
              })
            }
          </Row>
          </PostContainer>
        )
      }

      if (props.board === 2) {
        return (
          <PostContainer>
          <Subtitle top='30px' bottom='20px'>왓챠 게시판추가요청</Subtitle>
          <Row className="g-4">
            {
              props.post2.slice(0).reverse().map((a,i)=>{ /*slice(0).reverse() -> 최신순으로 출력*/
                return(
                    <PostCard board={props.board} post={a} i={i}></PostCard>
                )
              })
            }
          </Row>
          </PostContainer>
        )
      }

      if (props.board === 3) {
        return (
          <PostContainer>
          <Subtitle top='30px' bottom='20px'>웨이브 자유게시판</Subtitle>
          <Row className="g-4">
            {
              props.post3.slice(0).reverse().map((a,i)=>{ /*slice(0).reverse() -> 최신순으로 출력*/
                return(
                    <PostCard board={props.board} post={a} i={i}></PostCard>
                )
              })
            }
          </Row>
          </PostContainer>
        )
      }

      if (props.board === 4) {
        return (
          <PostContainer>
          <Subtitle top='30px' bottom='20px'>웨이브 구인게시판</Subtitle>
          <Row className="g-4">
            {
              props.post4.slice(0).reverse().map((a,i)=>{ /*slice(0).reverse() -> 최신순으로 출력*/
                return(
                    <PostCard board={props.board} post={a} i={i}></PostCard>
                )
              })
            }
          </Row>
          </PostContainer>
        )
      }

      if (props.board === 5) {
        return (
          <PostContainer>
          <Subtitle top='30px' bottom='20px'>웨이브 게시판 추가요청</Subtitle>
          <Row className="g-4">
            {
              props.post5.slice(0).reverse().map((a,i)=>{ /*slice(0).reverse() -> 최신순으로 출력*/
                return(
                    <PostCard board={props.board} post={a} i={i}></PostCard>
                )
              })
            }
          </Row>
          </PostContainer>
        )
      }

      if (props.board === 6) {
        return (
          <PostContainer>
          <Subtitle top='30px' bottom='20px'>스포티파이 자유게시판</Subtitle>
          <Row className="g-4">
            {
              props.post6.slice(0).reverse().map((a,i)=>{ /*slice(0).reverse() -> 최신순으로 출력*/
                return(
                    <PostCard board={props.board} post={a} i={i}></PostCard>
                )
              })
            }
          </Row>
          </PostContainer>
        )
      }

      if (props.board === 7) {
        return (
          <PostContainer>
          <Subtitle top='30px' bottom='20px'>스포티파이 구인게시판</Subtitle>
          <Row className="g-4">
            {
              props.post7.slice(0).reverse().map((a,i)=>{ /*slice(0).reverse() -> 최신순으로 출력*/
                return(
                    <PostCard board={props.board} post={a} i={i}></PostCard>
                )
              })
            }
          </Row>
          </PostContainer>
        )
      }

      if (props.board === 8) {
        return (
          <PostContainer>
          <Subtitle top='30px' bottom='20px'>스포티파이 게시판추가요청</Subtitle>
          <Row className="g-4">
            {
              props.post8.slice(0).reverse().map((a,i)=>{ /*slice(0).reverse() -> 최신순으로 출력*/
                return(
                    <PostCard board={props.board} post={a} i={i}></PostCard>
                )
              })
            }
          </Row>
          </PostContainer>
        )
      }
};

export default BoardContent;