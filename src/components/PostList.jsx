import React, { useEffect, useState } from 'react'
import PostItem from './PostItem'

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <>
      <input type="text" onChange={e => setNewPost(e.target.value)} value={newPost}/>

      <ul>
        {posts.map(post => <PostItem key={post.id} post={post}/>)}
      </ul>
    </>
  )
}
