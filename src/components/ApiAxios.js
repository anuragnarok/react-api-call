import React, { useEffect, useState } from "react";
import axios from "axios";
const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
})


const ApiAxios = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    client.get('/1').then((response) => {
      setPost(response.data);
    });
  }, []);
  // console.log(post)
  function createPost() {
    client
      .post('', {
        title: "hellow world i am anurag!",
        body: "This a new post.",
      })
      .then((response) => {
        setPost(response.data);
        console.log(response.data);
      });
  }
  function updatePost() {
    client
      .put('/1', {
        title: "Hi i am anurag!",
        body: "This is an updated post",
      })
      .then((response) => {
        setPost(response.data);
        console.log(response.data);
      });
  }
  function deletePost() {
    client.delete('/1').then(() => {
        setPost(null);
      alert("post deleted!");
    });
  }
  if (!post)
    return (
      <div>
        <h1>no post</h1>
        <button onClick={createPost}>create post</button>
        <button onClick={deletePost}>deletePost</button>
      </div>
    );
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={updatePost}>update post</button>
      <button onClick={createPost}>create post</button>
      <button onClick={deletePost}>deletePost</button>
    </div>
  );
};

export default ApiAxios;
