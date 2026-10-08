import { Link, useParams } from "react-router-dom";
import posts from "../data/posts";

function PostDetails() {
  const { id } = useParams();

  const post = posts.find((post) => post.id === Number(id));

  // If post doesn't exist
  if (!post) {
    return (
      <div className="container py-5 text-center">
        <h1>Post Not Found</h1>
        <p className="text-muted">The post you're looking for doesn't exist.</p>
        <Link to="/blog" className="btn btn-dark">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="py-5">
      <div className="container">
        {/* Back */}
        <Link to="/blog" className="text-decoration-none text-dark">
          ← Back to Blog
        </Link>

        {/* Article Header */}
        <div className="text-center mt-4 mb-5">
          <span className="badge bg-dark mb-3">{post.category}</span>
          <h1 className="display-4 fw-bold">{post.title}</h1>
          <p className="text-muted">
            {post.date} • By {post.author || "Mahmoud"}
          </p>
        </div>

        {/* Image */}
        <img
          src={post.image}
          alt={post.title}
          className="img-fluid rounded shadow w-100 mb-5"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />

        {/* Content */}
        <div className="mx-auto" style={{ maxWidth: "800px" }}>
          <p className="lead">{post.description}</p>

          <hr className="my-4" />

          <div style={{ whiteSpace: "pre-line", lineHeight: "2" }}>
            {post.content}
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-5">
          <Link to="/blog" className="btn btn-dark">
            ← Back to Blog
          </Link>
        </div>
      </div>
    </article>
  );
}

export default PostDetails;