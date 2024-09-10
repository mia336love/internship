import styles from "./Blog.module.css";
import RenderBlog from "./RenderBlog";
// import ScrollPosition from "./ScrollPosition";

const Blog = () => {
  return (
    <div className={styles.blogMain}>
      <h1>This is a blog page</h1>

      <RenderBlog
        render={(posts) =>
          posts.map((post) => (
            <div key={post.id} className={styles.post}>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <p className={styles.postBody}>{post.body}</p>
            </div>
          ))
        }
      />

      {/* <ScrollPosition /> */}
    </div>
  );
};

export default Blog;
