import { Card, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Text } from "../shared";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PostCard = (props) => {
    //axios GET
    const [posts, setPosts] = useState([]);
    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      console.log(res);
      setPosts(res.data);
    });
  }, []);

    // let preview = posts.email.substring(0,19); /*20자 본문 미리보기*/
    
    return (
    <Col>
    <Link to={"/detail/" + (props.board) + "/" + (props.i)} style={{ textDecoration: 'none' }}>  {/*detail/게시판id/게시글id*/}
    <Card style={{ width: '300px', height: '120px' }}>
    {posts.map(posts => (<Card.Body>
        <Card.Title> <Text size='20px'>{posts.id}</Text> <Text size='12px'>by {posts.username}</Text> </Card.Title>
        <hr/>
        <Card.Text><Text size='17px'>{posts.email}</Text></Card.Text>
      </Card.Body>))}
    </Card>
    </Link>
    </Col>
    );
};

export default PostCard;