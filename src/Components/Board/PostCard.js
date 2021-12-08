import { Card, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Text } from "../shared";

const PostCard = (props) => {
    let preview = props.post.content.substring(0,19); /*20자 본문 미리보기*/
    
    return (
    <Col>
    <Link to={"/detail/" + (props.board) + "/" + (props.i)} style={{ textDecoration: 'none' }}>  {/*detail/게시판id/게시글id*/}
    <Card style={{ width: '300px', height: '120px' }}>
    <Card.Body>
        <Card.Title><Text size='20px'>{ props.post.title }</Text> <Text size='12px'>by { props.post.nickName }</Text></Card.Title>
        <hr/>
        <Card.Text><Text size='17px'>{ preview }</Text></Card.Text>
      </Card.Body>
    </Card>
    </Link>
    </Col>
    );
};

export default PostCard;