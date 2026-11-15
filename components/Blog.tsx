import { posts } from "@/data/posts";

interface BlogProps {
  active: boolean;
}

export default function Blog({ active }: BlogProps) {
  return (
    <article className={`blog${active ? " active" : ""}`} data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {posts.map((post) => (
            <li className="blog-post-item" key={post.href}>
              <a target="_blank" href={post.href}>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>

                    <span className="dot"></span>

                    <time dateTime="2022-02-23">{post.date}</time>
                  </div>

                  <h3 className="h3 blog-item-title">{post.title}</h3>

                  <p className="blog-text">{post.text}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
