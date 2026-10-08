import { Link } from "react-router-dom";

function BlogCard({ post }) {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={post.image}
        className="card-img-top"
        alt={post.title}
        style={{ height: "220px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column">
        <span className="badge bg-dark mb-2 align-self-start">
          {post.category}
        </span>

        <h5 className="card-title">{post.title}</h5>

        <p className="text-muted small">{post.date}</p>

        <p className="card-text">{post.description}</p>

        <Link to={`/post/${post.id}`} className="btn btn-dark mt-auto">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;