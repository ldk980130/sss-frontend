import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GetData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/home')
    .then(res => {
      console.log(res);
      setPosts(res.data);
    });
  }, []);

  return (
    <div>
      <ul>
        {posts.map(posts => (<li key={posts.postId}>{posts.title}&emsp;{posts.nickName}&emsp;{posts.date}&emsp;{posts.content}</li>))}
      </ul>
    </div>
  );
};

export default GetData;