import { useCallback } from "react";
import RenderBlog from "./RenderBlog";

import Post from "./Post";

import './Blog.css'

const Blog = () => {
    const renderPosts = useCallback((posts: Post[]) => (
        <>
            {posts.map((post) => (
                <div key={post.id} className="post">
                    <h3 className="postTitle">{post.title}</h3>
                    <p className="postBody">{post.body}</p>
                </div>
            ))}
        </>
    ), []);

    return (
        <div className="blogMain">
            <h1>This is a blog page</h1>

            <RenderBlog render={renderPosts} />

            {/* <ScrollPosition /> */}
        </div>
    );
};

export default Blog;
