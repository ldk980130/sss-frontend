import styled from "styled-components";
import { useState } from "react";
import BoardHeader from "./BoardHeader";
import BoardContent from "./BoardContent";

const TabContainer = styled.div`
    height: 30px;
    width: 100%;
    background: #ffffff;
    padding-top: 10px;
    
    display: flex;
    align-items: center;
`;

const TabItem = styled.button`
    cursor: pointer;
    margin-left: 50px;
    color: #565656;
    font-size: 17px;
    font-weight: bold;
    &: hover {
      color: #828282;
    }
    &: focus {
      color: #828282;
    }

    border:none;
    background: #ffffff;
`;

const OttTab = (props) => {
  return (
    <>
      <TabContainer>
        <TabItem onClick={()=>{ props.setOtt(0) }}>Watcha</TabItem>
        <TabItem onClick={()=>{ props.setOtt(1) }}>wave</TabItem>
        <TabItem onClick={()=>{ props.setOtt(2) }}>Spotify</TabItem>
        <TabItem onClick={()=>{ props.setBoard(99); props.setOtt(99); }}>OTT추가요청</TabItem>
      </TabContainer>
    </>
  );
};

const BoardTab = (props) => {
  if (props.ott === 0) {
    return (
      <>
      <TabContainer>
        <TabItem onClick={()=>{ props.setBoard(0) }}>왓챠 자유게시판</TabItem>
        <TabItem onClick={()=>{ props.setBoard(1) }}>왓챠 구인게시판</TabItem>
        <TabItem onClick={()=>{ props.setBoard(2) }}>왓챠 게시판추가요청</TabItem>
      </TabContainer>
      <hr/>
      </>
    )
  }
  if (props.ott === 1) {
    return (
      <>
      <TabContainer>
        <TabItem onClick={()=>{ props.setBoard(3) }}>웨이브 자유게시판</TabItem>
        <TabItem onClick={()=>{ props.setBoard(4) }}>웨이브 구인게시판</TabItem>
        <TabItem onClick={()=>{ props.setBoard(5) }}>웨이브 게시판추가요청</TabItem>
      </TabContainer>
      <hr/>
      </>
    )
  }
  if (props.ott === 2) {
    return (
      <>
      <TabContainer>
        <TabItem onClick={()=>{ props.setBoard(6) }}>스포티파이 자유게시판</TabItem>
        <TabItem onClick={()=>{ props.setBoard(7) }}>스포티파이 구인게시판</TabItem>
        <TabItem onClick={()=>{ props.setBoard(8) }}>스포티파이 게시판추가요청</TabItem>
      </TabContainer>
      <hr/>
      </>
    )
  }
  if (props.ott === 99) {
    return (
      <>
      </>
    )
  }
};

const Board = (props) => {
  const [ott, setOtt] = useState(0);
  const [board, setBoard] = useState(0);
  return (
    <>
      <BoardHeader isLoggedIn={props.isLoggedIn}/>
      <OttTab setOtt={setOtt} setBoard={setBoard} />
      <hr/>
      <BoardTab ott={ott} setBoard={setBoard}/>
      <BoardContent 
        board={board} 
        ott={ott} 
        
        post0={props.post0}
        post1={props.post1}
        post2={props.post2}
        post3={props.post3}
        post4={props.post4}
        post5={props.post5}
        post6={props.post6}
        post7={props.post7}
        post8={props.post8}
        post99={props.post99}
      />
    </>
  );
};

export default Board;