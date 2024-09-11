import { useState, useEffect } from "react";

const RenderBlog = ({ render }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setPosts(json));
  }, []);

  return render(posts);
};

export default RenderBlog;
