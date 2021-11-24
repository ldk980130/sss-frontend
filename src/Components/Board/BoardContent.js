import GetData from './GetData';

const BoardContent = (props) => {
    if (props.board === 99) {
        return (
          <div>OTT 추가 요청 게시판</div>
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