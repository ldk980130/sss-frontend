import { useParams } from 'react-router-dom';

const Detail = (props) => {
    let { id } = useParams(); // URL의 /:id 파라미터 값
    let viewpost = props.post.find(function(post){ //find 함수로 Array 안에서 원하는 자료를 찾는다
        return post.id == id //현재 URL의 /:id 값과 게시글의 고유 id가 일치한다면 변수로 저장
      });

    return (
        <div>
            <h4>{ viewpost.title }</h4>
            <p>{ viewpost.content }</p>
            <p>{ viewpost.author }</p>
        </div>
    );
};

export default Detail;