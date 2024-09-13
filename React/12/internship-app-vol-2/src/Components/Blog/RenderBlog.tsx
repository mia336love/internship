import { useState, useEffect } from "react";

import Post from "./Post";

interface RenderBlogProps {
    render: (value: Post[]) => JSX.Element
}

const RenderBlog = ({ render }: RenderBlogProps) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setPosts(json));
  }, []);

  return render(posts);
};

export default RenderBlog;
