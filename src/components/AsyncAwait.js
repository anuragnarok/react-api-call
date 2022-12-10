//Writing the same code as ApiAxios but using async and Await.
import React from 'react'
import axios from 'axios'
const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts" 
  });
const AsyncAwait = () => {
    const [post, setPost] = React.useState(null);
    React.useEffect(() => {
        async function getPost() {
          const response = await client.get("/1");
          setPost(response.data);
        }
        getPost();
      }, []);
    
      async function deletePost() {
        await client.delete("/1");
        alert("Post deleted!");
        setPost(null);
      }
      if (!post) return "No post!"
  return (
    <div>
          <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  )
}

export default AsyncAwait