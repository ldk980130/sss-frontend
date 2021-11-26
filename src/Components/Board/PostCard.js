import React from 'react';
import { Card, Col } from 'react-bootstrap'; 

const PostCard = (props) => {
    return (
    <Col>
    <Card style={{ width: '300px', height: '200px' }}>
      <Card.Body>
        <Card.Title>{ props.post.title }</Card.Title>
        <Card.Text>{ props.post.content } { props.post.author }</Card.Text>
      </Card.Body>
    </Card>
    </Col>
    );
};

export default PostCard;