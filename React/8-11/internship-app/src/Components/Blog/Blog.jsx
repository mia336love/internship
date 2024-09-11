import { useCallback } from "react";
import styles from "./Blog.module.css";
import RenderBlog from "./RenderBlog";

// useCallback тут = функция будет создана только один раз в течение жизненного цикла компонента
// когда компонент RenderBlog перерендеривается, он будет использовать ту же самую функцию renderPosts, избегая ненужных перерендеров
// [] = функция renderPosts будет создана только при первом рендере компонента и не будет пересоздаваться в дальнейшем
const Blog = () => {
  const renderPosts = useCallback((posts) =>
    posts.map((post) => (
      <div key={post.id} className={styles.post}>
        <h3 className={styles.postTitle}>{post.title}</h3>
        <p className={styles.postBody}>{post.body}</p>
      </div>
    ))
  , []);

  return (
    <div className={styles.blogMain}>
      <h1>This is a blog page</h1>

      <RenderBlog render={renderPosts} />

      {/* <ScrollPosition /> */}
    </div>
  );
};

export default Blog;
